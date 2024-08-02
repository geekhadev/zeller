import Link from 'next/link'

const CardNotFound = () => {
  return (
    <section className='py-48'>
      <div className="max-w-screen-xl mx-auto">
        <div className='text-center flex flex-col gap-4 items-center'>
          <h1 className='text-4xl text-white text-center'>No se encontró el auto</h1>
          <Link
            href='/tienda'
            className="
              text-gray-400
              border-gray-400
              py-2
              px-4
              border-2
              font-bold
              hover:border-lime-500
              hover:text-lime-500
              transition-all
              duration-200
              cursor
              text-xl
            "
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CardNotFound
