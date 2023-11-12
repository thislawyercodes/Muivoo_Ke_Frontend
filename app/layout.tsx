import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Muivoo Ke',
  description: 'Discover hand made sustainable clothing from Kenya!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
            <Navbar/>
            {children}
      <body className="relative"></body>
      <Footer/>
    </html>
  )
}
