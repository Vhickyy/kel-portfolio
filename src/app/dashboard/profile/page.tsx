import React from 'react'
import UploadProject from './component/UploadProject'
import { getProjects } from '@/utils/actions'
import { Project } from '@prisma/client';
import DisplayProject from './component/DisplayProject';

const page = async () => {
  const projects: Project[] = await getProjects();
  return (
    <section className='text-textColor w-[90%] lg:w-[95%] max-w-[1440px] mx-auto py-4'>
        <h1 className='text-center text-lg font-semibold'>Welcome Kelechi</h1>
        <UploadProject/>
        <DisplayProject projects={projects} />
    </section>
  )
}

export default page