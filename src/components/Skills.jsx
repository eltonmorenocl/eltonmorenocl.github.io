import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/nodejs.svg';
import TypeScript from '../assets/typescript.svg'
import Docker from '../assets/docker.svg'
import Python from '../assets/python.svg'
import Sql from '../assets/mysql.svg'
import Jest from '../assets/jest.svg'
import Aws from '../assets/aws.svg'

const Skills = () => {

  return (
    <div name='skills' className='w-full h-screen dark:bg-[#0a192f] dark:text-gray-300 bg-[#ecf0f3] text-[#1f2937]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 dark:border-green-400 border-[#5651e5]'>Skills</p>
              <p className='py-4'>Algumas tecnologias com que trabalhei</p>
          </div>

          <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={Jest} alt="HTML icon" />
                  <p className='my-4'>JEST</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={Sql} alt="HTML icon" />
                  <p className='my-4'>MySQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={TypeScript} alt="HTML icon" />
                  <p className='my-4'>Typescript</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={Docker} alt="HTML icon" />
                  <p className='my-4'>Docker</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                  <img className='w-32 mx-auto' src={Aws} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
