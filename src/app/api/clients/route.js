import { NextResponse } from 'next/server'

export async function GET () {
  return NextResponse.json([
    { id: 1, rut: '11111111-1', name: 'Generic Client' },
    { id: 2, rut: '11111111-1', name: 'Exportation Client' }
  ])
}
