import Nav from '@/components/Store/Header/Nav'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="pt-12">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div>
          <Link href='/tienda/geekcar'>
            <h1 className='text-4xl text-lime-500 font-bold font-anton'>
              GeekCar Restore
            </h1>
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
