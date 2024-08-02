import { CarRepository } from '@/domain/cars/CarRepository'
import { Car } from '@/domain/cars/Car'

const cars = [
  {
    price: '8.990.000',
    name: '1969 BMW 2002 5-Speed',
    slug: '1969-bmw-2002-5-speed'
  },
  {
    price: '8.990.000',
    name: '1979 Porsche 928 5-Speed',
    slug: '1979-porsche-928-5-speed'
  },
  {
    price: '8.990.000',
    name: '1969 Chevrolet Camaro SS',
    slug: '1969-chevrolet-camaro-ss'
  },
  {
    price: '8.990.000',
    name: '1977 Alfa Romeo Alfetta',
    slug: '1977-alfa-romeo-alfetta'
  },
  {
    price: '8.990.000',
    name: '1929 Packard 626 Speedster Roadster',
    slug: '1929-packard-626-speedster-roadster'
  },
  {
    price: '8.990.000',
    name: '302-Powered 1968 Ford Bronco',
    slug: '302-powered-1968-ford-bronco'
  },
  {
    price: '8.990.000',
    name: '2004 Land Rover Discovery II S',
    slug: '2004-land-rover-discovery-ii-s'
  },
  {
    price: '8.990.000',
    name: '1995 Toyota Land Cruiser FZJ80',
    slug: '1995-toyota-land-cruiser-fzj80'
  },
  {
    price: '8.990.000',
    name: '1997 Ford F-250 XL SuperCab',
    slug: '1997-ford-f-250-xl-supercab'
  },
  {
    price: '8.990.000',
    name: '1996 Rover Mini 1300',
    slug: '1996-rover-mini-1300'
  },
  {
    price: '8.990.000',
    name: '1974 Fiat 124 Sport Spider',
    slug: '1974-fiat-124-sport-spider'
  }
]

export class JsonCarRepository extends CarRepository {
  async getAll () {
    const _cars = cars.map(({ id, name, rut }) => new Car({ id, name, rut }))
    return Promise.resolve(_cars)
  }

  async findBySlug (slug) {
    const car = cars.find(car => car.slug === slug)

    if (!car) {
      return Promise.resolve(null)
    }

    return Promise.resolve(new Car(car))
  }
}
