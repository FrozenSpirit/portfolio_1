import React from 'react'
import { Link } from 'react-scroll'
import sea from '../assets/sea.jpeg'
import github from '../assets/github.png'
import { me, coding5, footer2 } from '../assets'
import linkedin from '../assets/linkedin.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import insta from '../assets/instagram.svg'


const Footer = () => {
  const github_url = 'https://github.com/FrozenSpirit?tab=repositories'
  const linkedIn_url = 'https://www.linkedin.com/in/amit-martha-3605071b7/'
  const insta_url = 'https://www.instagram.com/'
  return (
    <div className='  h-[700px] md:h-[500px] w-full flex justify-center  flex-col items-center relative' name='Contact Me' >
        
        <img src={footer2} className='-z-[2] w-full h-full object-cover absolute' alt="" />

        <div className='w-[90%] flex flex-col items-center justify-center'>
          <h1 className='py-4 text-3xl font-semibold text-white'>Contact Me</h1>
        <div className='z-[4] flex w-[90%] md:w-[470px] justify-center items-center h-[60px] bg-[#EEEEEE] rounded-3xl my-2'>
          <input type="email" className=' w-[96%] focus:outline-none md:w-[450px]  h-[50px] px-3 rounded-tl-3xl rounded-bl-3xl ml-1' placeholder='Send Email'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl md:text-3xl px-5'/>

        </div>

        <div className='w-full h-[500px] md:h-[300px] my-2   flex items-center flex-col md:flex-row z-[5]'>

          <div className='w-[90%] rounded-xl mt-5 lg:w-1/3 h-[200px] flex justify-center items-center'>
            <img src={me} alt="me" className='rounded-xl w-full h-[200px] md:h-[200px] md:w-[200px] object-cover md:rounded-full'/>
          </div>

          <div className='w-full lg:w-2/3  z-10 h-full flex justify-evenly items-center'>
              <div onClick={() => window.open(github_url)} className='flex flex-col justify-center items-center'>
              <img src={github} alt="github" className='md:scale-90 h-[50px[ w-[50px] md:h-[80px] md:w-[80px] rounded-full m-5 cursor-pointer'/>
              <p className='text-white  text-md md:text-lg'>Github</p>
              </div>

              <div  onClick={() => window.open(linkedIn_url)} className='flex flex-col justify-center items-center'>
              <img src={linkedin} alt="github" className='scale-110 h-[70px[ w-[70px] md:h-[80px] md:w-[80px] rounded-full m-5 cursor-pointer'/>
              <p className='text-white  text-md md:text-lg'>LinkedIn</p>
              </div>

              <div  onClick={() => window.open(insta_url)} className='flex flex-col justify-center items-center'>
              <img src={insta} alt="github" className='h-[50px[ w-[50px] md:scale-75 md:h-[80px] md:w-[80px]  m-5 cursor-pointer'/>
              <p className='text-white  text-md md:text-lg'>Instagram</p>
              </div>
          </div>

        </div>
        </div>

    </div>
  )
}

export default Footer