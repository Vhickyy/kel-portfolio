
import React, { useState } from 'react'
import Review from './components/Review'
import User from './components/User'
import { getReviews } from '@/utils/actions'
import DeleteBtn from './components/DeleteBtn'

const page = async () => {
  const data = await getReviews()
  // const data: any[] = [1,2,3,4]
  return (
    <main className='w-[90%] max-w-[1440px] mx-auto text-white'>
        {/* fetch users and show if user have dropped any review */}
        <section className='w-[80%] max-w-[60rem]   mx-auto grid md:grid-cols-2 gap-8'>
        {data.length ? 
            data.map(data=>{
                return(
                    <div className='bg-slate-800 p-4 text-center text-textgray text-sm grid gap-4' key={data.id}>
                        <h2>{data.reviewer}</h2>
                        <p>{data.review}</p>
                        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ut mollitia praesentium quam, temporibus cupiditate neque, libero dolores in fugiat vero.</p> */}
                        <div className='flex gap-4 justify-center'>
                          <DeleteBtn id={data.id}/>
                          <button>show</button>
                        </div>
                    </div>)}) : <p>No review</p>
        }
        </section>
    </main>
  )
}

export default page