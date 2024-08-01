const Information = () => {
  return (
    <section className='py-24 bg-gray-100 '>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-end">
          <div className='flex justify-center items-end'>
            <img src='conversations.svg' alt='Banner' className='h-[400px] -mt-48 opacity-70' />
          </div>
          <div className='flex-1 flex flex-col gap-4 text-center -mt-24'>
            <div className='flex justify-center items-end mb-4'>
              <img src='chat-bubble.svg' alt='Chat Bubble' className='h-24 -mt-48' />
            </div>
            <h3 className='text-4xl font-bold text-blue-zeller'>
              Conversaciones humanas
            </h3>
            <p className='text-lg text-balance'>
              Nos especializamos en la venta de autos, hemos dedicados horas de entrenamiento para que nuestros modelos de IA sean los mejores en el mercado.
            </p>
            <div className="flex justify-center">
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
                hover:from-red-950
                hover:to-red-900
                from-red-950
                to-red-900
                flex
                gap-2
              '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-video"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" /><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /></svg>
                Mira un video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Information
