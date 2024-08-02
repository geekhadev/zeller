import './globals.css'

export const metadata = {
  title: 'Zeller IA - Automatiza tus ventas automotrices',
  description: 'Automatiza tus ventas automotrices',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.png',
        href: '/favicon.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon.png',
        href: '/favicon.png'
      }
    ]
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es-CL" className='scroll-smooth'>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Anton&display=swap" rel="stylesheet" />
      </head>
      <body className='font-roboto'>
        {children}
      </body>
    </html>
  )
}
