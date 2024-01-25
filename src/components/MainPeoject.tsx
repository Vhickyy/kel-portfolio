import { getProjects } from '@/utils/actions';
import { Project as projectType } from '@prisma/client';
import React from 'react'
import Project from './Projects';

const MainPeoject = async () => {
    const projects: projectType[] = await getProjects();
  return (
    <Project projects={projects} />
  )
}

export default MainPeoject