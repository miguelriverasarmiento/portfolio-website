import React from 'react'
import Heading from '../components/Heading'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import Link from 'next/link'


const Contact = () => {
  return (
    <div className="mx-auto pt-10 pb-20 px-8 bg-gray-400">
        <Heading title="Contacto"/>

        <div className='flex flex-col text-left mt-2 rounded text-left shadow-sm ml-1 sm:ml-5 md:ml-10
        text-[12px] sm:text-[15px] md:text-[17px]'>
          <div className="flex flex-row">
              <div><FaLinkedin className='text-red-800 text-[22px] mr-4'/></div>
              <div><Link href="https://www.linkedin.com/in/miguel-rivera-5679a1232/">
              <b>Linkedin</b>: Miguel Rivera
                </Link>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
