import React from 'react'
import UploadProject from './component/UploadProject'
import { getProjects } from '@/utils/actions'
import { Project } from '@prisma/client';

const page = async () => {
  const projects: Project[] = await getProjects();
  return (
    <section className='text-textColor'>
        <h1 >Welcome Kelechi</h1>
        <UploadProject/>
        {projects.length ? projects.map(project=>{
          return(
            <div key={project.id}>
              <img src={project.secureUrl} alt={project.category} />
              <p>{project.category}</p>
            </div>
          )
        }) : <>No project yet</>}
    </section>
  )
}

export default page