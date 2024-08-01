import { NextResponse } from 'next/server'

const clients = [
  {
    id: 1,
    name: 'Juan Perez',
    rut: '11.111.111-1',
    messages: [
      {
        id: 1,
        text: 'Hola, quiero comprar un dpto',
        sentAt: '2023-12-24T00:00:00.000Z',
        role: 'client'
      },
      {
        id: 2,
        text: 'Perfecto, te puedo ayudar con eso',
        sentAt: '2023-12-24T00:01:00.000Z',
        role: 'agent'
      }
    ],
    debts: [
      {
        id: 1,
        amount: 1000000,
        institution: 'Banco Estado',
        dueDate: '2023-12-24T00:00:00.000Z'
      }
    ]
  },
  {
    id: 2,
    name: 'Pedro Soto',
    rut: '21.111.111-1',
    messages: [],
    debts: []
  }
]

export async function GET (_, { params }) {
  const { id } = params

  const client = clients.find(client => client.id === Number(id))

  if (!client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 })
  }

  return NextResponse.json(client)
}
