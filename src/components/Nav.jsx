import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import Logo2 from '../assets/logo 2.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp, BsFillMoonStarsFill } from 'react-icons/bs';


const Nav = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const handleClick = () => setNav(!nav);


  const functionMode = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (darkMode === false) {
      setDarkMode(!darkMode);
      htmlClasses.remove("dark");
      
    } 
    if (darkMode === true) {
      setDarkMode(!darkMode);
      htmlClasses.add("dark");
    }
  };
  

  return ( 
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 dark:bg-[#0a192f] dark:text-gray-300 bg-[#ecf0f3] text-[#1f2937]'>
      <div>
      {darkMode === true 
        ? <img src={Logo2} alt='Logo' style={{ width: '100px' }} />
        : <img src={Logo} alt='Logo' style={{ width: '100px' }} />
      }
        
      </div>
    
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={50} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} offset={50} duration={500}>
            Projetos
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contato
          </Link>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={functionMode}
            className=" cursor-pointer text-2xl"
          />
        </li>
      </ul>

      {/* hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen dark:bg-[#0a192f] dark:text-gray-300 bg-[#ecf0f3] text-[#1f2937] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contato
          </Link>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={functionMode}
            className=" cursor-pointer text-2xl"
          />
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://linkedin.com/in/eltonmoreno" target='_blank' rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://github.com/eltonmorenocl" target="_blank" rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#ff9800]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:eltonmorenocl@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#0088cc]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://t.me/eltonmorenocl" target="_blank" rel="noreferrer"
            >
              Telegram <FaTelegramPlane size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] bg-[#25d366]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="https://wa.me/5571991752136" target="_blank" rel="noreferrer"
            >
              Whatsapp <BsWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav