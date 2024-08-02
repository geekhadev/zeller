import Link from 'next/link'

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className='
      text-gray-400
      hover:text-lime-500
      font-bold
      transition-all
      duration-200
      cursor
      hover:rotate-[1deg]
      text-xl
    '>
      {children}
    </Link>
  )
}

export default NavLink
