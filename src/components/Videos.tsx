"use client"
import React, { useEffect } from 'react'
import youTube from "@/images/youTube1.jpg"
import Image from 'next/image';
import {FaEdit, FaTrash} from "react-icons/fa";
import useScroll from './custom/scroll';
import { Video } from '@prisma/client';

// const videos: Videos[] = [
//     {
//       name: "canva",
//       descrition: "about canva design",
//       image:"some url",
//       link:"link url"
//     },
//     {
//       name: "canva",
//       descrition: "about canva design",
//       image:"some url",
//       link:"link url"
//     },
//     {
//       name: "canva",
//       descrition: "about canva design",
//       image:"some url",
//       link:"link url"
//     },
//     {
//       name: "canva",
//       descrition: "about canva design",
//       image:"some url",
//       link:"link url"
//     },
//   ]
export default function Videos({videos}:{videos:Video[]}) {
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
                src={video.secureUrl}
                width={350}
                height={300}
                className='w-full h-[14rem]'
                  />
              </div>
               <div className='py-6 px-6 bg-bgGray flex flex-col gap-4'>
                <a href={video.link} target='_blank'>Watch video</a>
                <h4 className='text-center text-lg md:text-2xl font-bold capitalize'>{video.title}</h4>
                <p className='text-gray-500'>{video.description}.</p>
               </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}