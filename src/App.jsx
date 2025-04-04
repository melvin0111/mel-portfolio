import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { LoadingScreen } from './components/LoadingScreen'
import './App.css'
import './index.css' 
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

// npm run dev

function App() {
  const [isloaded, setLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return <>
    {!isloaded && <LoadingScreen onComplete={() => setLoading(true)} />}{""}
    <div className= {`min-h-screen transition-opacity duration-700 ${isloaded ? 'opacity-100' : 'opacity-0'} 
    bg-black text-gray-100`}> 
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div> </>
}

export default App
