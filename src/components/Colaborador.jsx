import useProyectos from "../hooks/useProyecto";

function Colaborador({ colaborador }) {
  const { nombre, email } = colaborador;
  const { handleModalEliminarColaborador } = useProyectos();
  return (
    <div className="border-b p-5 flex justify-between items-center ">
      <div>
        <p className="mb-1 text-xl">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 ">{email}</p>
      </div>

      <button
        type="button"
        className="bg-red-600 text-white px-4 py-3 text-sm rounded-lg"
        onClick={() => handleModalEliminarColaborador(colaborador)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default Colaborador;
