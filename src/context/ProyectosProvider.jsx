import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const ProyectosContext = createContext();

function ProyectosProvider({ children }) {
  const [proyectos, setProyectos] = useState([]);
  return (
    <ProyectosContext.Provider value={{ proyectos }}>
      {children}
    </ProyectosContext.Provider>
  );
}

export { ProyectosProvider };
export default ProyectosContext;
