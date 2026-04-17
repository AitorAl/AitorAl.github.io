function Contactos() {
  return (
    <section
      id="contactos"
      className="min-h-screen flex flex-col items-center justify-start pt-32 text-center px-4 bg-white dark:bg-gray-900 text-black dark:text-white"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-10">
        Métodos de contacto
      </h1>

      <div className="space-y-6">

        {/* Email */}
        <div className="flex items-center gap-3">
          <p className="text-xl md:text-2xl font-semibold dark:text-gray-300">
            Correo:
          </p>
          <a
            href="mailto:aitoralvarezcu@gmail.com"
            className="text-lg md:text-xl text-blue-500 hover:underline"
          >
            aitoralvarezcu@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3">
          <p className="text-xl md:text-2xl font-semibold dark:text-gray-300">
            GitHub:
          </p>
          <a
            href="https://github.com/AitorAl"
            target="_blank"
            rel="noreferrer"
            className="text-lg md:text-xl text-blue-500 hover:underline"
          >
            github.com/AitorAl
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <p className="text-xl md:text-2xl font-semibold dark:text-gray-300">
            LinkedIn:
          </p>
          <a
            href="https://linkedin.com/in/aitor-álvarez-002664379"
            target="_blank"
            rel="noreferrer"
            className="text-lg md:text-xl text-blue-500 hover:underline"
          >
            linkedin.com/in/aitor-álvarez
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contactos;