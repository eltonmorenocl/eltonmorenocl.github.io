import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen dark:bg-[#0a192f] dark:text-gray-300 bg-[#ecf0f3] text-[#1f2937]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='dark:text-green-500 text-[#5651e5]'>Olá Mundo! Saudações, Meu nome é</h1>
        <h2 className='text-4xl sm:text-7xl font-bold dark:text-[#ccd6f6] text-[#141b25]'>
          Elton Moreno
        </h2>
        <h3 className='text-4xl sm:text-7xl font-bold dark:text-[#8892b0] text-[#3c4652]'>
          Full Stack Software Developer
        </h3>
        <p className='dark:text-[#8892b0] text-[#1f2937] py-4 max-w-[700px]'>
          Adoro tecnologia e sempre disposto a um novo desafio.
        </p>
        <div>
          <a class="" target="_blank" href="https://gitconnected.com/eltonmorenocl/resume" rel="noreferrer">
            <button className='text-[#141b25] dark:text-[#ccd6f6] border-black dark:border-white group border-2 px-6 py-3 my-2 flex items-center dark:hover:bg-green-500 hover:bg-[#5185e5]'>Download CV   
            <span>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home