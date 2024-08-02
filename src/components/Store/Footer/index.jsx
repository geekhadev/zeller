const Footer = () => {
  return (
    <section className='bg-gray-950 -mb-2'>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">

            <div className='flex flex-col col-span-2'>
              <div className="max-w-96">
                <h4 className='text-4xl text-white font-bold'>
                  Bruno Fritsch
                </h4>
              </div>
              <p className='max-w-96 text-gray-400 text-lg mt-2'>
                Mas de 30 años de experiencia en el rubro automotriz, concesionario oficial de la marca Volkswagen en Chile.
              </p>
            </div>

            <div className='flex flex-col'>
              <h4 className='text-gray-400 text-2xl font-bold mb-2'>
                Enlaces de interés
              </h4>
              <nav className='text-white text-xl gap-1 flex flex-col'>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-blue-400'>
                  Blog y noticias
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-blue-400'>
                  Términos y condiciones
                </a>
              </nav>
            </div>

            <div className='flex flex-col'>
              <h4 className='text-gray-400 text-2xl font-bold mb-2'>
                Redes sociales
              </h4>
              <nav className='text-white text-xl gap-1 flex flex-col'>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-blue-400'>
                  LinkedIn
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-blue-400'>
                  Twitter (X)
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-blue-400'>
                  Facebook
                </a>
                <a href='#' target='_blank' rel='noreferrer' className='hover:text-blue-400'>
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
