import React from 'react'
import Heading from '../components/Heading'
import {TbLink} from 'react-icons/tb'
import {RiGitRepositoryLine} from 'react-icons/ri'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className="mx-auto py-10 px-8 bg-gray-400">

        <Heading title="Proyectos"/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col items-center relative group">
                <img className="w-[70%] h-[100%] shadow-2xl" src='/img/premier-app.png' alt=''/>
                <div className="bg-[#000000bd] absolute w-[70%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-purple-600 text-[12px] sm:text-[15px] 
                md:text-[17px]">
                    Pagina de la Premier League
                </div>
            </div>

            <div className='lex flex-col text-left px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950'>
                Este proyecto es una pagina web de informacion
                acerca de la premier league, contiene equipos,
                jugadores, tabla de posiciones, goleadores, 
                asistidores y el calendario de partidos.
                Esta hecho con react, javascript, html, css.

                <div className='flex flex-col text-left mt-2 rounded shadow-sm'>
                    <div className="flex flex-row">
                        <div><TbLink className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://mg-ars-pl.vercel.app/">Ir a mg-ars-pl</Link></div>
                    </div>
                    <div className="flex flex-row">
                        <div><RiGitRepositoryLine className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://github.com/miguelriverasarmiento/app-soccer">Ir a repositorio</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center relative group">
                <img className="w-[70%] h-[100%] shadow-xl" src='/img/poke-fg.png' alt=''/>
                <div className="bg-[#000000bd] absolute w-[70%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-green-700 text-[12px] sm:text-[15px] 
                md:text-[17px]">
                    Pagina de Pokemon
                </div>
            </div>

            <div className='flex flex-col text-left px-3 py-3 text-[12px] sm:text-[15px] font-mono
            shadow-2xl shadow hover:shadow-xl text-teal-950'>
                Este proyecto es una pagina web de Pokemon 
                que contiene una lista, busqueda por nombre,
                paginacion, y caracteristicas de cada uno 
                con su imagen. Esta hecho con next.js, 
                react, graphQL y module.css.
                <div className='flex flex-col text-left mt-2 rounded shadow-sm'>
                    <div className="flex flex-row">
                        <div><TbLink className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://pokemon-fg.vercel.app/">Ir a pokemon-fg</Link></div>
                    </div>
                    <div className="flex flex-row">
                        <div><RiGitRepositoryLine className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://github.com/miguelriverasarmiento/poke-graphql">Ir a repositorio</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
