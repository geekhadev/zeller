import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('GET /clients/:id', () => {
  it('should return a client', async () => {
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

  it('should return a 404 error when the client does not exist', async () => {
    const response = await GET({}, { params: { id: 9999999 } })
    expect(response.status).toBe(404)
  })
})
