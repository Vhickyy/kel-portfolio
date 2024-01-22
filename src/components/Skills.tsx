"use client"
import React from 'react';
import useScroll from './custom/scroll';
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
function Skills() {
  const {ref} =  useScroll({name:"skills",threshold:0.9});
  return (
    <section className='pt-[3rem] md:pt-[5rem] pb-[5rem]' id="skill" ref={ref}>
      <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Area of Expertise</h2>
      <div className='flex flex-wrap gap-x-4 gap-y-4 md:gap-y-6  justify-between items-center mt-[4rem] text-textgray'>
        {skillset.map((skill,index)=>{
          return (
            <div className='group  bg-bgColor text-inverse  rounded-lg text-center grow shadow-lg border-2 border-primary py-8 px-2 relative grid items-center' key={index}>
              <h4>{skill.skill}</h4>
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