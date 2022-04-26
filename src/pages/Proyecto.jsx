import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ModalFormularioTarea from "../components/ModalFormularioTarea";
import Spinner from "../components/Spinner";
import useProyectos from "../hooks/useProyecto";

function Proyecto() {
  const { id } = useParams();
  const { obtenerProyecto, proyecto, cargando, handleModalTarea } =
    useProyectos();

  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  const { nombre } = proyecto;
  if (cargando) return <Spinner />;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">{nombre}</h1>
        <div className="flex  items-center gap-2 text-gray-400 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <Link
            className="uppercase font-semibold"
            to={`/proyectos/editar/${id}`}
          >
            Editar
          </Link>
        </div>
      </div>
      <button
        type="button"
        className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-medium text-white bg-sky-400 hover:bg-sky-500 mt-5 flex gap-2 items-center justify-center"
        onClick={handleModalTarea}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
        Nueva tarea
      </button>
      <ModalFormularioTarea />
    </>
  );
}

export default Proyecto;
