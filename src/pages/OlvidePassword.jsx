import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

function OlvidePassword() {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlerta({
        msg: "El email es obligatorio",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, {
        email,
      });
      setAlerta({
        msg: data.msg,
        error: false,
      });
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
        Recupera tu acceso y no pierdas tus{" "}
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

        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-sky-700 w-full text-white p-2 mb-2 mt-5 rounded-md hover:bg-sky-800 cursor-pointer transition-colors"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link to="/" className="block text-center text-slate-700 text-sm ">
          ¿Ya tienes una cuenta?{" "}
          <span className="text-sky-600 md:block">Inicia Sesion</span>
        </Link>
        <Link
          to="/registrar"
          className="block text-center text-slate-700 text-sm "
        >
          ¿No tienes una cuenta?{" "}
          <span className="text-sky-600 md:block ">Registrate</span>
        </Link>
      </nav>
    </>
  );
}

export default OlvidePassword;
