import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import Alerta from "../components/Alerta";

function ConfirmarCuenta() {
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`;
        const { data } = await clienteAxios(url);

        setAlerta({
          msg: data.msg,
          error: false,
        });

        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmarCuenta();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-medium text-5xl capitalize">
        Confirma tu cuenta y empieza a crear tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>
      <div className="mt-20 md:mt-10 shadow-md px-5 py-10 rounded-xl bg-white">
        {msg && <Alerta alerta={alerta} />}

        {cuentaConfirmada && (
          <div>
            <h1 className="text-sky-600 font-medium text-xl capitalize mb-2">
              Cuenta confirmada
            </h1>
            <p className="text-gray-600 text-lg mb-5">
              Ya puedes iniciar sesión y crear tus proyectos
            </p>
            <Link to="/" className="bg-sky-600 text-white px-4 py-2 rounded-lg">
              Iniciar sesión
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default ConfirmarCuenta;
