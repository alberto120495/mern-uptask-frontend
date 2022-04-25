import React from "react";
import PreviewProyecto from "../components/PreviewProyecto";
import useProyectos from "../hooks/useProyecto";
function Proyectos() {
  const { proyectos } = useProyectos();
  return (
    <>
      <h1 className="text-4xl font-semibold">Proyectos</h1>

      <div className="bg-white font-medium shadow mt-10 rounded-md p-5">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyecto proyecto={proyecto} key={proyecto.id} />
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
