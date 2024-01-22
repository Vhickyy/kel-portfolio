"use client"
import Image from 'next/image'
import React from 'react'
import Img from "@/images/pro2.jpg";
import Img2 from "@/images/pro3.jpeg"
import useScroll from './custom/scroll';
const projects = [
    {
        name: "magazine"
    },
    {
        name: "flyer"
    },
    {
        name: "book cover"
    },
    {
        name: "event"
    },
]


function Project() {
  const {ref} =  useScroll({name:"projects",threshold:0.3});
  return (
    <section className='pt-[3rem] md:pt-[5rem]' id="projects" ref={ref}>
      {/* <div className='flex items-center justify-center'> */}
        {/* <h2 className='font-extrabold text-3xl text-primary'> 01.</h2> */}
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Projects</h2>
      {/* </div> */}
      <aside className='grid gap-10 pt-[4rem]'>
        <div className=' text-gray-500 flex gap-6 overflow-x-clip min-w-full'>
          <div className='animate flex gap-6 '>
            {projects.map((pro,index)=>{
                return (
                    <div key={index} className="rounded h-[22rem]  overflow-clip bg-bgGray shadow-md min-w-[20rem]" >
                        {index % 2 == 0 ? <Image src={Img} alt="project" className='h-[20rem] w-full '/> : <Image src={Img2} alt="project" className='h-[20rem] w-full'/> }
                        <p className="pl-2 pt-[0.3rem]">{pro.name}</p>
                    </div>
                )
            })}
          </div>
          <div className='animate flex gap-6'>
            {projects.map((pro,index)=>{
                return (
                    <div key={index} className="rounded h-[22rem]  overflow-clip bg-bgGray shadow-md min-w-[20rem]">
                        {index % 2 == 0 ? <Image src={Img} alt="project" className='h-[20rem] w-full '/> : <Image src={Img2} alt="project" className='h-[20rem] w-full'/> }
                        <p className="pl-2 pt-[0.3rem]">{pro.name}</p>
                    </div>
                )
            })}
          </div>
        </div>
        <div className=' mt-6 text-gray-500 flex gap-6 overflow-x-clip min-w-full'>
          <div className='animate2 flex gap-6 '>
            {projects.map((pro,index)=>{
                return (
                    <div key={index} className="rounded h-[22rem]  overflow-clip bg-bgGray shadow-md min-w-[20rem]">
                        {index % 2 == 0 ? <Image src={Img} alt="project" className='h-[20rem] w-full '/> : <Image src={Img2} alt="project" className='h-[20rem] w-full'/> }
                        <p className="pl-2 pt-[0.3rem]">{pro.name}</p>
                    </div>
                )
            })}
          </div>
          <div className='animate2 flex gap-6'>
            {projects.map((pro,index)=>{
                return (
                    <div key={index} className="rounded h-[22rem]  overflow-clip bg-bgGray shadow-md min-w-[20rem]">
                        {index % 2 == 0 ? <Image src={Img} alt="project" className='h-[20rem] w-full '/> : <Image src={Img2} alt="project" className='h-[20rem] w-full'/> }
                        <p className="pl-2 pt-[0.3rem]">{pro.name}</p>
                    </div>
                )
            })}
          </div>
        </div>
      </aside>
      {/* <div className='grid gap-8 md:grid-cols-2 mt-8'>
        {projects.map((pro,index)=>{
            return (
                <div key={index} className="rounded h-[22rem]  overflow-clip bg-bgGray shadow-md">
                    {index % 2 == 0 ? <Image src={Img} alt="project" className='h-[20rem] w-full '/> : <Image src={Img2} alt="project" className='h-[20rem] w-full'/> }
                    <p className="pl-2 pt-[0.3rem]">{pro.name}</p>
                </div>
            )
        })}
      </div> */}
      <div className="w-full flex justify-center items-center">
        <button className='mx-auto mt-6 text-md sm:text-lg tracking-wide border-primary border-2 py-2 px-4 rounded-lg text-primary font-medium  hover:transform hover:scale-105 hover:duration-200 '>View More Videos</button>
      </div>
    </section>
  )
}

export default Project