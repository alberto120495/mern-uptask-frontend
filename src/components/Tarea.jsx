import { formatearFecha } from "../helpers/formatearFecha";
import useAdmin from "../hooks/useAdmin";
import useProyectos from "../hooks/useProyecto";

function Tarea({ tarea }) {
  const { descripcion, nombre, prioridad, fechaEntrega, _id, estado } = tarea;

  const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } =
    useProyectos();

  const admin = useAdmin();

  return (
    <div className="border-b p-5 flex justify-between items-center ">
      <div>
        <p className="mb-1 text-xl">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>

        <p className="mb-1 text-sm">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-1 text-gray-600">Prioridad:{prioridad}</p>
      </div>

      <div className="flex gap-2">
        {admin && (
          <button
            className="bg-indigo-600 text-white px-4 py-3 text-sm rounded-lg"
            onClick={() => handleModalEditarTarea(tarea)}
          >
            Editar
          </button>
        )}

        <button
          onClick={() => completarTarea(_id)}
          type="button"
          className={`${
            estado ? "bg-sky-600" : "bg-gray-600"
          } text-white px-4 py-3 text-sm rounded-lg`}
        >
          {estado ? "Completa" : "Pendiente"}
        </button>

        {admin && (
          <button
            type="button"
            className="bg-red-600 text-white px-4 py-3 text-sm rounded-lg"
            onClick={() => handleModalEliminarTarea(tarea)}
          >
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}

export default Tarea;
