"use client"
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useFormStatus, useFormState } from 'react-dom'
import { addReview } from '@/utils/actions'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Btn = () => {
  const {pending} = useFormStatus();
  const [state,formAction] = useFormState(addReview,{message:""})
  return(
    <button type='submit' disabled={pending} className='block bg-primary rounded-md py-2 px-8 text-bgColor'>{pending ? "Saving..." : "Save"}</button>
  )
}

const AddReview = () => {
    const getMode = useSearchParams().get("mode");
  return (
    <>
    {getMode == "review" ? <div className='fixed inset-0 bg-red-500  grid place-items-center'>
        <form action={addReview} className='bg-bgColor w-[80%] sm:w-[30rem] p-8 rounded-md'>
            <div className='flex justify-between'>
                <h1>What do you have to say about Kelechi?</h1>
                <Link href="/dashboard/profile"><FaTimes/></Link>
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