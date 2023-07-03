import Navbar from '@/components/Navbar'
import './globals.css'
import { Manrope } from 'next/font/google'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

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
      <Providers>
        <body className={inter.className}>
          <section className='mx-[140px] py-5'>
            <Navbar />
            {children}
            <Footer />
          </section>
        </body>
      </Providers>
    </html>
  )
}
