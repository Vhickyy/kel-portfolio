"use client"
import {  deleteVideo } from '@/utils/actions';
import { Video } from '@prisma/client'
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom'
import Spinner from '../../profile/component/Spinner';
import { FaTrash } from 'react-icons/fa';

const DeleteBtn = () => {
    const {pending} = useFormStatus();
    return (
      <button className='bg-primary px-6 py-2 rounded-md text-black' disabled={pending}>{pending ? <Spinner/> : <FaTrash/>}</button>
    )
}

const DisplayVideo = ({Videos}:{Videos: Video[]}) => {
    const [deleteState, formDelete] = useFormState(deleteVideo,{message:""})
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {Videos.length ? Videos.map(video=>{
          return(
            <div key={video.id}>
            <div className='rounded-lg overflow-clip shadow-md'>
              <Image src={video.secureUrl} alt={video.title} width={350} height={350} className='w-full h-[13rem]'/>
              <div className='grid gap-2 py-4 px-3'>
                <h2 className='text-center text-lg font-bold'>{video.title}</h2>
                <p>{video.description}</p>
                <div className='flex justify-between'>
                  <a href={video.link} target='_blank'>Watch</a>
                  <form action={formDelete}>
                      <input type="hidden" value={video.id} name='id' />
                      <input type="hidden" value={video.publicId} name='publicId' />
                      <DeleteBtn/>
                  </form>
                </div>
              </div>
            </div>
            </div>
          )
        }) : <>No project yet</>}
    </div>
  )
}

export default DisplayVideo