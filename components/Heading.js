import React from 'react'

const Heading = ({title}) => {
  return (
    <div className="text-black text-[19px] sm:text-[23px] md:text-[26px] font-medium flex items-center gap-4 py-16">
        {title}
        <div className='bg-sky-800 h-[2px] w-[40px] translate-y-1'></div>
    </div>
  )
}

export default Heading
