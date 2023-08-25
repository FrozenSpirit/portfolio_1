import React from 'react'
import {coding5, coding9, me} from "../assets"
import { machine, frontend } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faStar } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const url1 = 'https://github.com/FrozenSpirit';
  const url2 = 'https://github.com/FrozenSpirit?tab=repositories';
  return (
    <section className='w-full  flex flex-col justify-center items-center  relative' name="Projects">

     <img src={coding9} alt="background" className='object-cover w-full h-full -z-[2] absolute'/>


      <div className='w-[90%] h-[95%]  z-0 flex flex-col my-10 md:my-5  gap-10'>
        
        <div className='z-[10] '>
          <h1 className='text-white text-5xl'> Projects</h1>
        </div>
        {/* z-[10 m-5 flex md:flex-row flex-col-reverse md:gap-6 flex-col */}

        <div className='w-full'>
          <div className='flex r flex-col w-[100%] '>
            <h1 className='text-white text-xl md:text-2xl font-semibold underline decoration-2 underline-offset-2 '>Frontend Projects</h1>
            
            {frontend.map((proj, index) => (
              <div className='w-full flex flex-col my-3 flex-wrap' id={index}>
                  <h1 onClick={() => window.open(url1)} className='md:w-[55%] text-white hover:text-[#16FF00] cursor-pointer hover:underline hover:underline-offset-4 '> 

                  {index > 1 ? <FontAwesomeIcon icon={faStar} className='px-1 text-[#FFED00] font-semibold'/> : <FontAwesomeIcon icon={faBolt}  className='px-1 text-[#FFED00]'/>}

                  
                  {proj.title}</h1>
                  <p className='text-white ml-6'>{proj.desc}</p>

              </div>
            ))}
          </div>

          <div className='w-full border-t-2 border-white pt-5 mt-6'>
          <div className='flex r flex-col w-[100%] '>
            <h1 className='text-white text-xl md:text-2xl font-semibold underline decoration-2 underline-offset-2 '>Machine Learning Projects</h1>
            
            {machine.map((proj, index) => (
              <div className='w-full flex flex-col my-3 flex-wrap font-semibold' id={index}>
                  <h1 onClick={() => window.open(url2)} className='md:w-[55%] text-white hover:text-[#16FF00] cursor-pointer hover:underline hover:underline-offset-4 '> 

                  {index > 1 ? <FontAwesomeIcon icon={faStar} className='px-1 text-[#FFED00] font-semibold'/> : <FontAwesomeIcon icon={faBolt}  className='px-1 text-[#FFED00]'/>}

                  
                  {proj.title}</h1>
                  <p className='text-white ml-6'>{proj.desc}</p>

              </div>
            ))}
          </div>
          

          </div>
          </div>


        
      </div>

      

    </section>
  )
}

export default Projects