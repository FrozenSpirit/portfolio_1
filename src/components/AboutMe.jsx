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
            Hello, my name is Amit Martha and I am a computer science engineer with keen interest in WebDevelopment, Data Structres & Algorithms and Machine Learning. <br />
          I have completed my B.Tech from Institute of Technical Education and Research (ITER) in 2023. During my B.Tech I learned a lot about Data Structures and Algorithms, Cryptography, Networking, Databases, Machine Learning and many more. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, qui. Atque voluptate aspernatur quasi eius officiis! Ea numquam neque illo. Facilis reprehenderit laudantium laboriosam veniam quos asperiores aut corporis rem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam reiciendis eius alias accusantium quidem laudantium velit fugit reprehenderit animi? Nobis voluptatem cumque magnam dolores dolore unde ducimus facere fuga dolorum.
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