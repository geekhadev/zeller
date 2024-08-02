export class CarService {
  constructor ({
    carRepository,
    carException,
    carResponse
  }) {
    this.carRepository = carRepository
    this.carException = carException
    this.carResponse = carResponse
  }

  async getAll () {
    const cars = await this.carRepository.getAll()
    return this.carResponse.json(cars)
  }

  async findBySlug (slug) {
    const car = await this.carRepository.findBySlug(slug)
    if (!car) {
      throw this.carException.notFound()
    }
    return this.carResponse.json(car)
  }
}
