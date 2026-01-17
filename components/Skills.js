import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="mx-auto pt-10 pb-20 px-8 bg-gray-300">
      <Heading title="Habilidades" />

      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div
          className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 pt-6 
            bg-neutral-500 text-green-300"
        >
          <Image
            width={300}
            height={300}
            className="w-[150px]"
            src="/img/js.png"
            alt=""
          />
          Javascript
          <div className="grid grid-cols-3 place-items-center text-gray-700 text-[12px] font-medium">
            <div className="bg-gray-700 h-[4px] w-[28px] col-span-2"></div>
            <div>&nbsp;80%</div>
          </div>
        </div>

        <div
          className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 pt-6  
            bg-neutral-500 text-green-300"
        >
          <Image
            width={300}
            height={300}
            className="w-[150px]"
            src="/img/react.png"
            alt=""
          />
          React
          <div className="grid grid-cols-3 place-items-center text-gray-700 text-[12px] font-medium">
            <div className="bg-gray-700 h-[4px] w-[35px] col-span-2"></div>
            <div>&nbsp;90%</div>
          </div>
        </div>

        <div
          className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 pt-6 
            bg-neutral-500 text-green-300"
        >
          <Image
            width={300}
            height={300}
            className="w-[150px]"
            src="/img/typescript.png"
            alt=""
          />
          Typescript
          <div className="grid grid-cols-3 place-items-center text-gray-700 text-[12px] font-medium">
            <div className="bg-gray-700 h-[4px] w-[24px] col-span-2"></div>
            <div>&nbsp;60%</div>
          </div>
        </div>

        <div
          className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 pt-6 
            bg-neutral-500 text-green-300"
        >
          <Image
            width={300}
            height={300}
            className="w-[150px]"
            src="/img/html.png"
            alt=""
          />
          Html
          <div className="grid grid-cols-3 place-items-center text-gray-700 text-[12px] font-medium">
            <div className="bg-gray-700 h-[4px] w-[35px] col-span-2"></div>
            <div>&nbsp;90%</div>
          </div>
        </div>

        <div
          className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 pt-6 
            bg-neutral-500 text-green-300"
        >
          <Image
            width={300}
            height={300}
            className="w-[150px]"
            src="/img/css.png"
            alt=""
          />
          Css
          <div className="grid grid-cols-3 place-items-center text-gray-700 text-[12px] font-medium">
            <div className="bg-gray-700 h-[4px] w-[35px] col-span-2"></div>
            <div>&nbsp;90%</div>
          </div>
        </div>

        <div
          className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-8 pt-6 
            bg-neutral-500 text-green-300"
        >
          <Image
            width={300}
            height={300}
            className="w-[150px]"
            src="/img/nextjs-icon.png"
            alt=""
          />
          Next.js
          <div className="grid grid-cols-3 place-items-center text-gray-700 text-[12px] font-medium">
            <div className="bg-gray-700 h-[4px] w-[24px] col-span-2"></div>
            <div>&nbsp;60%</div>
          </div>
        </div>

        <div
          className="shadow-lg flex flex-col items-center w-[150px] h-[200px] gap-4 px-5 pt-0 
            bg-neutral-500 text-green-300"
        >
          <Image
            width={300}
            height={300}
            className="w-[150px] mx-0 my-0"
            src="/img/tailwindcss.png"
            alt=""
          />
          Tailwind CSS
          <div className="grid grid-cols-3 place-items-center text-gray-700 text-[12px] font-medium">
            <div className="bg-gray-700 h-[4px] w-[28px] col-span-2"></div>
            <div>&nbsp;80%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
