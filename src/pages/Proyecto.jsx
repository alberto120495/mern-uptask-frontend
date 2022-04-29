import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Colaborador from "../components/Colaborador";
import ModalEliminarColaborador from "../components/ModalEliminarColaborador";
import ModalEliminarTarea from "../components/ModalEliminarTarea";
import ModalFormularioTarea from "../components/ModalFormularioTarea";
import Spinner from "../components/Spinner";
import Tarea from "../components/Tarea";
import useAdmin from "../hooks/useAdmin";
import useProyectos from "../hooks/useProyecto";
import io from "socket.io-client";

let socket;

function Proyecto() {
  const { id } = useParams();
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    handleModalTarea,
    submitTareasProyecto,
    eliminarTareaProyecto,
    actualizarTareaProyecto,
    cambiarEstadoTarea,
  } = useProyectos();

  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("abrir proyecto", id);
  }, []);

  useEffect(() => {
    socket.on("tarea agregada", (tareaNueva) => {
      if (tareaNueva.proyecto === proyecto._id) {
        submitTareasProyecto(tareaNueva);
      }
    });
    socket.on("tarea eliminada", (tareaEliminada) => {
      if (tareaEliminada.proyecto === proyecto._id) {
        eliminarTareaProyecto(tareaEliminada);
      }
    });
    socket.on("tarea actualizada", (tareaActualizada) => {
      if (tareaActualizada.proyecto._id === proyecto._id) {
        actualizarTareaProyecto(tareaActualizada);
      }
    });
    socket.on("nuevo estado", (nuevoEstadoTarea) => {
      if (nuevoEstadoTarea.proyecto._id === proyecto._id) {
        cambiarEstadoTarea(nuevoEstadoTarea);
      }
    });
  });

  const admin = useAdmin();

  const { nombre } = proyecto;

  if (cargando) return <Spinner />;
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">{nombre}</h1>
        {admin && (
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
        )}
      </div>

      {admin && (
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
      )}

      <p className="font-bold text-xl mt-10">Tareas del proyecto</p>

      <div className="bg-white shadow-md mt-10 rounded-lg">
        {proyecto.tareas?.length ? (
          proyecto.tareas?.map((tarea) => (
            <Tarea key={tarea._id} tarea={tarea} />
          ))
        ) : (
          <p className="text-center my-5 p-10">
            No hay tareas en este proyecto
          </p>
        )}
      </div>

      {admin && (
        <>
          <div className="flex items-center justify-between mt-10 ">
            <p className="font-bold text-xl ">Colaboradores </p>
            <Link
              className="text-gray-400 uppercase font-medium hover:text-black"
              to={`/proyectos/nuevo-colaborador/${proyecto._id}`}
            >
              Añadir
            </Link>
          </div>

          <div className="bg-white shadow-md mt-10 rounded-lg">
            {proyecto.colaboradores?.length ? (
              proyecto.colaboradores?.map((colaborador) => (
                <Colaborador key={colaborador._id} colaborador={colaborador} />
              ))
            ) : (
              <p className="text-center my-5 p-10">
                No hay colaboradores en este proyecto
              </p>
            )}
          </div>
        </>
      )}

      <ModalFormularioTarea />
      <ModalEliminarTarea />
      <ModalEliminarColaborador />
    </>
  );
}

export default Proyecto;
