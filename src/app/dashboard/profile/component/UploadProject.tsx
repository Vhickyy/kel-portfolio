"use client"
import { addProject } from "@/utils/actions"
import { useFormState,useFormStatus } from "react-dom"
const UploadBtn = () => {
    const {pending} = useFormStatus()
    return(
        <button className='bg-primary px-8 py-2 rounded-md text-black' disabled={pending}>{pending ? "uploading..." : "Upload"}</button>
    )
}

const UploadProject = () => {
    const [uploadMsg, FormUpload] = useFormState(addProject,{message:""})
    return (
    <form action={FormUpload}>
        {uploadMsg ? <p>{uploadMsg.message}</p> : null}
        <div>
            <label htmlFor="upload" className='block'>upload file</label>
            <input type="file" name='upload' id='upload'/>
        </div>
        <div>
            <label htmlFor="category" className='block'>Category</label>
            <input type="text" name='category' id='category' className='text-black p-2'/>
        </div>
       <UploadBtn/>
    </form>
  )
}

export default UploadProject