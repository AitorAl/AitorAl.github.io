import { useEffect, useState } from "react";

function Proyectos() {
  const [repos, setRepos] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedTech, setSelectedTech] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    fetch("/repos.json")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setFiltered(data);
      });
  }, []);

  const filteredByType =
    selectedType === "Todos"
      ? repos
      : repos.filter((repo) =>
          selectedType === "private" ? repo.private : !repo.private
        );

  const technologies = [
    "Todos",
    ...new Set(
      filteredByType.map((repo) => repo.language).filter(Boolean)
    ),
  ];

  useEffect(() => {
    let result = filteredByType;

    if (selectedTech !== "Todos") {
      result = result.filter((repo) => repo.language === selectedTech);
    }

    setFiltered(result);
  }, [selectedTech, selectedType, repos]);

  useEffect(() => {
    if (
      selectedTech !== "Todos" &&
      !filteredByType.some((repo) => repo.language === selectedTech)
    ) {
      setSelectedTech("Todos");
    }
  }, [selectedType, repos]);

  return (
    <section
      id="proyectos"
      className="min-h-screen pt-24 px-6 md:px-16 bg-gray-200 dark:bg-gray-900 text-black dark:text-white"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Proyectos</h1>

      <div className="flex gap-4 flex-wrap mb-6 items-center">
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className="px-4 py-2 rounded-lg border bg-white text-black"
        >
          {technologies.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
            </option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="px-4 py-2 rounded-lg border bg-white text-black"
        >
          <option value="Todos">Todos</option>
          <option value="public">Públicos</option>
          <option value="private">Privados</option>
        </select>

        <button
          onClick={() => {
            setSelectedTech("Todos");
            setSelectedType("Todos");
          }}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Limpiar
        </button>
      </div>

      <p className="mb-6 text-sm text-gray-500">
        {filtered.length} proyectos encontrados
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((repo) => (
          <div
            key={repo.id}
            onClick={() => setSelectedRepo(repo)}
            className="cursor-pointer p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold">{repo.name}</h2>
            <p className="text-sm text-gray-500">
              {repo.language || "Sin tecnología"}
            </p>
            {repo.private && (
              <span className="text-xs text-red-500">Privado</span>
            )}
          </div>
        ))}
      </div>

      {selectedRepo && (
        <div
          onClick={() => setSelectedRepo(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl max-w-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-2">
              {selectedRepo.name}
            </h2>

            <p className="mb-2">
              {selectedRepo.description || "Sin descripción"}
            </p>

            <p className="mb-4 text-sm text-gray-500">
              Tecnología:{" "}
              {selectedRepo.language || "No especificada"}
            </p>

            {!selectedRepo.private && (
              <a
                href={selectedRepo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Ver repositorio
              </a>
            )}

            <button
              onClick={() => setSelectedRepo(null)}
              className="mt-4 block bg-black text-white px-4 py-2 rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Proyectos;