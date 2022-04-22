import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

function Login() {
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      setAlerta({});
      localStorage.setItem("token", data.token);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-sky-600 font-medium text-5xl capitalize">
        Inicia sesion y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form
        className="my-10 bg-white shadow-md rounded-md p-5"
        onSubmit={handleSubmit}
      >
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesion"
          className="bg-sky-700 w-full text-white p-2 mb-2 rounded-md hover:bg-sky-800 cursor-pointer transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to="/registrar"
          className="block text-center text-slate-700 text-sm "
        >
          ¿No tienes una cuenta?{" "}
          <span className="text-sky-600">Registrate</span>
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

export default Login;
