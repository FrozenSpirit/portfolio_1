import React from 'react'
import banner from '../assets/banner.mp4'

const Hero = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center ' name='Home'>
        <video src={banner} className='object-cover w-full h-full' muted autoPlay loop></video>

        <div className='absolute z-[3] flex flex-col justify-center items-center'>
            <h1 className='text-[50px] md:text-[80px] text-white font-sans font-semibold'>Hello, I am Amit</h1>
            <p className='font-semibold text-white text-lg md:text-xl'>
                I'm a Frontend Developer
            </p>
        </div>
        
    </section>
  )
}

export default Hero