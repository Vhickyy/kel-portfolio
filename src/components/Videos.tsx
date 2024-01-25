"use client"
import React, { useEffect } from 'react'
import youTube from "@/images/youTube1.jpg"
import Image from 'next/image';
import {FaEdit, FaTrash} from "react-icons/fa";
import usePortfolioContext from '@/context/PortfolioContext';
import { useInView } from 'react-intersection-observer';
import useScroll from './custom/scroll';
interface Video {
  mode?: boolean
}
type Videos = {
    name: string;
    descrition: string;
    image: string;
    link: string;
}
const videos: Videos[] = [
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
    {
      name: "canva",
      descrition: "about canva design",
      image:"some url",
      link:"link url"
    },
  ]
export default function Videos() {
  const {ref} = useScroll({name:"videos",threshold:0.3});
  
  return (
    <section className='w-full py-[2rem] ' id="video" ref={ref}>
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Videos</h2>
      <div className=' grid gap-x-12 gap-y-8 mt-8 md:grid-cols-2 '>
        {videos.map((video,index)=>{
          return (
            <div key={index} className='rounded-lg overflow-hidden  text-textColor relative shadow-md'>
              <div className="relative">
                <Image
                alt="youube video"
                src={youTube}
                width={350}
                height={300}
                className='w-full'
                  />
              </div>
               <div className='py-6 px-6 bg-bgGray flex flex-col gap-4'>
                <a href="https://youtu.be/9ZZ0Hn6HRts?si=K35iJw2ur3cxEwZW" target='_blank'>Watch video</a>
                <h4 className='text-center text-lg md:text-2xl font-bold capitalize'>{video.name}</h4>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis error... nosum mollitia.</p>
                {/* <button className='bg-primary p-2 text-textColor'><a href="#">Icon</a></button> */}
               </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}