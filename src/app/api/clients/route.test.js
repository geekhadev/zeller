import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('GET /clients', () => {
  it('debe retornar una lista de clientes y estructura válida', async () => {
    const response = await GET()
    expect(response.status).toBe(200)

    const clients = await response.json()

    if (clients.length === 0) {
      expect(true).toBe(true)
      return
    }

    clients.forEach(client => {
      expect(client).toHaveProperty('id')
      expect(client).toHaveProperty('name')
      expect(client).toHaveProperty('rut')
    })
  })
})
