import React from "react";
import Heading from "../components/Heading";
import { TbLink } from "react-icons/tb";
import { RiGitRepositoryLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="mx-auto py-10 px-8 bg-gray-400">
      <Heading title="Projects" />

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/task-manager.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-blue-300 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Task Manager SaaS
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a SaaS web application for saving personal to-do
          lists. It manages state with zustand and is built with React,
          TypeScript, Tailwind, and Supabase for authentication and database
          management.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://task-manager-saa-s.vercel.app/">
                  Go to Task manager saas
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/Task-manager-SaaS">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/buscador.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-red-300 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Image search engine
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a web application for searching and downloading
          images, using the Unsplash API. It is built with React, HTML, and CSS.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://buscador-de-imagenes-phi.vercel.app/">
                  Go to Buscador de imagenes
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/Buscador-de-imagenes">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/calculator.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-red-300 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Calculator
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a web application for performing basic arithmetic
          operations, using the Math.js library. It is built with React, HTML,
          and CSS.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://calculadora-kappa-rust.vercel.app/">
                  Go to Calculadora
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/Calculadora">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/triqui.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-gray-500 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Triqui-game
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is the popular game called Tic-Tac-Toe. It contains a
          basic structure with the useState hook and a component division to
          facilitate code reuse. It is built with React, HTML, and CSS
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://triqui-game-smoky.vercel.app/">
                  Go to Triqui Game
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/Juego-Triqui">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/quiz.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-gray-200 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Quiz App
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a web application for creating quizzes in different
          areas, each with five randomly generated multiple-choice questions. It
          is built using React, HTML, and Tailwind.css.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://quiz-app-24.vercel.app/">
                  Go to Quiz App
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/Quiz-App">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/ima.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-gray-400 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Application for managing income and expenses
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a web application for recording income and expenses
          and thus obtaining a balance. It uses the useContext and useReducer
          hooks, and the Victory library allows you to use the graph. It is made
          with React, HTML, and tailwind.css.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://app-to-manage-expenses-and-income.vercel.app/">
                  Go to income and expense management
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/App-to-manage-expenses-and-income">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/online-store.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-yellow-600 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Online store page
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a website for an online musical instrument store. It
          uses the useContext hook to manage methods and variables globally. It
          is built with React, JavaScript, HTML, and tailwind.css.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://mgars-store.vercel.app/">
                  Go to mg-ars store
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/tienda-online">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/weather.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-blue-300 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Weather website
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a website where you can search for the weather in any
          city. It uses a weather API that provides latitude and longitude
          methods to obtain the Google Maps map. It is made with React and CSS
          Modules.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://a-weather-app.vercel.app/">
                  Go to weather-app
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/weather-app">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-2xl"
            width={300}
            height={300}
            src="/img/reminderBook.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-red-400 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Book reminder page
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono 
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a website where you can save book references. It uses
          localStorage and the useContext hook to manage methods and variables
          globally. It is built with React, CSS style objects, and CSS Modules.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://book-reminder.vercel.app/">
                  Go to book-reminder
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/book-reminder">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center relative group">
          <Image
            className="w-[100%] h-[100%] shadow-xl"
            width={300}
            height={300}
            src="/img/poke-fg.png"
            alt=""
          />
          <div
            className="bg-[#000000bd] absolute w-[100%] h-[100%]
                top-0 opacity-0 transition duraction-500 group-hover:opacity-100
                grid place-items-center text-green-400 text-[12px] sm:text-[15px] 
                md:text-[17px]"
          >
            Pokemon Page
          </div>
        </div>

        <div
          className="flex flex-col text-left w-[80%] px-3 py-3 text-[12px] sm:text-[15px] font-mono
            shadow-2xl shadow hover:shadow-xl text-teal-950"
        >
          This project is a Pokémon website that contains a list, search by
          name, pagination, and characteristics of each one with its image. It
          is made with next.js, react, graphQL, and CSS Modules.
          <div className="flex flex-col text-left mt-2 rounded shadow-sm">
            <div className="flex flex-row">
              <div>
                <TbLink className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://pokemon-fg.vercel.app/">
                  Go to pokemon-fg
                </Link>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <RiGitRepositoryLine className="text-red-800 text-[22px] pr-1" />
              </div>
              <div>
                <Link href="https://github.com/miguelriverasarmiento/poke-graphql">
                  Go to repository
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
