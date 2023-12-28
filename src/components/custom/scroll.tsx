"use client"
import usePortfolioContext from '@/context/PortfolioContext';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

const useScroll = ({name,threshold}:{name:string,threshold:number}) => {
  const {changeActive, clicked, setClicked} = usePortfolioContext();
  const {ref,inView} = useInView({threshold});

  useEffect(()=>{
    if(inView && !clicked){
      changeActive(name)
      console.log("hu");
    }
    
    if(inView && name == clicked){
      console.log(clicked,name, name == clicked);
      setClicked("")
      console.log("hi");
    }
  },[inView, clicked])

  return {ref}
}



export default useScroll