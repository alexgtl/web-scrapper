import Image from 'next/image'
import { ProductList } from '@/components/ProductList'
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/src/api/scraped_data.json',
    'utf8',
  )
  const data = JSON.parse(file)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <header className="w-screen min-h-56 flex items-center justify-center bg-red-400 text-yellow-50 gap-8 row-start-2">
        <div className="w-full max-w-[1444px]">
          <h1 className="text-4xl font-bold max-w-[1444px]">
            Los mejores teclados de Amazon
          </h1>
        </div>
      </header>

      <main className="flex flex-col justify-center w-full gap-8 row-start-2 items-center sm:items-start pt-5 max-w-[1444px]">
        <p>
          {' '}
          Bienvenido a nuestra guía definitiva de compra donde descubrirás los
          mejores teclados disponibles en Amazon. Si buscas el teclado perfecto
          para trabajar, jugar o simplemente mejorar tu productividad, aquí
          encontrarás las opciones más recomendadas, desde teclados mecánicos
          hasta inalámbricos y ergonómicos. Sigue leyendo para encontrar el
          teclado ideal que se adapta a tus necesidades. Subtítulo 1 (H2): ¿Por
          Qué Elegir el Teclado Correcto es Esencial? Texto: Un buen teclado
          puede marcar una gran diferencia en tu experiencia diaria. Los
          teclados de calidad ofrecen comodidad, velocidad de respuesta y
          durabilidad. Si eres un gamer, escritor, programador o simplemente
          pasas mucho tiempo frente a la computadora, invertir en un teclado
          adecuado no solo mejora tu rendimiento, sino que también ayuda a
          prevenir lesiones por esfuerzo repetitivo.
        </p>
        <h2 className="text-lg font-bold text-yellow-800">
          ¿Por Qué Elegir el Teclado Correcto es Esencial?
        </h2>

        <p>
          Un buen teclado puede marcar una gran diferencia en tu experiencia
          diaria. Los teclados de calidad ofrecen comodidad, velocidad de
          respuesta y durabilidad. Si eres un gamer, escritor, programador o
          simplemente pasas mucho tiempo frente a la computadora, invertir en un
          teclado adecuado no solo mejora tu rendimiento, sino que también ayuda
          a prevenir lesiones por esfuerzo repetitivo.
        </p>
        <h2 className="text-lg font-bold text-yellow-800">
          ¿Qué teclado debería comprar?
        </h2>
        <p>
          Si eres un gamer, escritor, programador o simplemente pasas mucho
          tiempo frente a la computadora, invertir en un teclado adecuado no
          solo mejora tu rendimiento, sino que también ayuda a prevenir lesiones
          por esfuerzo repetitivo. Si eres un gamer, escritor, programador o
          simplemente pasas mucho tiempo frente a la computadora, invertir en un
          teclado adecuado no solo mejora tu rendimiento, sino que también ayuda
          a prevenir lesiones por esfuerzo repetitivo. Si eres un gamer,
          escritor, programador o simplemente pasas mucho tiempo frente a la
          computadora, invertir en un teclado adecuado no solo mejora tu
          rendimiento, sino que también ayuda a prevenir lesiones por esfuerzo
          repetitivo.
        </p>

        <ProductList products={data} />
      </main>

      <footer className="w-screen mt-12 min-h-48 items-center justify-center bg-red-400 text-yellow-50 row-start-3 flex gap-6 flex-wrap">
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
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
