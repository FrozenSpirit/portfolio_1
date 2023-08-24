import React from 'react'

const Cards = ({id, image, language, proficiency}) => {
  return (
   <div id={id} className='rounded-3xl w-[100px] h-[120px] md:h-[200px]  flex flex-col flex-1 justify-between items-center mx-7 my-3 hover:scale-110 duration-200'>

      <div className='
      w-[95%] h-2/3  rounded-3xl m-2'>
        <img src={image} alt="js" className='object-contain h-[90%]'/>
      </div>

      <div className='flex justify-center w-[95%] flex-col ml-5 h-1/3'>
        <h1 className='text-sm md:text-md lg:text-lg font-bold text-white'>{language}</h1>
        <h2 className='text-sm md:text-md lg:text-lg font-bold text-white'>{proficiency}</h2>
      </div>
   </div>
    
  )
}

export default Cards