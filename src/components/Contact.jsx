import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen dark:bg-[#0a192f] bg-[#ecf0f3] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ac75109b-3023-4dd3-a50a-01cae3a85f3e" className='flex flex-col max-w-[600px] w-full' target="_blank">
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 dark:border-green-400 border-[#5651e5] dark:text-gray-300 text-[#1f2937]'>Contato</p>
                <p className='dark:text-gray-300 text-[#1f2937] py-4'>Envie uma mensagem no formulário abaixo!</p>
            </div>
            <div className='flex flex-col py-1'>
              <input className='border-2 rounded-lg p-2 flex border-gray-300' type="text" placeholder='Nome' name='name' required/>
            </div>
            <div className='flex flex-col py-1'>
              <input className='border-2 rounded-lg p-1 flex border-gray-300' type="email" placeholder='E-mail' name='email' required/>
            </div>

            <div className='flex flex-col py-1'>
              <textarea className='border-2 rounded-lg p-1 border-gray-300' name="message" rows="7" placeholder='Escreva aqui' minLength="10" required></textarea>
            </div>
            
            <button className='text-white dark:text-[#384352] border-gray-300 bg-[#5651e5] dark:bg-green-400 border-2 rounded-lg p-3 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Enviar Mensagem</button>
        </form>
    </div>
  )
}

export default Contact