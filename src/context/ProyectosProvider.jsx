import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const ProyectosContext = createContext();

function ProyectosProvider({ children }) {
  const [proyectos, setProyectos] = useState([]);
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 3000);
  };

  const submitProyecto = async (proyecto) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await clienteAxios.post("/proyectos", proyecto, config);
      setAlerta({
        msg: "Proyecto creado correctamente",
        error: false,
      });
      setTimeout(() => {
        setAlerta({});
        navigate("/proyectos");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProyectosContext.Provider
      value={{ proyectos, mostrarAlerta, alerta, submitProyecto }}
    >
      {children}
    </ProyectosContext.Provider>
  );
}

export { ProyectosProvider };
export default ProyectosContext;
