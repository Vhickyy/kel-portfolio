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
        {mode == "edit" && <div className='fixed inset-0 bg-red-500  grid place-items-center text-textColor'>
            <form className='bg-bgColor w-[80%] '>
                <h1>Edit Profile</h1>
                <FaTimes onClick={()=>setMode("")}/>
                
                <label htmlFor="name" className='block'>Name</label>
                <input type="text" id="name" value={"sososo"}  className='text-bgColor p-2'/>
                <label htmlFor="status" className='block'>Status</label>
                <select name="status" id="status" className='text-bgColor'>
                    {/* <option value=""></option> */}
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                    <option value="colleague">Colleague</option>
                </select>
                <label htmlFor="work" className='block'>Work place:</label>
                <input type="text" placeholder='work place' id='work' className='text-bgColor p-2'/>
                <button className='block'>Save</button>
            </form>
        </div>}
        {mode == "review" && <div className='fixed inset-0 bg-red-500  grid place-items-center'>
            <form className='bg-bgColor w-[80%] sm:w-[30rem] p-8 rounded-md'>
                <div className='flex justify-between'>
                    <h1>What do you have to say about Kelechi?</h1>
                    <FaTimes onClick={()=>setMode("")}/>
                </div>
                <textarea name="" id="" placeholder='Review goes here' className=' w-full resize-none h-[15rem] rounded-md p-2 my-6 text-bgColor'>

                </textarea>
                <button className='block bg-primary rounded-md py-2 px-8 text-bgColor'>Save</button>
            </form>
        </div>}
    </main>
  )
}

export default page