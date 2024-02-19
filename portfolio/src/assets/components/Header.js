import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header w-full h-auto flex'>
        <div className='navbar w-3/4 mx-auto my-5'>
            <ul className='w-1/2 mx-auto flex justify-evenly align-middle'>
                <Link to="/" >Home</Link>
                <Link to="/projects">Projects</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header