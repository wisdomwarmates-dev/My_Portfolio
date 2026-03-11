import React from 'react';
import { Routes, Route } from "react-router";
import Contact from './Pages/Portfolio/Contact';
import Services from './Pages/Portfolio/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home/Home';

function App() {
  

  return (
    <div className='bg-[#060f0b] min-h-screen'>
      <div className='flex w-full'>
    <Sidebar />
    <div className='w-[70%] ml-[max(5vw, 25px)] py-8 text-base'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
    </div>
    </div>
  
    </div>
      
      
  )
}

export default App
