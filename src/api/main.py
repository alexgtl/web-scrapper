import json
from playwright.sync_api import sync_playwright
from urllib.parse import unquote

def extract_url(url):
    if 'click?' in url:
        start_index = url.find('url=%2F') + len('url=%2F')
        end_index = url.find('%2Fref', start_index)
        extract_url = url[start_index : end_index]
        final_url = 'https://www.amazon.com/'+ unquote(extract_url)
        return final_url
    return url

def scrape_urls(page):
  # page.wait_for_selector(".a-size-mini.a-spacing-none.a-color-base.s-line-clamp-2 > a",)
  urls = page.eval_on_selector_all("span[data-component-type='s-product-image'] > a.a-link-normal",
                                      "elements => elements.map(e => e.href)")
  return urls

def scrape_page_data(page, url, page_num):
  try:
      print(f'\nScraping the url {url}')
      page.goto(url, timeout=120000)
      page.wait_for_selector('#productTitle', timeout=30000 )
      title = page.eval_on_selector("#productTitle", 'el => el.textContent')

      page.wait_for_selector('#imgTagWrapperId', timeout=30000)
      img_source = page.eval_on_selector("#imgTagWrapperId > img", 'el => el.src')

      ##page.wait_for_selector('.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > .a-offscreen', timeout=120000)
      ## fee = page.eval_on_selector(".a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > .a-offscreen",
      ##                            'el => el.textContent')

      rating = page.eval_on_selector("#acrPopover .a-size-base.a-color-base", 'el => el.textContent')

      scraped_data = {
          'page': page_num,
          'title': title.strip(),
          'url': url,
          'img_source': img_source,
          'rating': rating.strip()
       }


      print(scraped_data)
      return scraped_data

  except Exception as e:
      print(f'An error occurred scraping the url {url[:50]}...: ${str(e)[:100]}...')
  return {}

def write_to_file(scraped_data_all):
  scraped_data_file = 'scraped_data.json'
  with open(scraped_data_file, 'w') as file:
    print('Writing the file')
    json.dump(scraped_data_all, file)

def main():
  scraped_data_file = 'scraped_data.json'
  scraped_data_all = []

  with sync_playwright() as pw:
    print('Connecting...')

    for page_num in range(1, 6):
      browser = pw.chromium.launch(channel="msedge")
      page = browser.new_page()

      try:
        print(f'Opening page {page_num}...')
        page.goto(f'https://www.amazon.com/s?k=keyboard&page={page_num}')
        print(f'On page {page_num}')
      except Exception as e:
        print(f'Exception ocurred: {e}')

      urls = scrape_urls(page)

      data =  []
      for url in urls:
        session_browser = pw.chromium.launch(channel="msedge")
        session_page = session_browser.new_page()

        page.goto(url)
        scrapped_data = scrape_page_data(session_page, extract_url(url), page_num)


        if scrapped_data:
          data.append(scrapped_data)

        session_browser.close()

      scraped_data_all.extend(data)
      browser.close()



  print('\n\n\n\n\n\n\nall data')
  print(scraped_data_all)
  write_to_file(scraped_data_all)

main()