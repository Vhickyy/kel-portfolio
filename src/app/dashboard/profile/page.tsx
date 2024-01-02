import React from 'react'
import AddReview from './component/AddReview'
import EditProfile from './component/EditProfile'
import SelectView from './component/SelectView'
import Link from 'next/link'

const page = () => {
    
  return (
    <main className='w-[90%] max-w-[14000px] mx-auto text-white'>
        <h1>Welcome user, Leave a review for Kelechi</h1>
        <div>
            <div className='h-10 w-10 bg-primary'></div>
            <p>Edit photo</p>
            <p>Name: sososso</p>
            <div>
        {/* <button onClick={()=>setMode("edit")}>Edit profile</button>
        <button onClick={()=>setMode("review")}>Add review</button> */}
        <Link href={"/dashboard/profile?mode=edit-profile"}>Edit profile</Link>
        <Link href={"/dashboard/profile?mode=review"}>Add Review</Link>
    </div>
        </div>
        <div>
            <h1>Your review for kelechi</h1>
        </div>
        <EditProfile/>
        <AddReview />
    </main>
  )
}

export default page