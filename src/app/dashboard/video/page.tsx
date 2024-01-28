import UploadVideo from './component/UploadVideo'
import DisplayVideo from './component/DisplayVideo'
import { getVideos } from '@/utils/actions'

const page = async () => {
  const videos = await getVideos();
  return (
    <section className='text-textColor'>
        <h1 >Welcome Kelechi</h1>
        <UploadVideo/>
        <DisplayVideo Videos={videos}/>
    </section>
  )
}

export default page