import useAuth from "./useAuth";
import useProyectos from "./useProyecto";

function useAdmin() {
  const { proyecto } = useProyectos();
  const { auth } = useAuth();

  return proyecto.creador === auth._id;
}

export default useAdmin;
