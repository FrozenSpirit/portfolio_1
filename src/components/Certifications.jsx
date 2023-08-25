import React from 'react'
import { layout } from '../style'
import styles from '../style'
import { me } from '../assets'

const Certifications = () => {
  return (
    <section name='certifications' className='h-screen w-full' >
    
    <div className='w-[400px] h-[300px]'>
      <img src={me} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

    
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden'/>
        billing & invoicing
      </h2>
      <p className={`${styles.paragrah} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero delectus voluptatum culpa, quo natus a quis ut voluptatibus illum omnis! Modi nulla possimus beatae!
      </p>

      <div className='flex flex-wrap sm:mt-10 mt-6'>
        <img src={me} alt="googlePlay" className='w-[128px] h-[40px] object-contain mr-5 cursor-pointer'/>
        <img src={me} alt="appleStore" className='w-[128px] h-[40px] object-contain cursor-pointer' />
      </div>
    </div>
  </section>
  )
}

export default Certifications