import Navbar from '@/components/Navbar'
import './globals.css'
import { Manrope } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'The Thoughtful Pen',
  description: 'Generated by Rakibul',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
