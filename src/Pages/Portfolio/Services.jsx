import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";




const service = [
  {
  icon: <FaLaptopCode className='text-6xl mx-auto mb-4'/>,
  title: 'Web Development',
  description: 'I build fast, responsive, and scalable website using modern technology '
}, 
{
  icon: <FaPaintBrush className='text-6xl mx-auto mb-4'/>,
  title: 'UI/UX Design',
  description: 'I design clean, intuitive and conversion-focused inteface'
},
{
  icon: <FaMobileAlt className='text-6xl mx-auto mb-4'/>,
  title: 'Mobile Friendly Design',
  description: 'Every website i build is fully responsive and looks amazing '
},
{
  icon: <FaSearch className='text-6xl mx-auto mb-4'/>,
  title: 'SEO Optimization',
  description: 'I Optimize websites to rank higher on Google, improving visibilty'
},
{
  icon: <FaShoppingCart className='text-6xl mx-auto mb-4'/>,
  title: 'E-commerce Development',
  description: 'From product pages to checkout flow, I build full E-commerce website.'
}
]



const Services = () => {
  return (
    <div className='text-center py-4 px-2 text-white'>
      <h2 className='text-4xl font-bold mb-4 mt-6'>My <span>Services</span></h2>
      <div className='grid grid-cols-3 gap-4 max-w-4xl mx-auto'>
        {service.map((serve, index) => (
          <div key={index} className='bg-[#001f0e] p-6 rounded-xl text-center w-full transition-transform duration-300 hover:-translate-y-1'>
            <h3 className='text-green-500'>{serve.icon}</h3>
            <h3 className='text-2xl font-semibold mb-3'>{serve.title}</h3>
            <p className='text-gray-400 text-base'>{serve.description}</p>

          </div>
         ))}
      </div>
    </div>
  )
}

export default Services
