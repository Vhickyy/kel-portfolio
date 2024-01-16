import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { PortfolioContextProvider } from '@/context/PortfolioContext'
import AuthProvider from '@/context/AuthProvider'

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
      <body className={`${montserrat.className} bg-bgColor`}>
        <AuthProvider>
          <PortfolioContextProvider>
            {children}
          </PortfolioContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
