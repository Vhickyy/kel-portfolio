"use client"
import { deleteReview } from '@/utils/actions';
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';

const Btn = () => {
    const {pending} = useFormStatus();
    return(
        <button type='submit' disabled={pending} className='block rounded-md py-2 px-8 border border-primary text-primary'>{pending ? "Deleting..." : "Delete"}</button>
        
    )
}
const DeleteBtn = ({id}:{id:string}) => {
    const [state,formAction] = useFormState(deleteReview,{message:""});
  return (
    <form action={formAction}>
        <input type="hidden" value={id} name='id' />
        <Btn/>
    </form>
  )
}

export default DeleteBtn