"use client"
import usePortfolioContext from '@/context/PortfolioContext'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const EditProfile = () => {
    const getMode = useSearchParams().get("mode");

  return (
    <>
        {getMode == "edit-profile" ? <div className='fixed inset-0 bg-red-500  grid place-items-center text-textColor'>
            <form className='bg-bgColor w-[80%] '>
                <h1>Edit Profile</h1>
                <Link href="/dashboard/profile"><FaTimes/></Link>
                <label htmlFor="name" className='block'>Name</label>
                <input type="text" id="name" value={"sososo"}  className='text-bgColor p-2'/>
                <label htmlFor="status" className='block'>Status</label>
                <select name="status" id="status" className='text-bgColor'>
                    {/* <option value=""></option> */}
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                    <option value="colleague">Colleague</option>
                </select>
                <label htmlFor="work" className='block'>Work place:</label>
                <input type="text" placeholder='work place' id='work' className='text-bgColor p-2'/>
                <button>change profile pix</button>
                <button className='block'>Save</button>
            </form>
        </div> : null}
    </>
  )
}

export default EditProfile