import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { Lora } from 'next/font/google'
import { Poppins, Roboto } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const figtree = Figtree({ subsets: ['latin'] })
const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'AlloyTerra Group',
  description: 'AI Consulting and Automation Agency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${figtree.className} ${lora.variable} ${poppins.variable} ${roboto.variable}`}>
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/gotham"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/rockwell-nova"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
