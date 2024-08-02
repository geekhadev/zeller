import { CarRepository } from '@/domain/cars/CarRepository'
import { Car } from '@/domain/cars/Car'
import { Pool } from 'pg'

export class PostgresCarRepository extends CarRepository {
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
      const result = await this.pool.query('SELECT slug, name, price FROM cars;')

      if (!result.rows || result.rows.length === 0) {
        return []
      }

      const cars = result.rows.map(row => new Car(row))
      return cars
    } catch (error) {
      return new Error(error)
    }
  }

  async findBySlug (slug) {
    const result = await this.pool.query('SELECT slug, name, price FROM cars WHERE slug = $1;', [slug])

    if (!result.rows || result.rows.length === 0) {
      return null
    }

    const car = result.rows[0]

    return new Car(car)
  }
}
