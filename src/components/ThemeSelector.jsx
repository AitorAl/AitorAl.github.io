import { ContextoTema } from './ThemeManager.jsx'
import { useContext } from 'react'

function ThemeSelector() {
  const { tema, cambiarTema } = useContext(ContextoTema)

  return (
<button
  onClick={cambiarTema}
  className="px-3 py-1 rounded text-sm bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:opacity-80"
>
  {tema === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
</button>
  )
}

export default ThemeSelector