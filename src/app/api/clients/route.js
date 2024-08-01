import { NextResponse } from 'next/server'

const clients = [
  {
    id: 1,
    name: 'Juan Perez',
    rut: '11.111.111-1'
  },
  {
    id: 2,
    name: 'Pedro Soto',
    rut: '21.111.111-1'
  }
]

export async function GET () {
  return NextResponse.json(clients)
}
