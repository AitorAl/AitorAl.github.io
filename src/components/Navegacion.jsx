import ThemeSelector from './ThemeSelector.jsx'

function Navegacion() {
  return (
<nav className="fixed top-0 w-full bg-white dark:bg-gray-900 text-black dark:text-white flex justify-between items-center px-6 py-4 z-50 shadow-lg">
  <span className="font-bold text-xl">Aitor</span>

  {/* escritorio */}
  <div className="hidden md:flex gap-6 items-center">
    <a href="#presentacion">Inicio</a>
    <a href="#sobre">Sobre mí</a>
    <a href="#proyectos">Proyectos</a>
    <a href="#contactos">Contacto</a>
    <ThemeSelector />
  </div>

  {/* móvil */}
  <div className="flex md:hidden gap-3 text-sm items-center">
    <a href="#presentacion">Ini</a>
    <a href="#sobre">Sobre</a>
    <a href="#proyectos">Proy</a>
    <a href="#contactos">Cont</a>
    <ThemeSelector />
  </div>
</nav>
  )
}

export default Navegacion