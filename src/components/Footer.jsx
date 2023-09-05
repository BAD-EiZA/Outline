import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='mt-4 h-8 w-full flex justify-center items-center flex-row gap-1 '>
        <AiOutlineCopyright size={30} color='black'/>
        <h1 className='text-center font-bold text-black text-sm'>Copyright by Eiza as Developer & Marlee as UI Designer</h1>
    </div>
  )
}

export default Footer