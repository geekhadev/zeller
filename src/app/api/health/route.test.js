import { describe, it, expect } from 'vitest'
import { GET } from './route'

describe('Health Check Endpoint', () => {
  it('should return status ok', async () => {
    const response = await GET()
    const json = await response.json()
    expect(response.status).toBe(200)
    expect(json).toEqual({ status: 'ok' })
  })
})
