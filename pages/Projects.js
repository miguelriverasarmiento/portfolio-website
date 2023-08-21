import React from 'react'
import Heading from '../components/Heading'
import {TbLink} from 'react-icons/tb'
import {RiGitRepositoryLine} from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="mx-auto py-10 px-8 bg-gray-400">

        <Heading title="Proyectos"/>

        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col items-center relative group">
                <Image className="w-[100%] h-[100%] shadow-2xl"  width={300} 
                height={300} src='/img/online-store.png' alt=''/>
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-yellow-600 text-[12px] sm:text-[15px] 
                md:text-[17px]">
                    Pagina de tienda online
                </div>
            </div>

            <div className='flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950'>
                Este proyecto es una pagina web de una tienda online 
                de instrumentos musicales. Utiliza el hook useContext 
                para manejar metodos y variables globalmente. Esta hecho 
                con react, javascript, html y tailwind.css.

                <div className='flex flex-col text-left mt-2 rounded shadow-sm'>
                    <div className="flex flex-row">
                        <div><TbLink className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://mgars-store.vercel.app/">Ir a mg-ars store</Link></div>
                    </div>
                    <div className="flex flex-row">
                        <div><RiGitRepositoryLine className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://github.com/miguelriverasarmiento/tienda-online">Ir a repositorio</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center relative group">
                <Image className="w-[100%] h-[100%] shadow-2xl"  width={300} 
                height={300} src='/img/weather.png' alt=''/>
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-blue-300 text-[12px] sm:text-[15px] 
                md:text-[17px]">
                    Pagina web del clima
                </div>
            </div>

            <div className='flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950'>
                Este proyecto es una pagina web donde se puede 
                buscar el clima de cualquier ciudad, utiliza 
                una api de clima la cual provee metodos de 
                longitud y latitud para obtener el mapa de google 
                maps. Esta hecho con react, y CSS Modules.

                <div className='flex flex-col text-left mt-2 rounded shadow-sm'>
                    <div className="flex flex-row">
                        <div><TbLink className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://a-weather-app.vercel.app/">Ir a-weather-app</Link></div>
                    </div>
                    <div className="flex flex-row">
                        <div><RiGitRepositoryLine className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://github.com/miguelriverasarmiento/weather-app">Ir a repositorio</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center relative group">
                <Image className="w-[100%] h-[100%] shadow-2xl"  width={300} 
                height={300} src='/img/reminderBook.png' alt=''/>
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-red-400 text-[12px] sm:text-[15px] 
                md:text-[17px]">
                    Pagina recordatorio de libros
                </div>
            </div>

            <div className='flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950'>
                Este proyecto es una pagina web en la que se puede 
                guardar referencias de libros, utiliza localStorage 
                y el hook useContext para manejar metodos y variables 
                globalmente. Esta hecho con react, objetos de estilo css 
                y CSS Modules.

                <div className='flex flex-col text-left mt-2 rounded shadow-sm'>
                    <div className="flex flex-row">
                        <div><TbLink className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://book-reminder.vercel.app/">Ir a book-reminder</Link></div>
                    </div>
                    <div className="flex flex-row">
                        <div><RiGitRepositoryLine className='text-red-800 text-[22px] pr-1'/></div>
                        <div><Link href="https://github.com/miguelriverasarmiento/book-reminder">Ir a repositorio</Link></div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center relative group">
                <Image className="w-[100%] h-[100%] shadow-xl"  width={300} 
                height={300} src='/img/poke-fg.png' alt=''/>
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-green-400 text-[12px] sm:text-[15px] 
                md:text-[17px]">
                    Pagina de Pokemon
                </div>
            </div>

            <div className='flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono
            shadow-2xl shadow hover:shadow-xl text-teal-950'>
                Este proyecto es una pagina web de Pokemon 
                que contiene una lista, busqueda por nombre,
                paginacion, y caracteristicas de cada uno 
                con su imagen. Esta hecho con next.js, 
                react, graphQL y CSS Modules.
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
