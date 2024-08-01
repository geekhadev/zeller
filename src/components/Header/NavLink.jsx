import Link from 'next/link'

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className='
      text-white
      hover:text-yellow-400
      scale-100
      hover:scale-105
      hover:font-bold
      transition-all
      duration-200
      cursor
    '>
      {children}
    </Link>
  )
}

export default NavLink
