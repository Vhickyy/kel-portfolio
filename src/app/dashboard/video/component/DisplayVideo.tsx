"use client"
import {  deleteVideo } from '@/utils/actions';
import { Video } from '@prisma/client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const DeleteBtn = () => {
    const {pending} = useFormStatus();
    return (
        <button className='bg-primary px-8 py-2 rounded-md text-black' disabled={pending}>{pending ? "deleting" : "delete"}</button>
    )
}

const DisplayVideo = ({Videos}:{Videos: Video[]}) => {
    const [deleteState, formDelete] = useFormState(deleteVideo,{message:""})
  return (
    <div className='grid gap-6 md: grid-cols-2 lg:grid-cols-3'>
        {Videos.length ? Videos.map(video=>{
          return(
            <div key={video.id}>
            <div >
              <img src={video.secureUrl} alt={video.title} />
              <p>{video.title}</p>
              <p>{video.description}</p>
              <p>{video.description}</p>
              <a href={video.link} target='_blsnk'>View</a>
            </div>
            <form action={formDelete}>
                <input type="hidden" value={video.id} name='id' />
                <input type="hidden" value={video.publicId} name='publicId' />
                <DeleteBtn/>
            </form>
            </div>
          )
        }) : <>No project yet</>}
    </div>
  )
}

export default DisplayVideo