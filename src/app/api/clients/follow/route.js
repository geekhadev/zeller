import { ClientService } from '@/domain/clients/ClientService'
import { JsonClientRepository } from '@/infrastructure/clients/JsonClientRepository'
import { PostgresClientRepository } from '@/infrastructure/clients/PostgresClientRepository'
import { NextjsClientException } from '@/infrastructure/clients/NextjsClientException'
import { NextjsClientResponse } from '@/infrastructure/clients/NextjsClientResponse'

export async function GET () {
  const { TESTING } = process.env
  const clientService = new ClientService({
    clientRepository: TESTING === 'true' ? new JsonClientRepository() : new PostgresClientRepository(),
    clientException: new NextjsClientException(),
    clientResponse: new NextjsClientResponse()
  })

  return await clientService.getFollow()
}
