function Contactos() {
  return (
    <section
      id="contactos"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Contacto
      </h1>

      <div className="flex items-center gap-3">
        <p className="text-1xl md:text-3xl font-semibold dark:text-gray-300">
          Correo:
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          aitoralvarezcu@gmail.com
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-1xl md:text-3xl font-semibold dark:text-gray-300">
          GitHub:
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          https://github.com/AitorAl
        </p>
      </div>
    </section>
  );
}

export default Contactos;