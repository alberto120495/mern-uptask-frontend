import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
function Sidebar() {
  const { auth } = useAuth();
  return (
    <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10 border-r">
      <p className="text-xl font-medium">
        ¡Hola!{" "}
        <span className="text-sky-600 font-semibold"> {auth.nombre}</span>
      </p>
      <Link
        to="crear-proyecto"
        className="bg-sky-600 p-3 text-white rounded-md block text-center mt-5 "
      >
        Nuevo Proyecto
      </Link>
    </aside>
  );
}

export default Sidebar;
