import { useAuthContext } from "../../context/AuthContext/UseAuthContext";
import { Navigate } from "react-router-dom";
export const Rutaprotegida = ({ children }) => {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
