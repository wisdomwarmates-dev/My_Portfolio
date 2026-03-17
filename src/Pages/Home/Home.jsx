import React from 'react'
import Typewriter  from 'typewriter-effect'
import profile from '../../assets/profile.png';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className='max-w-5xl w-full mx-auto grid: md:grid-col-=s-2 gap-10 item-center mt-20'>
      <div>
        <h1 className='text-white md:text-5xl text-xl font-bold mb-10 relative -mt-6 ml-8'>Hi! I'm Wisdom,
        <br />
        <span className='md:text-6xl text-2xl text-green-400'>
        <Typewriter
        options={{
          strings: ['Web Developer' + " "  +  " " + 'Web Designer'],
          autoStart: true,
          loop: true,
          cursor: '|',
          delay: 100,
          deleteSpeed: 50
        }}
        />
        </span>
        </h1>
        <p className='text-gray-400 text-xs md:text-lg lg:text-xl mt-4 leading-relaxed  ml-4'>
          I'm a frontend UI/UX designer who genuinely enjoys the process of building thoughtful, user-centered digital experiences.<br /> Through a growing portfolio of projects, I've been developing my ability to turn ideas into clean, functional interfaces that feel intuitive to use. I'm always learning, continuously refining my craft, and deeply committed to creating designs that truly serve the people who use them.</p>
        <div className='mt-6 flex gap-8 ml-4'>
          <Link to='/contact'>
          <button className='bg-green-600 whitespace-nowrap hover:bg-green-800 transition px-8 py-2 rounded-lg text-white font-md'>Contact Me</button>
          </Link>
          <a href='/cv.pdf' download='Wisdom_CV.pdf'>
          <button className='bg-green-600 hover:bg-green-800 whitespace-nowrap transition px-8 py-2 rounded-lg text-white font-md'>Download CV</button>
          </a>
        </div>
      </div>
      <div className='justify-center'>
        <img src={profile} alt='Profile pics' className='relative w-70 mt-14 border-20 border-white ml-12'/>
      </div>
    </div>
  )
}

export default Home
