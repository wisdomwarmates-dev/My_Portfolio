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
      <div className='flex flex-col md:flex-row'>
    <Sidebar />
    <div className='flex-1 min-h-screen py-8 px4 md:px-12 text-base'>
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
