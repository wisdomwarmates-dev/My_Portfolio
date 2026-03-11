import React, { useState } from 'react'
import close from '../../assets/close.png';




const PortfolioData = ({img, title, details}) => {
    const[modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal)


  return (
    <>
    <div className='relative rounded-xl overflow-hidden cursor-pointer group' onClick={toggleModal}>
      <img src={img} alt='' className='h-64 w-full object-cover group-hover:scale-105 transition duration-200'/>
     
      <div className='absolute inset-0 bg-green-500 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
        <h3 className='text-white text-xl font-semibold transform translate-y-4 group-hover:translate-y-0 transition'>{title}</h3>
      </div>
      {modal && (
        <div className='fixed inset-0 bg-black/70 z-50 grid place-items-center gap-4'>
          <div className='bg-[#111] max-w-xl w-full p-8 rounded-xl relative shadow-2xl text-white'>
            <img src={close} alt='' className='absolute top-5 -right-5 w-10 h-10 cursor-pointer bg-white rounded-full p-2 shadow-lg'/>

            <h3 className='text-green-400 text-2xl font-bold text-center mb-6 tracking-wider'>{title}</h3>
          <ul className='grid grid-cols-2 mb-6'>
          {details.map(({icon, title, desc, view, link}, index) => (
            <li key={index} className='flex items-start gap-3 text-gray-300'> 
            <span className='text-xl'>{icon}</span>
            <div>
              <p className='text-lg font-semibold text-white'>{title}</p>
              <p className='text-xs'>{desc}</p>
             <a href={link} target='_blank' rel='noopener noreferrer'>
              <p className='text-xs underline text-green-200 hover:text-green-300 transition'>{view}</p>
              </a>
            </div>

            </li>
          ))}

          </ul>

          <img src={img} alt='' className='w-full h-64 object-cover rounded-lg'/>
          </div>

        </div>
      )}
    </div>
    </>
  )
}

export default PortfolioData
