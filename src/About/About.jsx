import React from 'react'
import {motion} from 'framer-motion'

const containerVariants={
  hidden:{
    opacity:0,
    x:'-100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{ duration:.7,type:'spring' }
  },
}
const imageVariants={
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{delay:.7, duration:.7,type:'spring' }
  },
}

const About = () => {
  return (
    <div style={{"background-image":"url('https://th.bing.com/th/id/OIP.1rOgYzytKk7_rmWkt697NwHaEo?pid=ImgDet&rs=1')"}}
      className='h-screen bg-no-repeat bg-cover bg-center text-white flex items-center justify-center'
    >
      <div className=' flex gap-5 flex-row-reverse justify-around md:flex-wrap lg:flex-nowrap flex-wrap p-20 '>
        <motion.div className='w-2/4 flex justify-center'
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src="https://th.bing.com/th/id/R.2c3949930c5ce752fa7d1a44eeea5a04?rik=RoIbQs2%2b2qZVTA&riu=http%3a%2f%2fimages.huffingtonpost.com%2f2014-10-06-city1.jpg&ehk=l4g3JNlzGpNYmGAfnfcRmd1aGTBpVcN1Y7lM1WDVUEo%3d&risl=&pid=ImgRaw&r=0" alt=""
            className='w-96 h-96 rounded-md'
          />
        </motion.div>
        <div className='w-2/4'>
          <motion.h1 className='font-sans font-semibold text-5xl pb-10 min-w-fit'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >About Us</motion.h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, esse. Maxime sunt magnam ut qui quae perspiciatis quisquam explicabo excepturi. Veniam fuga soluta laboriosam delectus, magni eum libero dolore voluptates atque cum blanditiis assumenda ipsum harum optio, quibusdam debitis? Maxime necessitatibus magnam incidunt consectetur ut, provident minima ratione quos ipsa?</p>
        </div>
      </div>
    </div>
  )
}

export default About