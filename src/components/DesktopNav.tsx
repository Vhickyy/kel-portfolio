"use client"
import usePortfolioContext from "@/context/PortfolioContext";
import { navData } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/kel-logo.png"

const DesktopNav = () => {
  const {active,changeActive} = usePortfolioContext();
  return (
    <nav className='hidden md:flex sticky top-0 w-[95%] lg:w-[90%] mx-auto justify-between items-center pt-8 z-20 text-textgray bg-bgColor'>
      {/* <div className='p-4 bg-primary rounded-full text-accent'>KO</div> */}
      <Image src={Logo} alt="kel-logo" />
      {navData.map((nav,index)=>{
        return (
          <div key={index}>
            <Link href={nav.link} className='capitalize' onClick={(e)=>changeActive(nav.name,e,true)}>{nav.name}</Link>
            {active === nav.name ? <div className='h-1 w-full bg-primary rounded'></div> : null}
          </div>
        )
      })}
      <div className='border-2 border-primary p-3 rounded-md text-primary cursor-pointer'>
        {/* <ThemeButton/> */}
      </div>
     </nav>
  )
}

export default DesktopNav