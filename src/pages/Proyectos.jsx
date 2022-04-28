import { useEffect } from "react";
import Alerta from "../components/Alerta";
import PreviewProyecto from "../components/PreviewProyecto";
import useProyectos from "../hooks/useProyecto";
import io from "socket.io-client";

let socket;
function Proyectos() {
  const { proyectos, alerta } = useProyectos();

  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL);
    socket.emit("prueba", "Alberto");

    socket.on("respuesta", (nombre) => {
      console.log("desde el frontend", nombre);
    });
  });

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-4xl font-semibold">Proyectos</h1>

      {msg && <Alerta alerta={alerta} />}

      <div className="bg-white font-medium shadow mt-10 rounded-md p-5">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyecto proyecto={proyecto} key={proyecto._id} />
          ))
        ) : (
          <p className=" text-center text-gray-600 uppercase">
            No hay proyectos aún
          </p>
        )}
      </div>
    </>
  );
}

export default Proyectos;
