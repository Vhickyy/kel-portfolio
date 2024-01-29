import UploadVideo from './component/UploadVideo'
import DisplayVideo from './component/DisplayVideo'
import { getVideos } from '@/utils/actions'

const page = async () => {
  const videos = await getVideos();
  return (
    <section className='text-textColor w-[90%] lg:w-[95%] max-w-[1440px] mx-auto py-10'>
        <h1 className='text-center text-lg font-semibold'>Welcome Kelechi</h1>
        <UploadVideo/>
        <DisplayVideo Videos={videos}/>
    </section>
  )
}

export default page