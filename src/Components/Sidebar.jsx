import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdDownloadForOffline } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";


const Sidebar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='w-[25%] min-h-screen bg-[#002512] flex flex-col justify-between p-8'>
      <button  className='md:hidden text-white text-2xl'
      onClick={() => setMenu(!menu)} >
        {menu ? <HiX /> : <HiMenu />}
       
      </button>

       <div>
            <h2 className='text-lg md:text-2xl lg:text-4xl lg:ml-10   -mt-100 -ml-1 md:mt-25 font-bold text-white text-center'>Wisdom Warmate</h2>
        </div> 

      <div className={`flex flex-col gap-6 lg:ml-8  place-items-center font-bold -mt-170 md:mt-35 uppercase text-white md:flex
      ${menu ? 'flex' : 'hidden'}`}>

       
        {/* <div className='flex flex-col gap-4 place-items-center mt-50 uppercase text-white'> */}
            <NavLink to='/' className='flex items-center px-6'>
            <p className='text-sm md:text-2xl'>Home</p>
            </NavLink>
             <NavLink to='/services' className='flex items-center px-6'>
            <p className='text-sm md:text-2xl'>Services</p>  
            </NavLink> 
            <NavLink to='/portfolio' className='flex items-center px-6'>
             <p className='text-sm md:text-2xl'>Portfolio</p>
            </NavLink> 
            <NavLink to='contact' className='flex items-center px-6'>
             <p className='text-sm md:text-2xl'>Contact</p>
            </NavLink> 
           
        </div>
        <a href='/cv.pdf' download='Wisdom_CV.pdf'>
        <button className='w-20 bg-green-500 hover:bg-green-600 transition duration-200 text-xs md:text-lg md:w-40 rounded-full border text-center text-white py-2 px-0 md:px-2 md:py-0 justify-center  items-center gap-2 whitespace-nowrap -ml-3 mt-4 lg:-ml-0 lg:text-2xl lg:w-full lg:-py-6 md:-ml-4 font-semibold '>  Dowload CV <MdDownloadForOffline  className='text-lg md:text-2xl md:mt-0 md:ml-14 lg:text-2xl lg:ml-18 ml-7'/></button>
        </a> 
    </div>
  )
}
 
export default Sidebar
