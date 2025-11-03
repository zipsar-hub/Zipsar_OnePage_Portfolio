import React from 'react'

const Card = ({logo, heading, description}) => {
  return (
    <div className='w-full h-full px-4 md:px-6 py-6 md:py-8 bg-black text-white flex flex-col items-center gap-5 hover:bg-black/80 transition-all duration-300'>
        <div className='flex items-center gap-3 w-full'>
            <span className='text-teal-500 flex-shrink-0'>{logo}</span>
            <h1 className='text-xl md:text-2xl font-semibold'>{heading}</h1>
        </div>
        <p className='text-white/80 text-sm md:text-base font-light leading-relaxed text-left w-full'>{description}</p>
    </div>
  )
}

export default Card