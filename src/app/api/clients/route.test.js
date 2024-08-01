import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('GET /clients', () => {
  it('should return a list of clients', async () => {
    const response = await GET()
    expect(response.status).toBe(200)

    const clients = await response.json()
    expect(clients).toBeInstanceOf(Array)
  })

  it('should return a correct structure for each client', async () => {
    const response = await GET()
    const clients = await response.json()

    const haveClients = clients.length > 0
    expect(haveClients).toBe(true)

    clients.forEach(client => {
      expect(client).toHaveProperty('id')
      expect(client).toHaveProperty('name')
      expect(client).toHaveProperty('rut')
    })
  })
})
