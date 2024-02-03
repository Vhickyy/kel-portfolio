import React from 'react'
import Videos from './Videos'
import { getVideos } from '@/utils/actions'

export const revalidate = 0
const MainVideo = async () => {
    const videos = await getVideos();
  return (
    <>
    <Videos videos={videos}/>
    </>
  )
}

export default MainVideo