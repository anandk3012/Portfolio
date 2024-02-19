import React from 'react'
import { Link,BrowserRouter as Router,Route } from 'react-router-dom'

const Header = () => {
  const logo = "{ AK }"
  return (
    <div className='w-full h-auto mt-8 mb-10 mx-auto flex justify-evenly align-middle'>
      <div className="name w-1/3">
        <p className='w-full text-3xl'><Link to="/" >{logo}</Link></p>
      </div>

      <div className="navbar w-5/12 flex justify-end">
        <ul className='w-2/3 flex justify-evenly align-middle text-xl'>
          <Link to="/" className='list-none'>About</Link>
          <Link to="/projects" className='list-none'>Projects</Link>
          <Link to="/contact" className='list-none'>Contact</Link>
        </ul>
      </div>
    </div>
  )
}

export default Header