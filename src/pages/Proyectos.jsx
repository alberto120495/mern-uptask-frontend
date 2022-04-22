import React from "react";
import useProyectos from "../hooks/useProyecto";
function Proyectos() {
  const { proyectos } = useProyectos();
  return (
    <>
      <h1 className="text-4xl font-semibold">Proyectos</h1>
    </>
  );
}

export default Proyectos;
