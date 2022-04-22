import FormularioProyecto from "../components/FormularioProyecto";

function NuevoProyecto() {
  return (
    <>
      <h1 className="text-4xl font-semibold">Crear Proyecto</h1>
      <div className="mt-10 flex justify-center">
        <FormularioProyecto />
      </div>
    </>
  );
}

export default NuevoProyecto;
