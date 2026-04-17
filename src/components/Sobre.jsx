function Sobre() {
  return (
    <section
      id="sobre"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-300">
            Intereses
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Soy una persona apasionada por la tecnología y el desarrollo web.
          </p>
        </div>

        <div className="space-y-6">
          
          <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-3 text-black dark:text-white">
            Skills
          </h2>
            <ul className="flex flex-wrap gap-2">
              <li className="bg-black text-white px-3 py-1 rounded-full text-sm">React</li>
              <li className="bg-black text-white px-3 py-1 rounded-full text-sm">JavaScript</li>
              <li className="bg-black text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
              <li className="bg-black text-white px-3 py-1 rounded-full text-sm">Node.js</li>
              <li className="bg-black text-white px-3 py-1 rounded-full text-sm">Visual Studio Code</li>
              <li className="bg-black text-white px-3 py-1 rounded-full text-sm">PostgreSQL</li>
            </ul>
          </div>

          {/* Formación */}
          <div className="bg-gray-300 dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-3">Formación</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Grado en Ingeniería Informática de Gestión y Sistemas de Información
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Sobre