import Head from 'next/head'
import Navbar from '../components/Navbar'
import ImgPhoto from './Photo'
import About from './About'
import Skills from '../components/Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Head>
        <title>Miguel Rivera | Portafolio</title>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      
      <header>
        <Navbar toggleSidebar={toggleSidebar}/>
      </header>

      <main>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <ImgPhoto />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div> 
  
  )
}
