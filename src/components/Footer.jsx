import React from 'react'
import github from '../assets/github.png'
import { me,  footer2 } from '../assets'
import linkedin from '../assets/linkedin.webp'
import leetcode from '../assets/leetcode.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import amit_martha from '../assets/Amit Martha Photo.png'


const Footer = () => {
  const github_url = 'https://github.com/FrozenSpirit'
  const linkedIn_url = 'https://www.linkedin.com/in/amit-martha-3605071b7/'
  const leetcode_url = 'https://leetcode.com/FrozenSoul/'
  return (
    <div className='  h-[500px]  w-full flex justify-center  flex-col items-center relative' name='Contact Me' >
        
        <img src={footer2} className='-z-[2] w-full h-full object-cover absolute' alt="" />

        <div className='w-[90%] flex flex-col items-center justify-center'>
          <h1 className='py-4 text-3xl font-semibold text-white'>Contact Me</h1>
        <div className='z-[4] flex w-[90%] md:w-[470px] justify-center items-center h-[60px] bg-[#EEEEEE] rounded-3xl my-2'>
          <input type="email" className=' w-[96%] focus:outline-none md:w-[450px]  h-[50px] px-3 rounded-tl-3xl rounded-bl-3xl ml-1' placeholder='Send Email'/>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl md:text-3xl px-5'/>

        </div>

        <div className='w-full h-[200px] md:h-[200px] my-2   flex items-center flex-col md:flex-row z-[5]'>

          

          <div className='w-full   z-10 h-full flex justify-evenly items-center'>
              <div onClick={() => window.open(github_url)} className='flex flex-col justify-center items-center'>
              <img src={github} alt="github" className='md:scale-90 h-[50px[ w-[50px] md:h-[80px] md:w-[80px] rounded-full m-5 cursor-pointer'/>
              <p className='text-white  text-md md:text-lg'>Github</p>
              </div>

              <div  onClick={() => window.open(linkedIn_url)} className='flex flex-col justify-center items-center'>
              <img src={linkedin} alt="github" className='scale-110 h-[70px[ w-[70px] md:h-[80px] md:w-[80px] rounded-full m-2 cursor-pointer'/>
              <p className='text-white  text-md md:text-lg'>LinkedIn</p>
              </div>

             

              <div onClick={() => window.open(leetcode_url)} className='flex flex-col justify-center items-center'>
              <img src={leetcode} alt="github" className='object-cover  md:scale-75 h-[50px[ w-[50px] md:h-[80px] md:w-[80px] rounded-lg md:rounded-full m-5 cursor-pointer'/>
              <p className='text-white  text-md md:text-lg'>Leetcode</p>
              </div>

              
          </div>

        </div>
        </div>

    </div>
  )
}

export default Footer