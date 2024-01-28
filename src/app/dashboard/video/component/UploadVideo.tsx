"use client"
import { addVideo } from "@/utils/actions"
import { useFormState,useFormStatus } from "react-dom"
const UploadBtn = () => {
    const {pending} = useFormStatus()
    return(
        <button className='bg-primary px-8 py-2 rounded-md text-black' disabled={pending}>{pending ? "uploading..." : "Upload"}</button>
    )
}

const UploadVideo = () => {
const [uploadMsg, FormUpload] = useFormState(addVideo,{message:""})
  return (
    <form action={FormUpload}>
        {uploadMsg ? <p>{uploadMsg.message}</p> : null}
        <div>
            <label htmlFor="upload" className='block'>Upload Video</label>
            <input type="file" name='upload' id='upload'/>
        </div>
        <div>
            <label htmlFor="title" className='block'>Title</label>
            <input type="text" name='title' id='title' className='text-black p-2'/>
        </div>
        <div>
            <label htmlFor="description" className='block'>Description</label>
            <input type="text" name='description' id='description' className='text-black p-2'/>
        </div>
        <div>
            <label htmlFor="link" className='block'>Link</label>
            <input type="text" name='link' id='link' className='text-black p-2'/>
        </div>
       <UploadBtn/>
    </form>
  )
}

export default UploadVideo