"use client"
import usePortfolioContext from '@/context/PortfolioContext'
import React from 'react'

const SelectView = () => {
    const {setMode} = usePortfolioContext()
  return (
    <div>
        <button onClick={()=>setMode("edit")}>Edit profile</button>
        <button onClick={()=>setMode("review")}>Add review</button>
    </div>
  )
}

export default SelectView