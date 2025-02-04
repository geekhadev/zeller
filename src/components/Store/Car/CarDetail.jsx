'use client'

import { useState, useEffect } from 'react'
import CardCar from '@/components/Store/Car/CardCar'
import ChatBot from '@/components/Store/ChatBot'

const CARS = [
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

const CardDetail = ({ slug }) => {
  const [loading, setLoading] = useState(true)
  const [car, setCar] = useState(null)
  const [description, setDescription] = useState(null)

  useEffect(() => {
    const car = CARS.find(car => car.slug === slug)
    setCar(car)
    setLoading(false)
  }, [slug])

  useEffect(() => {
    if (!car) return
    fetch(`/api/ia/generate-car-description?slug=${car.slug}`)
      .then((res) => res.json())
      .then((data) => setDescription(data))
  }, [car])

  if (loading) return <p>Cargando...</p>

  return (
    <section className='py-12'>
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 justify-between items-start gap-8">
        <div>
          <CardCar
            price={car.price}
            name={car.name}
            slug={car.slug}
            size='xl'
          />
          <article className='mt-8 flex flex-col gap-3'>
            <h2 className='text-4xl text-white font-bold'>Descripción</h2>
            <p className='text-gray-400 text-xl min-h-96'>
              {description || 'Cargando descripción...'}
            </p>
          </article>
        </div>
        <ChatBot slug={slug} />
      </div>
    </section>
  )
}

export default CardDetail
