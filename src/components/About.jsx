import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen dark:bg-[#0a192f] dark:text-gray-300 bg-[#ecf0f3] text-[#1f2937]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 dark:border-green-400 border-[#5651e5]'>
              Sobre
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Olá! Meu nome é <br/> Elton Moreno Costa Lima</p>
            </div>
            <div>
              <p> Sou graduado em análise de sistemas pela Unifacs, conclui o curso de desenvolvimento web fullstack na Trybe. 
              Busco aprender algo novo todos os dias. 
              Acredito que ser um desenvolvedor não é usar uma linguagem específica, mas escolher a ferramenta adequada para cada trabalho.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About