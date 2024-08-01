const Features = () => {
  return (
    <section className='py-24 pt-36' id="porque-elegirnos">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-36">
        <div className="flex justify-between items-center">
          <div className='flex-1 flex justify-center items-center'>
            <img src='feature1.svg' alt='Banner' className='h-[300px]' />
          </div>
          <div className='flex-1 flex flex-col gap-4 text-left'>
            <h3 className='text-4xl font-bold text-blue-zeller'>
              No somos el típico chatbot
            </h3>
            <p className='text-lg text-balance'>
              Nos especializamos en la venta de autos, hemos dedicados horas de entrenamiento para que nuestros modelos de IA sean los mejores en el mercado.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className='flex-1 flex flex-col gap-4 text-right'>
            <h3 className='text-4xl font-bold text-blue-zeller'>
              Información integrada
            </h3>
            <p className='text-lg text-balance'>
              Conectamos nuestros algoritmos de IA con tus fuentes de datos para que puedas tener toda la información en un solo lugar y tengas un asistente de ventas especializado.
            </p>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <img src='feature2.svg' alt='Banner' className='h-[300px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
