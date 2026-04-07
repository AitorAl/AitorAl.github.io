import { createContext, useState, useEffect } from 'react'

const ContextoTema = createContext(null)

function ThemeManager({ children }) {
  const [tema, setTema] = useState('dark')

  const cambiarTema = () => {
    setTema(tema === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    const htmlTag = document.documentElement
    if (tema === 'dark') htmlTag.classList.add('dark')
    else htmlTag.classList.remove('dark')
  }, [tema])

  return (
    <ContextoTema.Provider value={{ tema, cambiarTema }}>
      {children}
    </ContextoTema.Provider>
  )
}

export { ContextoTema, ThemeManager }