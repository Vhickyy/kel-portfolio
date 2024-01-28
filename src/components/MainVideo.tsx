import React from 'react'
import Videos from './Videos'
import { getVideos } from '@/utils/actions'

const MainVideo = async () => {
    const videos = await getVideos();
  return (
    <>
    <Videos videos={videos}/>
    </>
  )
}

export default MainVideo