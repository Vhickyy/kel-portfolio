"use client"
import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useFormStatus, useFormState } from 'react-dom'
import { addReview } from '@/utils/actions'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Btn = () => {
  const {pending} = useFormStatus();
  return(
    <button type='submit' disabled={pending} className='block rounded-md py-2 px-8 border border-primary text-primary'>{pending ? "Saving..." : "Save"}</button>
    
  )
}

const AddReview = ({id}:{id:string | undefined}) => {
    const getMode = useSearchParams().get("mode");
    const [state,formAction] = useFormState(addReview,{message:""});
    
  return (
    <>
    {getMode == "review" ? <div className='fixed inset-0 bg-red-500  grid place-items-center'>
        <form action={formAction} className='bg-bgColor w-[90%] sm:w-[30rem] p-8 rounded-md'>
          {id}
          {state.message ? `${state.message}` : null}
            <div className='flex justify-between'>
                <h1>What do you have to say about Kelechi?</h1>
                <Link href="/dashboard/profile"><FaTimes/></Link>
            </div>
            <input type="hidden" value={id} name='id' />
            <textarea name="review" id="review" placeholder='Review goes here' className=' w-full resize-none h-[15rem] rounded-md p-2 my-6 text-bgColor'>
            </textarea>
            <Btn/>
        </form>
    </div> : null}
    </>
  )
}

export default AddReview