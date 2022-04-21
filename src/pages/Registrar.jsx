import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";
function Registrar() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
    password2: "",
  });
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email, password } = user;

    if (Object.values(user).includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    if (user.password !== user.password2) {
      setAlert({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    if (user.password.length < 6) {
      setAlert({
        msg: "La contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }

    setAlert({});
    //Crear usuario en la API
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuarios`,
        {
          nombre,
          email,
          password,
        }
      );
      setAlert({
        msg: data.msg,
        error: false,
      });
      setUser({
        nombre: "",
        email: "",
        password: "",
        password2: "",
      });
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <>
      <h1 className="text-sky-600 font-medium text-5xl capitalize">
        Crea tu cuenta y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      {msg && <Alerta alerta={alert} />}
      <form
        className="my-10 bg-white shadow-md rounded-md p-5"
        onSubmit={handleSubmit}
      >
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
            value={user.nombre}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
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
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
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
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
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
            value={user.password2}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
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
