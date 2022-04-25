import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import useProyectos from "../hooks/useProyecto";
function Proyecto() {
  const { id } = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();
  useEffect(() => {
    obtenerProyecto(id);
  }, []);

  const { nombre } = proyecto;
  return cargando ? (
    <Spinner />
  ) : (
    <div>
      <h1 className="text-4xl font-semibold">{nombre}</h1>
    </div>
  );
}

export default Proyecto;
