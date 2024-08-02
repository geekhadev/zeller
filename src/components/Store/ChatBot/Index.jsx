'use client'

import { useState, useEffect, useRef } from 'react'
import BubbleAgent from '@/components/Store/ChatBot/BubbleAgent'
import BubbleUser from '@/components/Store/ChatBot/BubbleUser'

const ChatBot = ({ slug }) => {
  const [messages, setMessages] = useState([])
  const messagesContainerRef = useRef(null)

  const scrollToBottom = () => {
    messagesContainerRef.current?.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e) => {
    e.preventDefault()

    const question = e.target[0].value
    const newMessages = messages.length > 0
      ? [...messages, { role: 'user', content: question }]
      : [{ role: 'user', content: question }]

    setMessages(newMessages)

    fetch('/api/ia/chatbot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        slug,
        messages: newMessages
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data === 'string') {
          setMessages([...newMessages, { role: 'agent', content: data }])
        } else {
          setMessages([...newMessages, { role: 'agent', content: 'Hubo un error al procesar tu mensaje.' }])
        }
      })
      .catch((error) => {
        console.error({ error })
        setMessages([...newMessages, { role: 'agent', content: 'Hubo un error al procesar tu mensaje.' }])
      })

    e.target[0].value = ''
  }

  return (
    <div className='flex flex-col bg-white bg-opacity-10 p-4 items-stretch h-full justify-between'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-4xl text-yellow-400 font-bold mt-4'>
          ¡Obtén tu auto de colección!
        </h3>
        <p className='text-gray-400 text-md text-balance'>
          Hablemos de como puedes cambiar tu vida con un auto de colección,
          estoy para ayudarte a encontrar el auto de tus sueños.
        </p>
      </div>
      <div
        id="messages-container"
        ref={messagesContainerRef}
        className='mt-8 pb-2 flex-1 flex flex-col gap-2 items-end min-h-[600px] max-h-[600px] overflow-auto pr-2 custom-scrollbar overflow-y-scroll'
      >
        {messages.map((message, index) => (
          message.role === 'agent'
            ? <BubbleAgent key={index} message={message.content} />
            : <BubbleUser key={index} message={message.content} />
        ))}
      </div>
      <div className='flex gap-2'>
        <form className='flex gap-2 w-full' onSubmit={handleSubmit}>
          <input type="text" placeholder='Escribe tu mensaje' className='bg-gray-800 text-white text-xl px-4 py-2 w-full' />
          <button type='submit' className='
            hover:bg-lime-700 duration-300
            bg-lime-500 text-black text-xl px-4 py-4'>
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChatBot
