"use client"
import { deleteProject } from '@/utils/actions';
import { Project } from '@prisma/client'
import { useFormState, useFormStatus } from 'react-dom'
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import Spinner from './Spinner';

const DeleteBtn = () => {
    const {pending} = useFormStatus();
    return (
        // <button className='bg-primary px-8 py-2 rounded-md text-black' disabled={pending}>{pending ? "deleting" : "delete"}</button>
        <button className='bg-primary px-6 py-2 rounded-md text-black' disabled={pending}>{pending ? <Spinner/> : <FaTrash/>}</button>
        // <FaTrash/>
    )
}

const DisplayProject = ({projects}:{projects: Project[]}) => {
    const [deleteState, formDelete] = useFormState(deleteProject,{message:""})
  return (
    <>
      {projects.length ? <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map(project=>{
            return(
              <div key={project.id}>
              <div className='rounded-t-lg overflow-clip'>
                <Image src={project.secureUrl} alt={project.category} width={350} height={350} className='w-full h-[20rem]'/>
                <div className='flex justify-between items-center pt-4'>
                  <p>{project.category}</p>
                  <form action={formDelete}>
                      <input type="hidden" value={project.id} name='id' />
                      <input type="hidden" value={project.publicId} name='publicId' />
                      <DeleteBtn/>
                  </form>
                </div>
              </div>
              </div>
            )
          })}
      </div> : <div className='grid place-items-center h-[20rem] w-full'>No project yet</div>}
    </>
  )
}

export default DisplayProject