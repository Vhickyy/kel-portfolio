"use client"
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const page = () => {
    const [mode,setMode] = useState("")
  return (
    <main className='w-[90%] max-w-[14000px] mx-auto text-white'>
        <h1>Welcome user, Leave a review for Kelechi</h1>
        <div>
            <div className='h-10 w-10 bg-primary'></div>
            <p>Edit photo</p>
            <p>Name: sososso</p>
            
            <button onClick={()=>setMode("edit")}>Edit profile</button>
            <button onClick={()=>setMode("review")}>Add review</button>
        </div>
        <div>
            <h1>Your review for kelechi</h1>
        </div>
        {/* Edit modal */}
        {mode == "edit" && <div className='fixed inset-0 bg-red-500  grid place-items-center'>
            <form className='bg-bgColor w-[80%] '>
                <h1>Edit Profile</h1>
                <FaTimes onClick={()=>setMode("")}/>
                <input type="text" value={"sososo"} className='text-white' />
                <select name="" id="" className='text-black'>
                    {/* <option value=""></option> */}
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                    <option value="colleague">Colleague</option>
                </select>
                <p >Enter work place</p>
                <input type="text" placeholder='work place' className='text-white'/>
                <button>Save</button>
            </form>
        </div>}
        {mode == "review" && <div className='fixed inset-0 bg-red-500  grid place-items-center'>
            <form className='bg-bgColor w-[80%] '>
                <h1>What do you have to say about Kelechi?</h1>
                <FaTimes onClick={()=>setMode("")}/>
                <textarea name="" id="" placeholder='Review goes here'>

                </textarea>
                <button>Save</button>
            </form>
        </div>}
    </main>
  )
}

export default page