import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormularioColaborador from "../components/FormularioColaborador";
import Spinner from "../components/Spinner";
import useProyectos from "../hooks/useProyecto";
function NuevoColaborador() {
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    colaborador,
    agregarColaborador,
  } = useProyectos();
  const { id } = useParams();
  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  if (cargando) return <Spinner />;
  return (
    <>
      <h1 className="text-4xl font-semibold">
        Añadir Colaborador(a) al proyecto : {proyecto?.nombre}
      </h1>
      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>
      {cargando ? (
        <Spinner />
      ) : (
        colaborador?._id && (
          <div className="flex justify-center mt-10">
            <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
              <h2 className="text-center mb-10 text-2xl font-medium">
                Resultado:
              </h2>
              <div className="flex justify-between items-center">
                <p>{colaborador.nombre}</p>
                <button
                  onClick={() =>
                    agregarColaborador({ email: colaborador.email })
                  }
                  type="button"
                  className="bg-slate-500 px-5 py-2 rounded-lg  text-white font-normal"
                >
                  Agregar al Proyecto
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default NuevoColaborador;
