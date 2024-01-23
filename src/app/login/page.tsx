"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <h2 className='text-textColor pb-4'>Welcome Kelechi.</h2>
      <button className='bg-primary px-8 py-2 rounded-md' onClick={()=> signIn("google")}>Sign in with Google </button>
    </div>
  )
}

export default Login