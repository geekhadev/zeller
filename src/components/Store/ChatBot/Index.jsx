const ChatBot = () => {
  return (
    <div className='flex  flex-col bg-white bg-opacity-10 p-4 items-stretch h-full justify-between'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-4xl text-yellow-400 font-bold mt-4'>
          ¡Obtén tu auto de colección!
        </h3>
        <p className='text-gray-400 text-md text-balance'>
          Hablemos de como puedes cambiar tu vida con un auto de colección,
          estoy para ayudarte a encontrar el auto de tus sueños.
        </p>
      </div>
      <div id="chat" className='mt-8 flex-1 flex flex-col items-start'>
        <p className='text-xl -mt-2 text-white bg-blue-400 px-4 py-2 max-w-[70%] text-balance'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quia. Numquam placeat, autem aliquam a vitae hic earum iste aperiam sequi consequatur distinctio illo illum asperiores beatae fugiat praesentium esse?
        </p>
      </div>
      <div className='flex gap-2'>
        <input type="text" placeholder='Escribe tu mensaje' className='bg-gray-800 text-white text-xl px-4 py-2 w-full' />
        <button className='bg-lime-500 text-black text-xl px-4 py-4'>
          Enviar
        </button>
      </div>
    </div>
  )
}

export default ChatBot
