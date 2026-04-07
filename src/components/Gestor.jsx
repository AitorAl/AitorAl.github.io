import Navegacion from './Navegacion.jsx'
import Presentacion from './Presentacion.jsx'
import Sobre from './Sobre.jsx'
import Proyectos from './Proyectos.jsx'
import Contactos from './Contactos.jsx'
import '../App.css'

function Gestor() {
  return (
    <div className="scroll-smooth bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navegacion />
      <Presentacion />
      <Sobre />
      <Proyectos />
      <Contactos />
    </div>
  )
}

export default Gestor