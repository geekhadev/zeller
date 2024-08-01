import { ClientRepository } from '@/domain/clients/ClientRepository'
import { Client } from '@/domain/clients/Client'
import { Pool } from 'pg'
import { DAYS_VALIDATION } from '@/constants'

export class PostgresClientRepository extends ClientRepository {
  constructor () {
    super()

    const host = process.env.DATABASE_HOST || 'localhost'
    const port = process.env.DATABASE_PORT || 5432
    const user = process.env.DATABASE_USER
    const password = process.env.DATABASE_PASSWORD
    const database = process.env.DATABASE_DATABASE

    this.pool = new Pool({
      host,
      port,
      user,
      password,
      database
    })
  }

  async getAll () {
    try {
      const result = await this.pool.query('SELECT id, name, rut FROM clients;')

      if (!result.rows || result.rows.length === 0) {
        return []
      }

      const clients = result.rows.map(row => new Client(row))
      return clients
    } catch (error) {
      return new Error(error)
    }
  }

  async findById (id) {
    const result = await this.pool.query('SELECT id, name, rut FROM clients WHERE id = $1;', [id])

    if (!result.rows || result.rows.length === 0) {
      return null
    }

    const client = result.rows[0]

    const messagesResult = await this.pool.query('SELECT text, role, sentat FROM messages WHERE client_id = $1;', [client.id])
    if (messagesResult.rows && messagesResult.rows.length > 0) {
      client.messages = messagesResult.rows
    }

    const debtsResult = await this.pool.query('SELECT amount, institution, duedate FROM debts WHERE client_id = $1;', [client.id])
    if (debtsResult.rows && debtsResult.rows.length > 0) {
      client.debts = debtsResult.rows
    }

    return new Client(client)
  }

  async getFollow () {
    const SECONDS = 60
    const MINUTES = 60
    const HOURS = 24

    try {
      const currentDate = new Date()
      const DAYS_VALIDATION_IN_MS = DAYS_VALIDATION * SECONDS * MINUTES * HOURS * 1000
      const thresholdDate = new Date(currentDate - DAYS_VALIDATION_IN_MS).toISOString()

      const result = await this.pool.query(`
        SELECT DISTINCT client.id, client.name, client.rut
        FROM clients AS client
        JOIN messages AS message ON client.id = message.client_id
        WHERE message.sentat < $1
      `, [thresholdDate])

      if (!result.rows || result.rows.length === 0) {
        return []
      }

      const _clients = result.rows.map(row => new Client({
        id: row.id,
        name: row.name,
        rut: row.rut
      }))

      return _clients
    } catch (error) {
      return new Error(error)
    }
  }
}
