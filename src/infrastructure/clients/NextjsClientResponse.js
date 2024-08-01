import { NextResponse } from 'next/server'

export class NextjsClientResponse {
  json (data) {
    return NextResponse.json(data, { status: 200 })
  }
}
