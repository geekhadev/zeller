import { ClientRepository } from '@/domain/clients/ClientRepository'
import { Client } from '@/domain/clients/Client'
import { DAYS_VALIDATION } from '@/constants'

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

export class JsonClientRepository extends ClientRepository {
  async getAll () {
    const _clients = clients.map(client => new Client({
      id: client.id,
      name: client.name,
      rut: client.rut
    }))
    return Promise.resolve(_clients)
  }

  async findById (id) {
    const client = clients.find(client => client.id === id)

    if (!client) {
      return Promise.resolve(null)
    }

    return Promise.resolve(new Client(client))
  }

  async getFollow () {
    const SECONDS = 60
    const MINUTES = 60
    const HOURS = 24

    const clientsFiltered = clients.filter(client => {
      if (!client.messages || client.messages.length === 0) {
        return false
      }

      const lastMessage = client.messages[client.messages.length - 1]

      const lastMessageDate = new Date(lastMessage.sentAt)
      const currentDate = new Date()

      const differenceInDays = Math.floor((currentDate - lastMessageDate) / (1000 * SECONDS * MINUTES * HOURS))

      delete client.messages
      delete client.debts

      return differenceInDays > DAYS_VALIDATION
    })

    const _clients = clientsFiltered.map(client => new Client({
      id: client.id,
      name: client.name,
      rut: client.rut
    }))
    return Promise.resolve(_clients)
  }
}
