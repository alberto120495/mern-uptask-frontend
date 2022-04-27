import { useState } from "react";
import useProyectos from "../hooks/useProyecto";
import Alerta from "./Alerta";

function FormularioColaborador() {
  const [email, setEmail] = useState("");
  const { alerta, mostrarAlerta, submitColaborador } = useProyectos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      mostrarAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
    }
    submitColaborador(email);
  };

  const { msg } = alerta;
  return (
    <form
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta={alerta} />}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="text-gray-700 uppercase font-medium text-sm"
        >
          Email Colaborador
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="w-full p-2 outline-none border-b mt-5 placeholder-gray-400 "
          placeholder="Email del Colaborador"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Buscar Colaborador"
        className="w-full p-3 bg-sky-600 hover:bg-sky-700 cursor-pointer transition-colors rounded-md text-white text-sm uppercase"
      />
    </form>
  );
}

export default FormularioColaborador;
