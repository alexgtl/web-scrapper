export default function Home() {
  return (
    <div className="h-screen p-5 sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <header className="w-screen h-48 flex items-center justify-center bg-slate-900 text-yellow-50 gap-8 row-start-2">
        <h1 className="text-4xl font-bold">Amazon Keyboard Scrapper</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start pt-5"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  )
}
