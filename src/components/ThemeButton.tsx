"use client"
import React from 'react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import usePortfolioContext from '@/context/PortfolioContext';

const ThemeButton = () => {
  const {theme, toggleTheme} = usePortfolioContext();
  return (
    <>
        {!theme ? <BsFillMoonFill className="w-6 h-6" onClick={toggleTheme}/> : <BsFillSunFill className="w-6 h-6" onClick={toggleTheme}/>}
    </>
  )
}

export default ThemeButton