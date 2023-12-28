import About from '@/components/About'
import DesktopNav from '@/components/DesktopNav'
import Header from '@/components/Header'
import Project from '@/components/Projects'
import Skills from '@/components/Skills'
import ThemeButton from '@/components/ThemeButton'
import Videos from '@/components/Videos'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'

export default function Home() {
  return (
    <main className='w-[90%] lg:flex max-w-[14000px] mx-auto'>
      <section className='hidden lg:block lg:w-[5%]'>
          <div className='sticky top-[25%] grid gap-4 items-end justify-center text-textColor'>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <FaFacebook className="w-[2rem] h-[2rem]"/>
          <div className='w-[1px] h-[20rem] mx-auto bg-primary'></div>
          </div>
      </section>
      <section className='lg:w-[95%]'>
        <DesktopNav/>
        <Header/>
        <main className='w-[95%] md:w-[95%] lg:w-[90%] mx-auto'>
         <About/>
         <Skills/>
         <Project/>
         <Videos/>
        </main>
      </section>
      <div className='fixed bottom-8 right-10 md:hidden border-2 border-primary p-3 rounded-[50%] text-primary cursor-pointer z-[1000] bg-[#10091899]'>
        <ThemeButton/>
      </div>
    </main>
  )
}
