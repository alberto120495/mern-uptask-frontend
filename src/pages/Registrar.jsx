import { Link } from "react-router-dom";

function Registrar() {
  return (
    <>
      <h1 className="text-sky-600 font-medium text-5xl capitalize">
        Crea tu cuenta y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>

      <form className="my-10 bg-white shadow-md rounded-md p-5">
        <div className="my-2">
          <label
            htmlFor="nombre"
            className="text-gray-600 block font-medium text-lg mb-2"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            className="w-full px-3 py-2 text-gray-700 border rounded-xl outline-none focus:border-sky-600 focus:shadow-outline"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="email"
            className="text-gray-600 block font-medium text-lg mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            className="w-full px-3 py-2 text-gray-700 border rounded-xl outline-none focus:border-sky-600 focus:shadow-outline"
          />
        </div>

        <div className="my-5">
          <label
            htmlFor="password"
            className="text-gray-600 block font-medium text-lg mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            className="w-full px-3 py-2 text-gray-700 border rounded-xl outline-none focus:border-sky-600 focus:shadow-outline"
          />
        </div>

        <div className="my-5">
          <label
            htmlFor="password2"
            className="text-gray-600 block font-medium text-lg mb-2"
          >
            Repetir password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="Repetir contraseña"
            className="w-full px-3 py-2 text-gray-700 border rounded-xl outline-none focus:border-sky-600 focus:shadow-outline"
          />
        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="bg-sky-700 w-full text-white p-2 mb-2 rounded-md hover:bg-sky-800 cursor-pointer transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link to="/" className="block text-center text-slate-700 text-sm ">
          ¿Ya tienes una cuenta?{" "}
          <span className="text-sky-600">Inicia Sesion</span>
        </Link>
        <Link
          to="/olvide-password"
          className="block text-center text-slate-700 text-sm mt-2 md:mt-0"
        >
          Olvide mi contraseña
        </Link>
      </nav>
    </>
  );
}

export default Registrar;
