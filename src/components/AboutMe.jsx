import React from 'react'
import coding1 from '../assets/coding2.jpeg'

const AboutMe = () => {
  return (
    <section name='About Me' className=' w-full  bg-primary flex flex-col gap-8 md:flex md:gap-20 relative  '>

      <img src={coding1} alt="coding" className='absolute -z-[2] w-full h-full object-cover' />
        
        <div className='w-[95%] ml-3 md:ml-10 mt-5 text-white '>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold md:font-semibold flex flex-col sm:flex-row md:gap-2 m-2 md:mt-6 lg:mt-8'>I am a Computer Science <span> Engineer</span></h1>
        </div>

        <div className='ml-3 md:ml-10  w-[95%] lg:py-8'>
          <p className='text-lg text-white m-3 l'>
          <span className='font-semibold text-xl'>Hello</span>, my name is Amit Martha and I am recent Computer Science graduate with a boundless enthusiasm for technology and its transformative potential. I am a passionate frontend developer with a keen eye for design and a strong knack for turning concepts into captivating user experiences. I am dedicated to solving complex problems, embracing challenges, and constantly seeking opportunities to learn and innovate.
          </p>
        </div>

        <div className='w-[95%] ml-3 md:ml-10 min-h-[200px] pb-4'>
          <div className='flex flex-col gap-5 items-start w-[95%]  m-3'>
            <div>
              <h1 className='text-2xl font-semibold text-white'>Education</h1>
            </div>

            <div className='flex flex-col md:flex-row  justify-between items-center w-full text-white'>
              <p>Bachelor of Technology in Computer Science | ITER College | Odisha | 7.79 CGPA</p>
              <span className=" font-bold text-lg">2019-2023</span>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center w-full text-white'>
              <p>12th State Board | Nirmal College of Science | Mumbai | 58.3 % aggregate</p>
              <span className=" font-bold text-lg">2017-2019</span>
            </div>
            
            <div className='flex flex-col md:flex-row justify-between items-center w-full text-white'>
              <p>10th ICSE Board | R.B.K School | Mumbai | 90% aggregate </p>
              <span className=" font-bold text-lg">2007-2019</span>
            </div>
          </div>
        </div>


    </section>
  )
}

export default AboutMe