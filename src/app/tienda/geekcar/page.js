import Header from '@/components/Store/Header'
import Hero from '@/components/Store/Hero'
import Banner from '@/components/Store/Banner/Index'
import Store from '@/components/Store/Store/Index'
import Footer from '@/components/Store/Footer'

export const metadata = {
  title: 'Bruno Fritsch - Zeller tienda',
  description: 'Mas de 30 años de experiencia en el rubro automotriz',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-bruno.png',
        href: '/favicon-bruno.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-bruno.png',
        href: '/favicon-bruno.png'
      }
    ]
  }
}

export default function Home () {
  return (
    <>
      <div className="fixed h-full w-full bg-black">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[70%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <div id="inicio" className='relative z-50'>
        <Header />
        <Hero />
        <Banner />
        <Store />
        <Footer />
      </div>
    </>
  )
}
