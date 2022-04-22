import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between items-center">
        <h2 className="text-4xl text-sky-600 text-center">UpTask</h2>
        <input
          type="search"
          placeholder="Buscar Proyecto"
          className="rounded-lg lg:w-96 block p-2 border outline-none"
        />
        <div className="flex items-center gap-4">
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
