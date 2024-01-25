import React from 'react'
import UploadProject from './component/UploadProject'
import { getProjects } from '@/utils/actions'
import { Project } from '@prisma/client';
import DisplayProject from './component/DisplayProject';

const page = async () => {
  const projects: Project[] = await getProjects();
  return (
    <section className='text-textColor'>
        <h1 >Welcome Kelechi</h1>
        <UploadProject/>
        <DisplayProject projects={projects} />
    </section>
  )
}

export default page