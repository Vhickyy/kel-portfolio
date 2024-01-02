"use client"
import usePortfolioContext from '@/context/PortfolioContext'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'
import { addReview } from '@/utils/actions'

const Btn = () => {
  const {pending} = useFormStatus();
  return(
    <button type='submit' disabled={pending} className='block bg-primary rounded-md py-2 px-8 text-bgColor'>{pending ? "Saving..." : "Save"}</button>
  )
}

const AddReview = () => {
    const {mode,setMode} = usePortfolioContext();
    
  return (
    <>
    {mode == "review" ? <div className='fixed inset-0 bg-red-500  grid place-items-center'>
        <form action={addReview} className='bg-bgColor w-[80%] sm:w-[30rem] p-8 rounded-md'>
            <div className='flex justify-between'>
                <h1>What do you have to say about Kelechi?</h1>
                <FaTimes onClick={()=>setMode("")}/>
            </div>
            <textarea name="review" id="review" placeholder='Review goes here' className=' w-full resize-none h-[15rem] rounded-md p-2 my-6 text-bgColor'>
            </textarea>
            <Btn/>
        </form>
    </div> : null}
    </>
  )
}

export default AddReview