import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState("Hola mundo");
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
