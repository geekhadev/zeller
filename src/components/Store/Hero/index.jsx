import CardCar from '@/components/Store/Car/CardCar'

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
  }
]

const Hero = () => {
  return (
    <section className='py-12'>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8">
        {CARS.map(({ price, name, slug }, index) => (
          <CardCar
            key={index}
            price={price}
            name={name}
            slug={slug}
            size='xl'
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
