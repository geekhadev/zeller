import { NextResponse } from 'next/server'

const clients = [
  {
    id: 1,
    name: 'Juan Perez',
    rut: '11.111.111-1',
    messages: [
      {
        id: 1,
        text: 'Hola, necesito información sobre un auto pequeño pero con tres filas de asientos',
        sentAt: '2024-07-01T00:00:00.000Z',
        role: 'client'
      },
      {
        id: 2,
        text: 'Perfecto, te puedo ayudar con eso, ¿cuál es tu presupuesto?',
        sentAt: '2024-07-24T00:01:00.000Z',
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
    messages: [
      {
        id: 1,
        text: 'Hola me interesa una camioneta 4x4',
        sentAt: '2024-07-30T00:00:00.000Z',
        role: 'client'
      }
    ],
    debts: []
  }
]

export async function GET () {
  const clientsFiltered = clients.filter(client => {
    if (!client.messages || client.messages.length === 0) {
      return false
    }

    const lastMessage = client.messages[client.messages.length - 1]

    const lastMessageDate = new Date(lastMessage.sentAt)
    const currentDate = new Date()

    const differenceInDays = Math.floor((currentDate - lastMessageDate) / (1000 * 60 * 60 * 24))

    delete client.messages
    delete client.debts

    return differenceInDays > 7
  })

  return NextResponse.json(clientsFiltered)
}
