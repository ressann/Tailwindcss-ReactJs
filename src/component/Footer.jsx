import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {BsMessenger,BsFacebook,BsTelegram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='p-10 w-full bg-black text-white mt-10 flex justify-around items-center'>
        <span className='flex items-center gap-2'>
            <AiOutlineCopyrightCircle/>
            <span>Copyright By <span className='text-green-500 underline'>Mr.Ressann</span></span>
        </span>
        <span className='flex gap-3'>
            <BsFacebook className='cursor-pointer hover:text-blue-500'/>
            <BsMessenger className='cursor-pointer hover:text-blue-500'/>
            <BsTelegram className='cursor-pointer hover:text-blue-500'/>
        </span>
    </div>
  )
}

export default Footer