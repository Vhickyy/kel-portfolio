"use client"
import React, { useEffect } from 'react';
import {FaEdit, FaTrash} from "react-icons/fa"
import { useInView } from 'react-intersection-observer';
import usePortfolioContext from '@/context/PortfolioContext';
interface skills {
  mode?: boolean
}
type skill = {
  skill:string,
  grade:number
}
const skillset: skill[] = [
  {
    skill: "Templates",
    grade: 100
  },
  {
    skill: "Social Media Covers",
    grade: 100
  },
  {
    skill: "Publication Designs",
    grade: 100
  },
  {
    skill: "E-book Covers",
    grade: 100
  },
  {
    skill: "Brand Identity Designs",
    grade: 80
  },
  {
    skill: "Flyers & Posters",
    grade: 100
  },
  {
    skill: "Social Media Posts",
    grade: 100
  },
  {
    skill: "Business Cards",
    grade: 100
  },
  {
    skill: "Video Editing",
    grade: 80
  },
  {
    skill: "Youtube Thumbnails",
    grade: 100
  },
  {
    skill: "Labels",
    grade: 100
  },
]
function Skills({mode}:skills) {
  const {changeActive} = usePortfolioContext();
  const {ref,inView} = useInView({threshold:0.4});
  useEffect(()=>{
    if(inView){
      changeActive("skills")
    }
  },[inView])
  return (
    <section className={` ${mode ? 'pt-[2rem]' : 'pt-[3rem]'}`} id="skill" ref={ref}>
      <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Area of Expertise</h2>
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-4  justify-between items-center ${mode ? "mt-8" : "mt-12"} `}>
        {skillset.map((skill,index)=>{
          return (
            <div className='group h-[7rem] bg-bgColor text-inverse  rounded-lg text-center grow shadow-lg border-2 border-primary py-4 px-2 relative grid items-center' key={index}>
              <h4>{skill.skill}</h4>
              {/* <p>{skill.grade}%</p> */}
              {mode && <div className="flex justify-end gap-3 pr-2 items-center text-primary">
                <FaEdit/>
                <FaTrash/>
              </div>}
              <div className="absolute bottom-0 left-0 right-0 bg-primary h-0 group-hover:h-[10%] transition-all duration-200">
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills