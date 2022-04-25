import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormularioProyecto from "../components/FormularioProyecto";
import Spinner from "../components/Spinner";
import useProyectos from "../hooks/useProyecto";
function EditarProyecto() {
  const { id } = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();
  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  const { nombre } = proyecto;
  return cargando ? (
    <Spinner />
  ) : (
    <>
      <h1 className="text-4xl font-semibold">{nombre}</h1>
      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
    </>
  );
}

export default EditarProyecto;
