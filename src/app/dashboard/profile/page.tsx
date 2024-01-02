import React from 'react'
import AddReview from './component/AddReview'
import EditProfile from './component/EditProfile'
import SelectView from './component/SelectView'

const page = () => {
    
  return (
    <main className='w-[90%] max-w-[14000px] mx-auto text-white'>
        <h1>Welcome user, Leave a review for Kelechi</h1>
        <div>
            <div className='h-10 w-10 bg-primary'></div>
            <p>Edit photo</p>
            <p>Name: sososso</p>
            <SelectView/>
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