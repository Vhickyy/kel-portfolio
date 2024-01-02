"use client"
import usePortfolioContext from '@/context/PortfolioContext'
import Link from 'next/link'
import React from 'react'

const SelectView = () => {
    const {setMode} = usePortfolioContext()
  return (
    <div>
        <button onClick={()=>setMode("edit")}>Edit profile</button>
        <button onClick={()=>setMode("review")}>Add review</button>
        <Link href={"/dashboard/profile?mode=edit-profile"}>Edit profile</Link>
        <Link href={"/dashboard/profile?mode=review"}>Add Review</Link>
    </div>
  )
}

export default SelectView