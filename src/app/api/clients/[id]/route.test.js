import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('GET /clients/:id', () => {
  it('debe retornar un cliente', async () => {
    const response = await GET({}, { params: { id: 1 } })
    expect(response.status).toBe(200)

    const client = await response.json()
    expect(client).toHaveProperty('id')
    expect(client).toHaveProperty('name')
    expect(client).toHaveProperty('rut')
    expect(client).toHaveProperty('messages')
    expect(client).toHaveProperty('debts')
    expect(Array.isArray(client.messages)).toBe(true)
    expect(Array.isArray(client.debts)).toBe(true)
  })

  it('debe retornar un error si el cliente no existe', async () => {
    const response = await GET({}, { params: { id: 9999999 } })
    expect(response.status).toBe(404)
  })
})
