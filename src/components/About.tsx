"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import Img from "@/images/aboutImg3.png"
import Office from "@/images/kel-office.jpg"
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import usePortfolioContext from '../context//PortfolioContext';
import useScroll from './custom/scroll';

function About() {
  const {ref} = useScroll({name:"about",threshold:0.5});
  
  return (
    <section className='pt-[3rem] pb-[5rem]' id="about" ref={ref}>
        <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>About Me</h2>
      <Image src={Office} alt='kel-office'  className='w-full h-[15rem] object-cover md:object-fill  md:h-auto  mb-8 mt-12 rounded-xl'/>
      <div className='flex gap-4 flex-col sm:flex-row sm:items-center sm:justify-between'>
        <motion.div className='sm:w-[60%]'
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        >
          <p className='text-textgray leading-loose tracking-wider'>
          I am a Business Management graduate, a Business Assistant and a <span className="text-primary font-bold ">Canva Expert</span> with more than 3years experience. I am also a <span className="text-primary font-bold">Canvassador</span>. I take my client's work very seriously and always deliver on time.
          </p>
          <p className='text-textgray leading-loose mt-6   tracking-wider'>
          {/* My works are always exceptional and extraordinary; reason why my clients stick with me. */}
          I create attractive and scroll-stopping designs for business owners that help them grab the attention of their target/potential customers.
          I also tutor people on how to make better use of Canva. I have trained over a thousand people.
          </p>
        </motion.div>
        <motion.div className='relative w-full h-[20rem] bg-primary sm:w-[35%] rounded-lg overflow-x-hidden mt-4'
        // initial={{x:-100}}
        // whileInView={{x:0}}
        // transition={{duration:0.5}}
        >
          <Image
          alt="About image"
          width={350}
          height={300}
          src={Img}
          // className='absolute top-0 left-1/2'
          className=' absolute top-0 h-full object-cover left-1/2 transform -translate-x-1/2'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default About