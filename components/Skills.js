import React from 'react'
import Heading from './Heading'

const Skills = () => {
  return (
    <section className="mx-auto pt-10 pb-20 px-8 bg-gray-300">

        <Heading title="Habilidades"/>

        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5">

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 py-10 
            bg-neutral-500 text-green-300">
            <img className="w-[150px]" src="/img/js.png" alt=""/>
                Javascript
            </div>

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 py-10 
            bg-neutral-500 text-green-300">
            <img className="w-[150px]" src="/img/react.png" alt=""/>
                React
            </div>

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 py-10 
            bg-neutral-500 text-green-300">
            <img className="w-[150px]" src="/img/typescript.png" alt=""/>
                Typescript
            </div>

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 py-10 
            bg-neutral-500 text-green-300">
            <img className="w-[150px]" src="/img/html.png" alt=""/>
                Html
            </div>

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 py-10 
            bg-neutral-500 text-green-300">
            <img className="w-[150px]" src="/img/css.png" alt=""/>
                Css
            </div>

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 py-10 
            bg-neutral-500 text-green-300">
            <img className="w-[150px]" src="/img/nextjs-icon.png" alt=""/>
                Next.js
            </div>

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 py-10 
            bg-neutral-500 text-green-300">
            <img className="w-[150px]" src="/img/graphql.png" alt=""/>
                GraphQL
            </div>

            <div className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-5 py-6 
            bg-neutral-500 text-green-300">
            <img className="w-[150px] mx-0 my-0" src="/img/tailwindcss.png" alt=""/>
                Tailwind CSS
            </div>

        </div>

    </section>
  )
}

export default Skills
