import React from 'react'
import {  FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import {IoMail} from "react-icons/io5"
import {AiFillInstagram} from "react-icons/ai"


const Contact = () => {
  return (
    <>
        <section className='w-full py-[7rem]'>
            <h2 className='font-extrabold text-2xl sm:text-3xl text-textColor text-center'>Contact Me</h2>
            <div className='pt-12 pb-4 grid place-items-center gap-2 text-textColor'>
                <p className='text-center'>In need of a graphic designer or want to learn canva?</p>
                <p>Reach out via:</p>
            </div>
            <div className='text-textColor w-full flex justify-center items-center gap-8 pt-8'>
                <div className='flex flex-col justify-start items-center gap-4 '>
                    <IoMail className="h-8 w-8 text-primary cursor-pointer"/>
                    <p>Email</p>
                </div>
                <div className='flex flex-col justify-start items-center gap-4'>
                    <FaYoutube className="h-8 w-8 text-primary cursor-pointer" />
                    <p>Youtube</p>
                </div>
                <div className='flex flex-col justify-start items-center gap-4'>
                    <FaInstagramSquare className="h-8 w-8 text-primary cursor-pointer" />
                    <p>Instagram</p>
                </div>
            </div>
        </section>
        <footer className='w-full py-2 text-textColor border-t border-t-primary flex justify-center gap-4'>
            <p className='text-xs'>&copy; copyright {new Date().getFullYear()}.</p>
            <p className='text-xs'>Built by Okonnah Victoria 💙.</p>
        </footer>
    </>
  )
}

export default Contact