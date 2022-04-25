import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useProyectos from "../hooks/useProyecto";
import Alerta from "./Alerta";
function FormularioProyecto() {
  const { alerta, mostrarAlerta, submitProyecto, proyecto } = useProyectos();

  const [proyectoForm, setProyectoForm] = useState({
    nombre: "",
    descripcion: "",
    fechaEntrega: "",
    cliente: "",
  });

  const [uid, setUid] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setUid(proyecto._id);
      setProyectoForm({
        nombre: proyecto.nombre,
        descripcion: proyecto.descripcion,
        fechaEntrega: proyecto.fechaEntrega?.split("T")[0],
        cliente: proyecto.cliente,
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(proyectoForm).includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    //Pasar datos al Provider
    await submitProyecto({ proyectoForm, uid });
    setProyectoForm({
      nombre: "",
      descripcion: "",
      fechaEntrega: "",
      cliente: "",
    });
    setUid(null);
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
            value={proyectoForm.nombre}
            onChange={(e) =>
              setProyectoForm({
                ...proyectoForm,
                [e.target.name]: e.target.value,
              })
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
            value={proyectoForm.descripcion}
            onChange={(e) =>
              setProyectoForm({
                ...proyectoForm,
                [e.target.name]: e.target.value,
              })
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
            value={proyectoForm.fechaEntrega}
            onChange={(e) =>
              setProyectoForm({
                ...proyectoForm,
                [e.target.name]: e.target.value,
              })
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
            value={proyectoForm.cliente}
            onChange={(e) =>
              setProyectoForm({
                ...proyectoForm,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input
          type="submit"
          value={`${uid ? "Guardar Cambios" : "Crear Proyecto"}`}
          className="bg-sky-600 p-3 w-full text-white text-sm uppercase rounded-lg shadow-md cursor-pointer hover:bg-sky-700 transition-colors"
        />
      </form>
    </>
  );
}

export default FormularioProyecto;
