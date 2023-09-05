import React from 'react'

const Introduce = () => {
  return (
    <div className='w-full grid justify-center items-center grid-cols-2'>
      <div className='flex flex-col items-center '>
        <img src="https://i.imgur.com/HbGPpYt.png" alt="" className='rounded-full h-[480px] w-[480px] shadow-2xl' />
      </div>
      <div className='flex flex-col'>
        <p className=' text-xl font-bold leading-[1.15] text-black sm:text-4xl'>Who is <span className='mavisai'>Mavis?</span></p>
        <p className='pr-10 text-2xl'><span className='mavisai'>Mavis</span> is an AI that can help you with GPT-3.5 artificial intelligence technology so that all your work can be done easily.</p>
      </div>
    </div>
  )
}

export default Introduce