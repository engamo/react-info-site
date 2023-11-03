import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <MainContent darkMode={darkMode} />
      </div>
  )
}


