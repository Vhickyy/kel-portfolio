import React from 'react'
import { useFormStatus } from 'react-dom';

const Btn = () => {
    const {pending} = useFormStatus();
    return(
        <button type='submit' disabled={pending} className='block rounded-md py-2 px-8 border border-primary text-primary'>{pending ? "Updating..." : "Show"}</button>
        
    )
}
const ToggleReview = () => {
  return (
    <div>ToggleReview</div>
  )
}

export default ToggleReview