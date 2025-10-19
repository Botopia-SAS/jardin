import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jardín Tragos y Pasteles | Restaurante en Bogotá',
  description: 'Donde la naturaleza floral se encuentra con cocteles artesanales y sabores únicos. Desayunos especiales todos los domingos.',
  keywords: 'restaurante, bogotá, desayunos, cocteles, brunch, pasteles, café',
  authors: [{ name: 'Jardín Tragos y Pasteles' }],
  openGraph: {
    title: 'Jardín Tragos y Pasteles',
    description: 'Donde la naturaleza floral se encuentra con cocteles artesanales y sabores únicos',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
