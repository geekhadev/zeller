import Link from 'next/link'
import NavLink from '@/components/Landing/Header/NavLink'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#porque-elegirnos', label: '¿Porqué elegirnos?' },
  { href: '#como-funciona', label: '¿Cómo funciona?' },
  { href: '#contacto', label: 'Contacto' }
]

const Nav = () => {
  return (
    <nav className="flex space-x-4 items-center gap-4">
      {LINKS.map(({ href, label }) => (
        <NavLink key={label} href={href}>
          {label}
        </NavLink>
      ))}
      <Link
        href="#"
        className="
          rounded-full
          text-yellow-400
          border-yellow-400
          py-2
          px-6
          border
          hover:font-bold
          hover:bg-yellow-400
          hover:text-yellow-900
          scale-100
          hover:scale-105
          transition-all
          duration-200
          cursor
        "
      >
        Acceso clientes
      </Link>
    </nav>
  )
}

export default Nav
