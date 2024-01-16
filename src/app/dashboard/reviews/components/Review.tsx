import React from 'react'
import { getReviews } from '@/utils/actions';


const Review = async () => {
    const data:any = await getReviews()
    console.log(data);
    
  return (
    <section>
        {data.length ? 
            data.map((data:any)=>{
                return(
                    <div className='bg-slate-800 p-4 text-center text-textgray text-sm' key={data.id}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda quasi ipsam. Ex aliquid odit e mollitia. Quod, modi ratione?
                        <button>delete</button>
                        <button>show</button>
                    </div>)}) : <p>No review</p>
        }
    </section>
  )
}

export default Review