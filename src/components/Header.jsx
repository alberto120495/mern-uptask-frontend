import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between items-center">
        <h2 className="text-4xl text-sky-600 text-center mb-5 md:b-0">
          UpTask
        </h2>
        <div className="flex justify-between  items-center gap-4">
          <button
            type="button"
            className="tex-sm border-sky-600 border rounded-md p-3  hover:bg-sky-600 hover:text-white transition-colors"
          >
            Buscar Proyecto
          </button>
          <Link to="/proyectos" className="text-sky-600 hover:underline ">
            Proyectos
          </Link>

          <button
            type="button"
            className="text-white tex-sm bg-sky-600 rounded-md p-3 font-medium"
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
