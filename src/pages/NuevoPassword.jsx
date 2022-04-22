import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

function NuevoPassword() {
  const [alerta, setAlerta] = useState({});
  const [tokenValido, setTokenValido] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordModificado, setPasswordModificado] = useState(false);

  const { token } = useParams();

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`api/usuarios/olvide-password/${token}`);
        setTokenValido(true);
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
    comprobarToken();
  }, []);

  const { msg } = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe tener al menos 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setPasswordModificado(true);
      setTokenValido(false);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  return (
    <>
      <h1 className="text-sky-600 font-medium text-5xl capitalize">
        Reestablece tu password y no pierdas acceso a tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      {tokenValido && (
        <form
          className="my-10 bg-white shadow-md rounded-md p-5"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              htmlFor="password"
              className="text-gray-600 block font-medium text-lg mb-2"
            >
              Nuevo Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Ingresa tu nueva contraseña"
              className="w-full px-3 py-2 text-gray-700 border rounded-xl outline-none focus:border-sky-600 focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Guardar Nuevo Password"
            className="bg-sky-700 w-full text-white p-2 mb-2 rounded-md hover:bg-sky-800 cursor-pointer transition-colors"
          />
        </form>
      )}

      {passwordModificado && (
        <div>
          <p className="text-gray-600 text-lg mb-5">
            Ya puedes iniciar sesión y crear tus proyectos
          </p>
          <Link to="/" className="bg-sky-600 text-white px-4 py-2 rounded-lg">
            Iniciar sesión
          </Link>
        </div>
      )}
    </>
  );
}

export default NuevoPassword;
