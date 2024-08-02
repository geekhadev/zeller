import Link from 'next/link'
import NavLink from '@/components/Store/Header/NavLink'

const LINKS = [
  { href: '#usados', label: 'Autos usados' },
  { href: '#nuevos', label: 'Autos nuevos' },
  { href: '#sucursales', label: 'Sucursales' }
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
          text-gray-400
          border-gray-400
          py-2
          px-4
          border-2
          font-bold
          hover:border-lime-500
          hover:text-lime-500
          transition-all
          duration-200
          cursor
          text-xl
          hover:rotate-[1deg]
        "
      >
        Agendar servicio
      </Link>
    </nav>
  )
}

export default Nav
