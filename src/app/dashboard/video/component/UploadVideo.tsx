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
const [uploadMsg, FormUpload] = useFormState(addVideo,{message:""});
  return (
    <form action={FormUpload} className="flex flex-col md:flex-row w-full justify-center items-center gap-4 pb-6">
        <div className="flex my-8 justify-center items-center gap-4">
            <div className="w-[50%]">
                <div className="w-full">
                    <label htmlFor="upload" className='block'>upload file</label>
                    <input type="file" name='upload' id='upload' className="w-full p-2 bg-transparent border-2 border-textColor rounded-md"/>
                </div>
                <div className="w-full">
                    <label htmlFor="title" className='block'>Title</label>
                    <input type="text" name='title' id='title' className='text-black p-2 w-full bg-transparent border-2 border-textColor rounded-md'/>
                </div>
            </div>
            <div className="w-[50%]">
                <div className="w-full">
                    <label htmlFor="description" className='block'>Description</label>
                    <input type="text" name='description' id='description' className="w-full p-2 bg-transparent border-2 border-textColor rounded-md"/>
                </div>
                <div className="w-full">
                    <label htmlFor="link" className='block'>Link</label>
                    <input type="text" name='link' id='link' className='text-black p-2 w-full bg-transparent border-2 border-textColor rounded-md'/>
                </div>
            </div>
        </div>
        <UploadBtn/>
    </form>
  )
}

export default UploadVideo