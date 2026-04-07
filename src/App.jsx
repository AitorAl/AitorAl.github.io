import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { ThemeManager } from './components/ThemeManager.jsx'


import Gestor from './components/Gestor.jsx'

function App() {
  return (
        <ThemeManager>
          <Gestor />
        </ThemeManager>

  )
}

export default App
