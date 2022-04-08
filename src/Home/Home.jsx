import React from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'


const containerVariants={
  hidden:{
    opacity:0,
    y:'-100vw'
  },
  visible:{
    opacity:1,
    y:0,
    transition:{ delay:.7 ,duration:.7,type:'spring' }
  }
}

const Home = () => {
  const navigate = useNavigate()

  return (
    <div style={{"background-image":"url('https://th.bing.com/th/id/R.3e603e711044dae15d80223abd466a8c?rik=GNK%2fIQFWqr0%2f3w&pid=ImgRaw&r=0')"}}
      className={'h-screen'}
    >
      <div className='
        text-white h-screen flex justify-center items-center flex-col gap-5
      '>
        <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='font-serif hover:shadow-md hover:scale-125 hover:shadow-white font-semibold text-5xl'>Food Recipes</motion.h1>
        <p className='w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at, rerum iste voluptatibus asperiores possimus laboriosam debitis atque quos iure, numquam laborum, magni soluta ipsum in error. Voluptatem magni explicabo inventore, quaerat illum reprehenderit earum soluta ipsa et possimus delectus!</p>
        <div className='flex gap-5'>
          <button onClick={()=>navigate('/about')} className=' p-2 rounded-md border-2 border-gray-500 hover:text-red-600 hover:border-red-500'>About Us</button>
          <button onClick={()=>navigate('/food')} className=' p-2 rounded-md border-2 border-gray-500 hover:text-red-600 hover:border-red-500'>See Food</button>
        </div>
      </div>
    </div>
  )
}

export default Home