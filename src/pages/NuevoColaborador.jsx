import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormularioColaborador from "../components/FormularioColaborador";
import Spinner from "../components/Spinner";
import useProyectos from "../hooks/useProyecto";
function NuevoColaborador() {
  const { obtenerProyecto, proyecto, cargando } = useProyectos();
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
    </>
  );
}

export default NuevoColaborador;
