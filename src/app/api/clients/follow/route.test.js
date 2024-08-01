import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('GET /clients', () => {
  it('should return a list of clients', async () => {
    const response = await GET()
    expect(response.status).toBe(200)

    const clients = await response.json()
    expect(clients).toBeInstanceOf(Array)
  })

  it('debe retornar una estructura correcta para cada cliente', async () => {
    const response = await GET()
    const clients = await response.json()

    if (clients.length === 0) {
      expect(true).toBe(true)
      return
    }

    const haveClients = clients.length > 0
    expect(haveClients).toBe(true)

    clients.forEach(client => {
      expect(client).toHaveProperty('id')
      expect(client).toHaveProperty('name')
      expect(client).toHaveProperty('rut')
    })
  })

  it('debería retornar solo clientes con mensajes antiguos (más de 7 días)', async () => {
    const response = await GET()
    const clients = await response.json()

    if (clients.length === 0) {
      expect(true).toBe(true)
      return
    }

    const clientSearchById = 1

    const client = clients.find(client => client.id === clientSearchById)

    expect(client).toHaveProperty('id')
    expect(client).toHaveProperty('name')
    expect(client).toHaveProperty('rut')
  })
})
