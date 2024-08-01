import { NextResponse } from 'next/server'

const CLIENTS = [
  { id: 1, rut: '11111111-1', name: 'Generic Client' },
  { id: 2, rut: '11111111-1', name: 'Exportation Client' }
]

export async function GET (_, { params }) {
  const { id } = params

  const client = CLIENTS.find(client => client.id === Number(id))

  if (!client) {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 })
  }

  return NextResponse.json(client)
}
