"use client"
import React from 'react'
import {FaFacebook,FaYoutube, FaInstagram} from 'react-icons/fa';
import { navData } from "@/data/data"
import {motion} from "framer-motion";
import Link from 'next/link';
import usePortfolioContext from '../context//PortfolioContext';
import useScroll from './custom/scroll';
export default function Header() {
  // {threshold:0.2}
  const {active,changeActive,setClicked} = usePortfolioContext();
  const {ref} =  useScroll({name:"home",threshold:0.5})
  const handleClick = (name:string,e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setClicked(name)
    changeActive(name,e)
  }
  return (
    <header className='w-[95%] pb-[5rem] md:w-[95%] lg:w-[90%] mx-auto relative z-10' id="home" ref={ref}>
        <div className='h-[17rem] w-[10rem] sm:w-[17rem] bg-blur absolute top-[15%] right-0 -z-10 blur-[7rem] rounded-full'></div>
        <nav className='w-full h-10 fixed left-0 top-4 lg:hidden'>
            <div className='w-[85%] sm:w-[30rem] mx-auto bg-navBlur backdrop-blur rounded-full py-2 px-[1.3rem] flex items-center justify-between shadow-lg'> 
            {navData.map((icon, index)=>{
              return (
                <Link href={icon.link} onClick={(e)=>{handleClick(icon.name,e)}} key={index}>
                  <div className={`shadow-inner inset p-2 rounded-full grid place-items-center text-textColor ${icon.name === active ? "border border-primary" : null}` }> 
                      <icon.icon className='h-6 w-6'/>
                  </div>
                </Link>
              )
            })} 
            </div>
        </nav>
        <motion.div className="pt-[10rem]  md:pt-[4rem]"
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        >
            <p className="text-primary text-lg">Hi, my name is</p>
            <h1 className="text-textColor text-3xl font-extrabold mt-6 tracking-wide md:text-5xl leading-normal md:leading-normal ">Kelechi Augustine Okorie
            <br/>
            - <span className='text-primary'>Graphic Designer.</span></h1>
            <p className='text-textgray leading-loose mt-6 lg:w-[40rem] tracking-wider'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut quisquam. Esse doloribus. Esse doloribus.</p>
        </motion.div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1,y:-20}}
        transition={{duration:1,y:0}}
        >
          <div className=' mt-10 flex gap-4 text-primary items-center lg:hidden'>
            <FaFacebook className="h-[1.5rem] w-[1.5rem]"/>
            <FaInstagram className="h-[1.5rem] w-[1.5rem]"/>
            <FaYoutube className="h-[2rem] w-[1.5rem]"/>
          </div>
          <div className='flex gap-4 mt-6 lg:mt-[3rem]'>
            <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg text-primary font-medium'>Download CV</button>
            <button className='text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg bg-primary font-medium text-accent'>Portfolio</button>
          </div>
        </motion.div>
    </header>
  )
}
