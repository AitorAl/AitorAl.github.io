
function Presentacion() {
  return (
    <section
      id="presentacion"
      className="min-h-screen flex items-center pt-16 px-6 md:px-16 bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-1 text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black dark:text-gray-300">
          Aitor Álvarez Cuenca
        </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
           breve descripción
          </p>
        </div>

        <div className="flex-1">
          <div className="w-full h-64 md:h-80 bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/tu-imagen.jpg"
              alt="Imagen de presentación"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Presentacion