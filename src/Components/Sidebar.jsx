import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MdDownloadForOffline } from "react-icons/md";




const Sidebar = () => {

  return(
    <div className='w-[25%] min-h-screen bg-[#002512] flex flex-col justify-between p-8'>
       
        <div>
            <h2 className='text-2xl font-bold text-white text-center'>Wisdom Warmate</h2>
        </div>
        <div className='flex flex-col gap-4 place-items-center mt-50 uppercase text-white'>
            <NavLink to='/' className='flex items-center px-6'>
            <p className='text-lg'>Home</p>
            </NavLink>
             <NavLink to='/services' className='flex items-center px-6'>
            <p className='text-lg'>Services</p>  
            </NavLink> 
            <NavLink to='/portfolio' className='flex items-center px-6'>
             <p className='text-lg'>Portfolio</p>
            </NavLink> 
            <NavLink to='contact' className='flex items-center px-6'>
             <p className='text-lg'>Contact</p>
            </NavLink> 
           
        </div>
        <a href='/cv.pdf' download='Wisdom_CV.pdf'>
        <button className='bg-green-500 hover:bg-green-600 transition duration-200 text-xl rounded-full border text-white py-2 px-12 justify-center font-semibold'>  Dowload CV <MdDownloadForOffline  className='text-xl ml-11'/></button>
        </a> 
    </div>
   
  )
}

export default Sidebar
