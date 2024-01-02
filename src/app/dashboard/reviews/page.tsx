"use client"
import React, { useState } from 'react'
import Review from './components/Review'
import User from './components/User'

const page = () => {
    const [show, setShow] = useState("review")
  return (
    <main className='w-[90%] max-w-[14000px] mx-auto text-white'>
        <button>Reviewers</button>
        <button>Reviews</button>
        {show == "review" ? <Review /> : <User/>}
    </main>
  )
}

export default page