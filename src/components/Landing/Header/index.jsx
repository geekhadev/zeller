import Nav from '@/components/Landing/Header/Nav'

const Header = () => {
  return (
    <header className="bg-blue-zeller sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div>
          <img src="/zeller-logo-blanco.svg" alt="Zeller Logo" className="h-24" />
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default Header
