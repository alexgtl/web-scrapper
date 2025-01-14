'use client'

import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import DefaultButton from '@/components/DefaultButton'

const ITEMS_PER_PAGE = 5

export function ProductList(props) {
  const { products } = props
  const [page, setPage] = useState(1)
  const [maxPages, setMaxPages] = useState(0)
  const [paginatedProducts, setPaginatedProducts] = useState([])

  function getProductsPerPage(products, page) {
    const paginatedProducts = products.splice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE,
    )

    //console.log(paginatedProducts)
    return paginatedProducts
  }

  const getMaxProductPages = (products) => {
    const maxPages = Math.floor(products.length / ITEMS_PER_PAGE)
    return maxPages
  }

  useEffect(() => {
    setPaginatedProducts(getProductsPerPage(products, page))
    setMaxPages(getMaxProductPages(products))
  }, [])

  useEffect(() => {
    setPaginatedProducts(getProductsPerPage(products, page))
  }, [page])

  return (
    <>
      <ul className="flex flex-col gap-8">
        {paginatedProducts.map((item, index) => {
          return (
            <li key={index}>
              <ProductCard product={item} />
            </li>
          )
        })}
      </ul>

      <div className="w-full flex justify-around">
        <DefaultButton
          handleClick={() => setPage(page - 1 >= 1 ? page - 1 : 1)}
        >
          Página anterior
        </DefaultButton>

        <DefaultButton
          handleClick={() =>
            setPage(page + 1 <= maxPages ? page + 1 : maxPages)
          }
        >
          Siguiente
        </DefaultButton>
      </div>
    </>
  )
}
