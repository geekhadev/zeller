const Footer = () => {
  return (
    <section className='bg-blue-zeller -mb-2'>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">

            <div className='flex flex-col col-span-2 -mt-6'>
              <div className="max-w-96">
                <img src='relif_logo_white.webp' alt='Chat Bubble' className='h-24' />
              </div>
              <p className='max-w-96 text-gray-400 text-lg ml-4'>
                Este es un producto de <a href='#' target='_blank' rel='noreferrer' className='text-yellow-400 underline'>Relif</a> hecho con ❤️ en Chile, para la industria automotriz.
              </p>
            </div>

            <div className='flex flex-col'>
              <h4 className='text-gray-400 text-2xl font-bold mb-2'>
                Enlaces de interés
              </h4>
              <nav className='text-white text-xl gap-1 flex flex-col'>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>
                  Sitio web de Relif
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>
                  Blog y noticias
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>
                  Términos y condiciones
                </a>
              </nav>
            </div>

            <div className='flex flex-col'>
              <h4 className='text-gray-400 text-2xl font-bold mb-2'>
                Redes sociales
              </h4>
              <nav className='text-white text-xl gap-1 flex flex-col'>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>
                  LinkedIn
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>
                  Twitter (X)
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>
                  Facebook
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-yellow-400'>
                  Instagram
                </a>
              </nav>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
