
import { PortfolioContextProvider } from '@/context/PortfolioContext'
import AuthProvider from '@/context/AuthProvider'
import ThemeButton from '@/components/ThemeButton'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        <header className='flex justify-between w-[90%] lg:w-[95%] max-w-[1440px] mx-auto py-3 text-textColor'>
            <p>Home</p>
            <div className='flex gap-4 items-center'>
                <ThemeButton/>
                <button className='bg-primary p-2 rounded-md text-black'>Log out</button>
            </div>
        </header>
        {children}
    </main>
  )
}
