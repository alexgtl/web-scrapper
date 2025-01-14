import Image from 'next/image'
import Link from 'next/link'
import BuyButton from '../BuyButton'

export default function ProductCard(props) {
  const { title, url, img_source } = props.product

  return (
    <article className="flex  gap-4 items-center border-2 border-red-200 rounded-lg p-4">
      <Image
        src={img_source}
        alt={title}
        width={250}
        height={250}
        style={{ width: 'auto', height: 'auto' }}
      />

      <div className="flex flex-col gap-2 items-start text-overflow-clip break-words">
        <h1 className="text-md font-bold break-words">{title}</h1>
        <Link href={url} target="_blank">
          <BuyButton>Buy on Amazon</BuyButton>
        </Link>
      </div>
    </article>
  )
}
