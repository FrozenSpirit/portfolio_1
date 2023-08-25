import React from 'react'
import { coding13, java, react, tailwind, javascript, python, html, css, numpy, pandas, opencv, mysql} from '../assets'
import Cards from './Cards'
import footer5 from '../assets/footer6.jpeg'


const TechnicalSkills = () => {
  const sk = {id: '1', image:{java}, proficiency:'intermediate'}
  return (
    <section className='w-full h-full lg:h-screen relative' name="TechSkills">

      <img src={footer5} alt="bg" className='object-cover h-full  w-full  absolute -z-[2]' />

      <div className='p-3 lg:p-8'>
        <h1 className='text-5xl text-white pt-5 pl-2'>Technical Skills</h1>

        <div className='w-full h-full z-[10] flex flex-col justify-center items-center py-3'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-white w-full pl-3 my-4'>Languages</h1>

          <div className='w-[95%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6'>
          <Cards id={'1'} image={java} language={'Java'} proficiency={'Intermediate'}/>
          <Cards id={'1'} image={python} language={'Python'} proficiency={'Intermediate'}/>
          <Cards id={'1'} image={javascript} language={'JS'} proficiency={'Beginner'}/>
          <Cards id={'1'} image={html} language={'HTML'} proficiency={'Intermediate'}/>
          <Cards id={'1'} image={css} language={'CSS'} proficiency={'Intermediate'}/>
          <Cards id={'1'} image={mysql} language={'MySQL'} proficiency={'Beginner'}/>

         
          </div>

        </div>

        

        <div className='w-full h-full z-[10] flex flex-col justify-center items-center py-3'>
          <h1 className='text-xl md:text-2xl lg:text-3xl text-white w-full pl-3 my-4'>Frameworks and Libraries</h1>

          <div className='w-[95%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6'>
          <Cards id={'1'} image={react} language={'React'} proficiency={'Intermediate'}/>
          <Cards id={'1'} image={tailwind} language={'Tailwind'} proficiency={'Intermediate'}/>
          <Cards id={'1'} image={numpy} language={'NumPy'} proficiency={'Intermediate'}/>
          <Cards id={'1'} image={pandas} language={'Pandas'} proficiency={'Intermediate'}/>
          
          <Cards id={'1'} image={opencv} language={'OpenCV'} proficiency={'Intermediate'}/>

         
         
          </div>

        </div>

      </div>

    </section>
  )
}

export default TechnicalSkills