const Hero = () => {
  return (
    <section className='py-24'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ccc,transparent)]"></div>
      </div>
      <div className="max-w-screen-xl mx-auto flex justify-between items-center min-h-96 gap-36">
        <div className='flex justify-end items-center'>
          <img src='/banner.png' alt='Banner' className='h-[500px]' />
        </div>
        <div className='flex-1 flex flex-col gap-4'>
          <h1 className='text-7xl font-bold text-blue-zeller'>
            Automatiza tu automotora
          </h1>
          <p className='text-lg text-balance'>
            Atiende en el minuto a tus prospectos con intligencia artificial, mejorando tus procesos de venta.
          </p>
          <div>
            <button className='
              rounded-full
              text-white
              text-xl
              py-4
              px-8
              border
              hover:font-bold
              hover:text-white
              scale-100
              hover:scale-105
              transition-all
              duration-300
              cursor
              bg-gradient-to-r
              hover:from-blue-950
              hover:to-blue-zeller
              from-blue-950
              to-blue-900
              flex gap-2
            '>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-confetti"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5h2" /><path d="M5 4v2" /><path d="M11.5 4l-.5 2" /><path d="M18 5h2" /><path d="M19 4v2" /><path d="M15 9l-1 1" /><path d="M18 13l2 -.5" /><path d="M18 19h2" /><path d="M19 18v2" /><path d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39z" /></svg>
              ¡Solicita un demo gratis!
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
