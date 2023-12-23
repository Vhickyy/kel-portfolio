import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { PortfolioContextProvider } from '@/context/PortfolioContext'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kelechi Austin Okorie',
  description: 'Kelechi Austin Okorie, a canva and graphic designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} overflow-x-hidden bg-bgColor`}>
        <PortfolioContextProvider>
          {children}
        </PortfolioContextProvider>
      </body>
    </html>
  )
}
