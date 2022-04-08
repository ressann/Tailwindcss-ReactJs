import React from 'react'
import {BsMessenger,BsFacebook,BsTelegram} from 'react-icons/bs'
import Footer from '../component/Footer'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div>
      <span className='flex justify-center p-10'>
        <h1 className='font-serif text-4xl'>Contact Us</h1>
      </span>
      <div className='flex justify-center flex-col items-center gap-10'>
        <form className='flex flex-col gap-5 w-80'>
          <input type="text" name='name' placeholder='Your Name'
            className='border-b-2 p-2 outline-none'
          />
          <input type="email" name='email' placeholder='Your Email'
            className='border-b-2 p-2 outline-none'
          />
          <textarea name="message" placeholder='Your Message'
            className='border-2 p-2 w-80 h-20 outline-none'
          ></textarea>
          <button className='hover:scale-110 hover:shadow-md hover:shadow-slate-600 bg-cyan-500 rounded-full p-2 text-white hover:bg-slate-600'>Contact now</button>
        </form>
        <div className='flex gap-5 mt-20 mb-36'>
          <motion.a
            initial={{x:'-100vw'}}
            animate={{x:0}}
            transition={{duration:.3,type:'spring'}}
            whileHover={{scale:1.2}}
          href='#' className='cursor-pointer hover:shadow-md hover:shadow-slate-600 hover:bg-slate-500 flex items-center flex-col gap-2 bg-cyan-400 p-5 rounded-md text-white'>
            <BsFacebook className='text-4xl'/>
            <span>Facebook</span>
          </motion.a>
          <motion.a
            initial={{y:'100vh'}}
            animate={{y:0}}
            transition={{ duration:.7,type:'spring'}}
            whileHover={{scale:1.2}}
          href='#' className='cursor-pointer hover:shadow-md hover:shadow-slate-600 hover:bg-slate-500 flex items-center flex-col gap-2 bg-cyan-400 p-5 rounded-md text-white'>
            <BsMessenger className='text-4xl'/>
            <span>Facebook</span>
          </motion.a>
          <motion.a
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{duration:.3,type:'spring'}}
            whileHover={{scale:1.2}}
          href='#' className='cursor-pointer hover:shadow-md hover:shadow-slate-600 hover:bg-slate-500 flex items-center flex-col gap-2 bg-cyan-400 p-5 rounded-md text-white'>
            <BsTelegram className='text-4xl'/>
            <span>Facebook</span>
          </motion.a>
        </div>
      </div>

      {/* footer page */}
      <Footer/>
    </div>
  )
}

export default Contact