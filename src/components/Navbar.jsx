import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { navLinks } from '../constants'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style'


const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [click, setClicked] = useState(false);

  return (
    <section className='absolute  h-[60px] mt-7 rounded-xl flex items-center justify-center z-[10] w-full' name='home' id='home'>

       <div className='w-[90%] flex justify-between items-center bg-black h-full rounded-xl '>
       <div className='mx-2 lg:mx-6 py-2 px-3 lg:px-5'>
            <h1 className='text-2xl font-bold text-[#16FF00] '>#Amit</h1>
        </div>


        <div className='hidden lg:flex '>
            <ul className='flex gap-3 '>
                {navLinks.map((nav, index) => (
                    <li id={nav.id}>
                        <Link to={`${nav.title}`} smooth={true} duration={300}

                            className={` p-2  hover:underline-offset-4 hover:underline cursor-pointer text-lg
                            ${active === nav.title ? 'underline underline-offset-4 text-white' : 'text-[#16FF00]'}
                            ${index === navLinks.length - 1 ? "mr-5" : 'mr-0'}`}
                            onClick={() => setActive(nav.title)}>
                                {nav.title}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>

        <div className='lg:hidden p-1  mr-3 flex-0 z-[3]'
        onClick={() => setClicked(!click)}>
            {!click ? <FontAwesomeIcon icon={faBars} className='text-white text-2xl px-2 py-1'/> : <FontAwesomeIcon icon={faXmark} className='text-white text-2xl px-2 py-1'/>}
        </div>

            
      
        
        <div className={`${click ? " flex ease-in-out duration-300" : " left-[-100%] "} w-full left-0 p-4 my-10 justify-end items-center  absolute top-[39px]`}>

            <div className='flex-1 flex justify-center items-center max-w-[250px] md:w-[25%] bg-[#191825] rounded-xl md:mr-[50px] mr-[10px] lg:hidden'>
                <ul className='flex flex-col gap-3 '>
                    {navLinks.map((nav, index) => (
                        <Link to={nav.title} smooth={true} duration={300}>
                        <li id={nav.id} className={` 
                        ${!click ? 'hidden' : 'flex'}
                         justify-center items-center text-[#16FF00] text-lg md:text-xl
                        ${index == navLinks.length - 1 ? 'mt-1 mb-5' : 'mt-3'}`}>
                            {nav.title}
                        </li>
                        </Link>
                        
                    ))}

                </ul>
            </div>

        </div>
       </div>

        
    

    </section>
















    // <div className='flex justify-center items-center w-full z-[3] '>
    //     <div className='bg-gradient-to-r bg-navbar p-4 text-white mt-5 rounded-xl w-[90%] flex justify-between items-center'>
    //         <div className='px-3 '>
    //             <h1 className='text-2xl text-[#16FF00] font-extrabold text-black'>#Amit</h1>
    //         </div>

    //         <ul className='flex gap-3'>
    //             <li className={`text-center p-2 mr-3 text-lg hover:underline hover:cursor-pointer font-semibold text-black hover:underline-offset-4 ${active === "Home" ? "underline underline-offset-4" : "text-white"}`} onClick={() => setActive("Home")}>
    //                 Home</li>
               
    //             <li className={`text-[#16FF00] text-center p-2 mr-3 text-lg hover:underline hover:cursor-pointer font-semibold text-black hover:underline-offset-4                     ${active === "About" ? "underline underline-offset-4" : "text-white"}`} onClick={() => setActive("About")}>
    //             <Link to='about' smooth={true} duration={500}>
    //                 About
    //             </Link>
    //             </li>
               
    //             <li className={`text-center p-2 mr-3 text-lg hover:underline hover:cursor-pointer font-semibold text-black hover:underline-offset-4                     ${active === "Skills" ? "underline underline-offset-4" : "text-white"}`} onClick={() => setActive("Skills")}>
    //                 <a href="#about" className="scroll-smooth  duration-300">Skills</a>
    //                 </li>
               
    //             <li className={`text-center p-2 mr-3 text-lg hover:underline hover:cursor-pointer font-semibold text-black hover:underline-offset-4                     ${active === "Work" ? "underline underline-offset-4" : "text-white"}`} onClick={() => setActive("Work")}>Work</li>
    //         </ul>
            
            
    //     </div>
    // </div> 
  )
}

export default Navbar