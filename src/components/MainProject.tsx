import { getProjects } from '@/utils/actions';
import { Project as projectType } from '@prisma/client';
import React from 'react'
import Project from './Projects';

export const revalidate = 0
const MainProject = async () => {
    // const {projects}: {projects:projectType[] |  string} = await getProjects();
    const projects: projectType[] = await getProjects();
  return (
    <Project projects={projects} />
  )
}

export default MainProject