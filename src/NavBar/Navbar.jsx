import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='
        bg-gradient-to-r from-cyan-500 to-blue-500
        text-white p-5
    '>
        <ul className='
            flex gap-5 justify-center text-xl font-serif
        '>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/food'>Food</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar