"use client"
import { addProject } from "@/utils/actions"
import { useFormState,useFormStatus } from "react-dom"
const UploadBtn = () => {
    const {pending} = useFormStatus()
    return(
        <button className='bg-primary px-8 py-2 rounded-md text-black ' disabled={pending}>{pending ? "uploading..." : "Upload"}</button>
    )
}

const UploadProject = () => {
    const [uploadMsg, FormUpload] = useFormState(addProject,{message:""})
    return (
    <>
        {uploadMsg ? <p>{uploadMsg.message}</p> : null}
        <form action={FormUpload} className="flex w-full justify-center items-center gap-4 pb-6">
            <div className="flex flex-col my-8 justify-center items-center gap-4 w-[55%] max-w-[20rem] ">
                <div className="w-full">
                    <label htmlFor="upload" className='block'>upload file</label>
                    <input type="file" name='upload' id='upload' className="w-full p-2 bg-transparent border-2 border-textColor rounded-md"/>
                </div>
                <div className="w-full">
                    <label htmlFor="category" className='block'>Category</label>
                    <input type="text" name='category' id='category' className='text-black p-2 w-full bg-transparent border-2 border-textColor rounded-md'/>
                </div>
            </div>
            <UploadBtn/>
        </form>
    </>
  )
}

export default UploadProject