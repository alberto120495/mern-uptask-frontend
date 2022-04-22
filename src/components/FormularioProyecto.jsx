import { useState } from "react";
import useProyectos from "../hooks/useProyecto";
import Alerta from "./Alerta";

function FormularioProyecto() {
  const { alerta, mostrarAlerta, submitProyecto } = useProyectos();
  const [proyecto, setProyecto] = useState({
    nombre: "",
    descripcion: "",
    fechaEntrega: "",
    cliente: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(proyecto).includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    //Pasar datos al Provider
    await submitProyecto(proyecto);
    setProyecto({
      nombre: "",
      descripcion: "",
      fechaEntrega: "",
      cliente: "",
    });
  };
  const { msg } = alerta;
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow-md"
      >
        {msg && <Alerta alerta={alerta} />}

        <div className="mb-7">
          <label
            htmlFor="nombre"
            className="text-gray-700 font-bold text-sm uppercase"
          >
            Nombre Proyecto
          </label>
          <input
            className="border-b w-full border-gray-400 p-1 mt-2 outline-none"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre del Proyecto"
            value={proyecto.nombre}
            onChange={(e) =>
              setProyecto({ ...proyecto, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="descripcion"
            className="text-gray-700 font-bold text-sm uppercase"
          >
            Descripcion
          </label>
          <textarea
            className="border w-full border-gray-400 p-1 mt-2 outline-none"
            id="descripcion"
            name="descripcion"
            placeholder="Descripcion del Proyecto"
            value={proyecto.descripcion}
            onChange={(e) =>
              setProyecto({ ...proyecto, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="fecha-entrega"
            className="text-gray-700 font-bold text-sm uppercase"
          >
            Fecha de Entrega
          </label>
          <input
            className="border-b w-full border-gray-400 p-1 mt-2 outline-none"
            type="date"
            id="fecha-entrega"
            name="fechaEntrega"
            value={proyecto.fechaEntrega}
            onChange={(e) =>
              setProyecto({ ...proyecto, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="cliente"
            className="text-gray-700 font-bold text-sm uppercase"
          >
            Nombre del Cliente
          </label>
          <input
            className="border-b w-full border-gray-400 p-1 mt-2 outline-none"
            type="text"
            id="cliente"
            name="cliente"
            placeholder="Nombre del Cliente"
            value={proyecto.cliente}
            onChange={(e) =>
              setProyecto({ ...proyecto, [e.target.name]: e.target.value })
            }
          />
        </div>
        <input
          type="submit"
          value="Crear Proyecto"
          className="bg-sky-600 p-3 w-full text-white text-sm uppercase rounded-lg shadow-md cursor-pointer hover:bg-sky-700 transition-colors"
        />
      </form>
    </>
  );
}

export default FormularioProyecto;
