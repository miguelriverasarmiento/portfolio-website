import React from 'react'
import {RiCloseFill} from 'react-icons/ri'
import Link from 'next/link'

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <div className={`w-screen h-screen ${isOpen ? "fixed" : "hidden"} top-0 left-0
    bg-gray-800 z-20 text-white grid place-items-center`}>
        
        <div className="absolute top-0 right-0 mr-[30px] mt-[10px] text-[24px]
        hover:cursor-pointer" onClick={toggleSidebar}>
            <RiCloseFill />    
        </div>

        <div className="flex flex-col gap-4 text-[28px]">
            <Link className="hover-text-[#ff4D41]" href='/' legacyBehavior>Inicio</Link>
            <Link className="hover-text-[#ff4D41]" href='/About' legacyBehavior>Acerca de mi</Link>
            <Link className="hover-text-[#ff4D41]" href='/Projects' legacyBehavior>Proyectos</Link>
            <Link className="hover-text-[#ff4D41]" href='/Contact' legacyBehavior>Contacto</Link>
        </div>
    
    </div>
  )
}

export default Sidebar