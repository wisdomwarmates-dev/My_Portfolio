import React from 'react'
import { FiUser } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import foodDelivery from '../../assets/foodDelivery.png';
import Ecommerce from '../../assets/Ecommerce.png';
import LoginForm from '../../assets/LoginForm.png';
import todoApp from '../../assets/todoApp.png';
import PortfolioData from './PortfolioData';



export const portfolio = [
  {
    id: 1,
    img: foodDelivery,
    title: 'Food Delivery App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Personal Project :',
        desc: 'Food Delivery App',
      },
      {
        icon: <FiUser />,
        title: 'Personal :',
        desc: 'Food Delivery App',
      },
      {
        icon: <FaCode />,
        title: 'Language :',
        desc: 'React js, Tailwind CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'View Project :',
        view: 'www.myGithub', 
        link: 'https://github.com/wisdomwarmates-dev/Food_Delivery_App',
      },
    ]
  },
       {
    id: 2,
    img: Ecommerce,
    title: 'E-commerce website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Personal Project :',
        desc: 'E-commerce website',
      },
      {
        icon: <FiUser />,
        title: 'Personal :',
        desc: 'E-commerce website',
      },
      {
        icon: <FaCode />,
        title: 'Language :',
        desc: 'React js, CSS Styling',
      },
      {
        icon: <FiExternalLink />,
        title: 'View Project',
        view: 'www.myGithub',
        link: 'https://github.com/wisdomwarmates-dev/E-commerce-website',
      },
    ]
  },
       {
    id: 3,
    img: LoginForm,
    title: 'Login Form Page',
    details: [
      {
        icon: <FiFileText />,
        title: 'Login Form :',
        desc: 'Reac js, Tailwind CSS',
      },
      {
        icon: <FiUser />,
        title: 'Login Form :',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language :',
        desc: 'React js, Tailwind CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'View Project',
        view: 'www.myGithub',
        link: 'https://github.com/wisdomwarmates-dev/LoiginForn',
      }
    ]
  },
    {
    id: 4,
    img: todoApp,
    title: 'Standard Todo App',
    details: [
      {
        icon: <FiFileText />,
        title: 'personal Project :',
        desc: 'Todo App',
      },
      {
        icon: <FiUser />,
        title: 'Todo App :',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language :',
        desc: 'React js, CSS Styling',
      },
      {
        icon: <FiExternalLink />,
        title: 'View Project',
        view: 'www.myGithub',
        link: 'https://github.com/wisdomwarmates-dev/My_Todo_App',
      }
    ]
  },
   
   
]


const Portfolio = () => {
  return (
    <div className='py-6 px-2 text-white'>
      <h2 className='text-4xl text-center font-bold mb-12'>My <span className='text-green-400'>Portfolio</span></h2>
      <div className='grid grid-cols-3 gap-8'>
        {portfolio.map((item) => (
          <PortfolioData key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
