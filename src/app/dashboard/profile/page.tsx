import React from 'react'
import AddReview from './component/AddReview'
import EditProfile from './component/EditProfile'
import Link from 'next/link'

const page = () => {
    
  return (
    <main className='w-[90%] max-w-[14000px] mx-auto text-white grid gap-12'>
        <h1 className='text-center'>Welcome user, Leave a review for Kelechi</h1>
        <section className='w-full flex max-w-[40rem]  justify-between items-center mx-auto border border-textColor px-4 py-8 rounded-lg '>
          <div className='grid gap-4'>
            <input type="file" className='hidden'/>
            <div className='h-[7rem] w-[7rem] bg-primary'></div>
            <button className='px-4 py-2 bg-primary rounded-md text-bgColor'>Edit Photo</button>
          </div>
          <div className='grid gap-4'>
            <div>
              <p>Name: sososos</p>
            </div>
            <div>
              <p>Email: sososos</p>
            </div>
          <Link href={"/dashboard/profile?mode=edit-profile"}><button className='px-4 py-2 border border-primary rounded-md text-primary'>Edit profile</button></Link>
          </div>
        </section>
        <section className='grid place-items-center gap-8'>
          <h2>Your Review</h2>
          <p>You haven't given a review</p>
          <Link href={"/dashboard/profile?mode=review"}><button className='px-8 py-2 border border-primary rounded-md text-primary'>Add Review</button></Link>
        </section>
        <EditProfile/>
        <AddReview />
    </main>
  )
}

export default page