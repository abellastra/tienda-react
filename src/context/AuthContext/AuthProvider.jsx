import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = sessionStorage.getItem("session ");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return null;
    }
  });

  const login = (name, password) => {
    if (name === "admin" && password === "1234") {
      const session = { name };
      setUser(session);
      sessionStorage.getItem("session", JSON.stringify(session));
      return true;
    }
    return false;
  };
  const logout = () => {
    sessionStorage.removeItem("session");

    setUser(null);
    alert("cerrando sesion");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
