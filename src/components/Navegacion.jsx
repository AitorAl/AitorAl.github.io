
function Navegacion() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 z-50 shadow-lg">
      <span className="font-bold text-xl">Aitor</span>
      <div className="space-x-6">
        <a href="#presentacion">Presentación</a>
        <a href="#sobre">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contactos">Contacto</a>
      </div>
    </nav>
  )
}

export default Navegacion