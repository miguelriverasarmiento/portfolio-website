import React from 'react'
import Heading from '../components/Heading'
import {CiCalendarDate} from 'react-icons/ci'
import {FaGraduationCap} from 'react-icons/fa'
import Button from '../components/Button'
import Image from 'next/image'

const About = () => {
  return (
    <section className="bg-[url('/img/aboutme.jpg')] bg-cover">

      <div className="container mx-auto pt-10 pb-20 px-4">

      <Heading title="Acerca de mí" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] sm:gap-[50px] md:gap-[80px]">

        <div className='justify-self-center w-[250px]'>
          <Image 
            className="border-slate-400" 
            src="/img/miguelriv23.png" 
            width={400} 
            height={400}
            alt=""/>
        </div>

        <div className='col-span-2'>

          <div className="grid">

            <div className="grid gap-6 text-[14px] sm:text-[16px] md:text-[19px]">

              <div className="flex flex-row gap-2 font-normal text-slate-300">
                <div className='text-[22px] w-[22px] md:mt-1'>
                <CiCalendarDate className='text-red-800'/></div>
                Nacimiento&nbsp;: <div className='gap-2 text-slate-300'>
                  15-02-1990</div>  
              </div>

              <div className="flex flex-row gap-2 font-normal text-slate-300">
                <div className='text-[22px] w-[22px] md:mt-1'>
                <FaGraduationCap className='text-red-800'/></div>
                Estudio&nbsp;: <div className='gap-2 text-slate-300'>
                  Master Javascript y Typescript en Udemy</div>
              </div>
            </div>

          </div>

          <div className='max-w-[800px]'>

            <h2 className='font-medium mt-14 mb-10 text-slate-300 text-[16px] sm:text-[19px] md:text-[22px]'>Hola! </h2>
            <p className='text-slate-300 font-normal text-[14px] sm:text-[16px] md:text-[19px]'>
              Mi nombre es Miguel Rivera, soy desarrollador frontend 
              con tres años de experiencia en javascript, react y typescript,
              diseño interfaces de usuario y hago mantenimiento de codigo.
            </p>
            <Button link='/Contact' text='Contratarme' />
          </div>

        </div>
        
      </div>
      </div>

    </section>
  )
}

export default About
