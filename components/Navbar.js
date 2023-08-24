import React from 'react'
import Link from 'next/link'
import {FcDownload} from 'react-icons/fc'
import {FcMenu} from 'react-icons/fc'

const Navbar = ({toggleSidebar}) => {

    return (
        <div className="bg-stone-500 fixed top-0 w-[100%] z-10">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <div className="text-[20px]">Software Dev</div>

                <div className="hidden md:flex gap-6">
                    <Link href='/Photo' legacyBehavior>
                        <a className='hover:text-sky-950'>Inicio</a>
                    </Link>
                    <Link href='/About' legacyBehavior>
                        <a className='hover:text-sky-950'>Acerca de mi</a>
                    </Link>
                    <Link href='/Projects' legacyBehavior>
                        <a className='hover:text-sky-950'>Proyectos</a>
                    </Link>
                    <Link href='/Contact' legacyBehavior>
                        <a className='hover:text-sky-950'>Contacto</a>
                    </Link>
                </div>
                <a href="./miguel_rivera.pdf" className='hidden md:flex border border-stone-700 px-4 py-1 text-stone-950 rounded-[5px] 
                    items-center gap-2 hover:text-sky-950 transition duration-200'>
                        Descargar CV
                    <FcDownload />
                </a>

                <div className="md:hidden text-[24px]" onClick={toggleSidebar}>
                    <FcMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
