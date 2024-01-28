"use client"
import { deleteProject } from '@/utils/actions';
import { Project } from '@prisma/client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const DeleteBtn = () => {
    const {pending} = useFormStatus();
    return (
        <button className='bg-primary px-8 py-2 rounded-md text-black' disabled={pending}>{pending ? "deleting" : "delete"}</button>
    )
}

const DisplayProject = ({projects}:{projects: Project[]}) => {
    const [deleteState, formDelete] = useFormState(deleteProject,{message:""})
  return (
    <div className='grid gap-6 md: grid-cols-2 lg:grid-cols-3'>
        {projects.length ? projects.map(project=>{
          return(
            <div key={project.id}>
            <div >
              <img src={project.secureUrl} alt={project.category} />
              <p>{project.category}</p>
            </div>
            <form action={formDelete}>
                <input type="hidden" value={project.id} name='id' />
                <input type="hidden" value={project.publicId} name='publicId' />
                <DeleteBtn/>
            </form>
            </div>
          )
        }) : <>No project yet</>}
    </div>
  )
}

export default DisplayProject