import { NextResponse } from 'next/server'

export class NextjsClientException {
  IdIsRequired () {
    return NextResponse.json({ error: 'Client ID is required' }, { status: 400 })
  }

  IdMustBeNumber () {
    return NextResponse.json({ error: 'Client ID must be a number' }, { status: 400 })
  }

  ClientNotFound () {
    return NextResponse.json({ error: 'Client not found' }, { status: 404 })
  }
}
