export class ClientService {
  constructor ({
    clientRepository,
    clientException,
    clientResponse
  }) {
    this.clientRepository = clientRepository
    this.clientException = clientException
    this.clientResponse = clientResponse
  }

  async getAll () {
    const clients = await this.clientRepository.getAll()
    return this.clientResponse.json(clients)
  }

  async findById (id) {
    if (!id) {
      return this.clientException.IdIsRequired()
    }

    if (isNaN(id)) {
      return this.clientException.IdMustBeNumber()
    }

    const client = await this.clientRepository.findById(Number(id))

    if (!client) {
      return this.clientException.ClientNotFound()
    }

    return this.clientResponse.json(client)
  }

  async getFollow () {
    const clients = await this.clientRepository.getFollow()
    return this.clientResponse.json(clients)
  }
}
