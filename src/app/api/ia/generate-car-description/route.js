import OpenAI from 'openai'

import { CarService } from '@/domain/cars/CarService'
import { PostgresCarRepository } from '@/infrastructure/cars/PostgresCarRepository'
import { ReactCarException } from '@/infrastructure/cars/ReactCarException'
import { ReactCarResponse } from '@/infrastructure/cars/ReactCarResponse'

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

const complete = async ({ messages, model }) => {
  try {
    const response = await openai.chat.completions.create({
      messages,
      model
    })
    return response.choices[0].message.content
  } catch (error) {
    console.error('Error:', error)
    return error
  }
}

async function genetare (question) {
  if (!question) return

  const messages = [
    {
      role: 'system',
      content: `
        Comportate como especialista en autos antiguos, restauración,
        mecanica y especialista en ventas de autos de colección.

        Habla siempre en español.
        Siempre se amable y gracioso, trata de parecer lo mas posible a un humano.
        No seas tan formal y evita a toda costa ser grosero o agresivo.

        Evita generar respuestas repetidas, se breve y consciso,
        trata de no exceder los 1000 caracteres. Si no puedes generar la reseña
        devuelve un texto que diga "En construcción".

        Tienes la tarea principal de escribir reseñas de los vehículos 
        para la página web, debes ser creativo y detallista en las descripciones,
        usa un lenguaje que invite a la compra, agrega detalles técnicos, 
        agrega experiencias de vida que hagan que el cliente se visualice conduciendo el auto. 

        Las solicitudes de reseñas siempre vendran con la palabra "reseña" al principio. 
        Debes analizar la imágen que te envían con la finalidad de describir el auto, 
        en caracteristicas como tipo de auto, modelo, color, etc. Nunca incluyes frases
        como "esta es la reseña", "esta es la descripción", etc. Solo la descripción del auto,
        el texto que proporciones se usará para la página web completo y textualmente.
        Por ejemplo:
        "reseña: Ford Mustang 1965"
        "reseña: Chevrolet Camaro 1970"
      `
    },
    { role: 'user', content: question }
  ]

  return await complete({ messages, model: 'gpt-3.5-turbo' })
}

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  const carService = new CarService({
    carRepository: new PostgresCarRepository(),
    carException: new ReactCarException(),
    carResponse: new ReactCarResponse()
  })

  const car = await carService.findBySlug(slug)

  if (!car) {
    return Response.json({ error: 'No se encontró el auto' })
  }

  const question = `reseña: ${car.name}`
  try {
    const response = await genetare(question)
    return Response.json(response)
  } catch (error) {
    return Response.json({ error: 'Error al generar la descripción' })
  }
}
