import FormularioColaborador from "../components/FormularioColaborador";

function NuevoColaborador() {
  return (
    <>
      <h1 className="text-4xl font-semibold">Añadir Colaborador(a)</h1>
      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>
    </>
  );
}

export default NuevoColaborador;
