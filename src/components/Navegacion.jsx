import { useEffect, useState } from "react"
import ThemeSelector from './ThemeSelector.jsx'

function Navegacion() {
  const [active, setActive] = useState("presentacion")

  useEffect(() => {
    const sections = ["presentacion", "sobre", "proyectos", "contactos"]

    const handleScroll = () => {
      let current = "presentacion"

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop - 100
          if (window.scrollY >= top) {
            current = id
          }
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (id) =>
    `px-3 py-1 rounded-lg transition ${
      active === id
        ? "bg-purple-200 text-purple-900 dark:bg-purple-700 dark:text-white"
        : "hover:text-purple-500"
    }`

  return (
    <nav className="fixed top-0 w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex items-center px-6 py-2 z-50 shadow-lg">      

      <div className="hidden md:flex gap-4 items-center">
        <a href="#presentacion" className={linkClass("presentacion")}>
          Presentación
        </a>
        <a href="#sobre" className={linkClass("sobre")}>
          Sobre mí
        </a>
        <a href="#proyectos" className={linkClass("proyectos")}>
          Proyectos
        </a>
        <a href="#contactos" className={linkClass("contactos")}>
          Contacto
        </a>
          <ThemeSelector />
      </div>

    </nav>
  )
}

export default Navegacion