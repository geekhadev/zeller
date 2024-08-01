import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zeller IA - Automatiza tus ventas automotrices',
  description: 'Automatiza tus ventas automotrices'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es-CL" className='scroll-smooth'>
      <link rel="icon" href="favicon.png" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
