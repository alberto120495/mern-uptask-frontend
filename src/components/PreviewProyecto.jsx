import { Link } from "react-router-dom";
function PreviewProyecto({ proyecto }) {
  const { nombre, _id, cliente } = proyecto;
  return (
    <div className=" p-2">
      <div className="bg-gray-100 p-5 rounded-md flex items-center justify-between">
        <p className="text-2xl font-semibold ">
          {nombre}
          <span className="text-sm text-gray-500 uppercase ml-3">
            {cliente}
          </span>
        </p>
        <Link to={`${_id}`} className="text-sky-600 ">
          Ver Proyecto
        </Link>
      </div>
    </div>
  );
}

export default PreviewProyecto;
