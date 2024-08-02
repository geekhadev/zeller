import Link from 'next/link'

const CardCar = ({ price, name, slug, size }) => {
  const sizeClass = size === 'xl' ? 'h-96' : 'h-60'
  const fontSizeTitleClass = size === 'xl' ? 'px-4 py-3 text-4xl' : 'px-2 py-1 text-2xl'
  const fontSizePriceClass = size === 'xl' ? 'px-4 py-1 text-2xl' : 'px-2 py-1 text-xl'
  return (
    <Link href={`/tienda/${slug}`}>
      <article className="flex w-full relative group cursor-pointer">
        <div className='flex items-end w-full relative overflow-hidden'>
          <div className={`bg-cover bg-no-repeat bg-center ${sizeClass} w-full transition-transform duration-300 group-hover:scale-110`} style={{ backgroundImage: 'url(/autos/' + slug + '.webp)' }}></div>
          <div className="absolute flex flex-col left-0 bottom-0 items-start">
            <span className={`text-gray-200 font-bold bg-gray-950 ${fontSizePriceClass}`}>
              {price} CLP
            </span>
            <span className={`text-green-900 font-bold bg-lime-500 font-anton ${fontSizeTitleClass}`}>
              {name}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default CardCar
