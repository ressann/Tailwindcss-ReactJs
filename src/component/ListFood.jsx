import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {motion} from 'framer-motion'

const ListFood = ({food}) => {
  return (
    <div className='flex items-center gap-5 flex-wrap justify-center'>
    {food && food.map(item=>(
        <motion.div
        initial={{y:-50}}
        animate={{y:0}}
        transition={{ delay:Math.random(0,.5),duration:.7,type:'spring'}}
        className='relative shadow-2xl w-96 h-auto rounded-md'>
            <div className=''>
                <span className='absolute bg-pink-300 flex items-center gap-2 p-2 top-5 left-5 rounded-full'>
                    <AiOutlineClockCircle/>
                    <span>20 mins</span>
                </span>
                <img src={item.img} alt={item.title}
                    className='w-96 h-80 object-cover rounded-t-md'
                />
            </div>
            <div className='p-5'>
                <h3>{item.title}</h3>
                <small>Recipe by {item.recipe}</small>
            </div>
        </motion.div>
    ))}
    </div>
  )
}

export default ListFood