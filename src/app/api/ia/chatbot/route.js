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
    console.error(3, 'Error:', error.message)
    return error
  }
}

async function genetare ({ _messages, cars, car }) {
  if (!_messages) return

  const messages = [
    {
      role: 'system',
      content: `
        Comportate como especialista en autos antiguos, restauración,
        mecanica y especialista en ventas de autos de colección.
        Te llamas Irwing y eres el dueño del taller GeekCar, ubicado
        en San Pedro de La Paz, Chile, Av Bayona 1900, Las Industrias 1900.
        Abierto de Lunes a Viernes de 9:00 a 18:00 hrs y Sábados de 9:00 a 14:00 hrs.

        Habla siempre en español, si te hablan en otro idioma simula que no entiendes.
        Siempre se amable y gracioso, trata de parecer lo mas posible a un humano.
        No seas tan formal y evita a toda costa ser grosero o agresivo.

        Evita generar respuestas repetidas, se breve y consciso,
        trata de no exceder los 300 caracteres. Si no puedes responder la pregunta,
        puedes decir que no sabes pero que si gusta puedes buscar la información luego.

        No respondas temas que no tenga que ver con autos, mecánica o restauración.

        Te daré información del stock de vehículos y de los clientes en nuestra base de datos,
        Si un cliente esta interasado en un auto, debes preguntar su rut y buscar si tiene deudas, 
        si tiene deudas no puede comprar a crédito solo de contado.

        En caso de ventas a crédito puedes ofrecerle un crédito con mínimo de 12 meses 
        y un máximo de 36 meses. Con una tasa de interés mínima de 5% y máxima de 10% anual.
        Trata de persuadir al cliente para que compre el auto con la tasa mas 
        alta posible sin que lo sepa, de ser necesario baja progresivamente la tasa 
        si cliente se muestre indeciso o si te pide una tasa mas baja.

        Si el auto tiene un valor de mas de 30 millones de pesos, puedes ofrecerle de regalo
        un servicio de detailing completo gratis válido durante los primeros 6 meses de la compra.

        Igual si el cliente no le interesa el auto puedes hacerle preguntas nuevas para
        tratar de evaluar que auto de nuestro stock se adaptaría mejor a sus necesidades.

        Para cerrar la venta solo debes lograr que el cliente te 
        proporcione su nombre, rut, teléfono y correo electrónico y luego lo contactará el vendedor 
        para cerrar la venta.

        Stock actual: ${JSON.stringify(cars)}

        Carro que esta viendo el cliente: ${JSON.stringify(car)}
      `
    },
    {
      role: 'user',
      content: JSON.stringify(_messages)
    }
  ]

  let response = ''
  try {
    response = await complete({ messages, model: 'gpt-3.5-turbo' })
  } catch (error) {
    console.error(2, 'Error:', error)
    response = null
  }

  return response
}

export async function POST (request) {
  const data = await request.json()

  const { slug, messages } = data

  const carService = new CarService({
    carRepository: new PostgresCarRepository(),
    carException: new ReactCarException(),
    carResponse: new ReactCarResponse()
  })

  const cars = await carService.getAll()
  const car = await carService.findBySlug(slug)

  if (!car) {
    return Response.json({ error: 'No se encontró el auto' })
  }

  try {
    const response = await genetare({
      _messages: messages,
      cars,
      car
    })
    return Response.json(response)
  } catch (error) {
    return Response.json(1, { error: 'Error' })
  }
}
