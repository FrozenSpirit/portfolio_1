import React from 'react'
import { Link } from 'react-scroll'

const Achievements = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <Link to='footer' smooth={true} duration={300}>
        Click me
      </Link>
    </div>
  )
}

export default Achievements