import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/UseAuthContext";
import "./Login.css";
export const Login = () => {
  const [userFrom, setUserFrom] = useState({ name: "", password: "" });

  const { user, login } = useAuthContext();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="alta-productos" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFrom({ ...userFrom, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userFrom.name, userFrom.password);
    if (success) {
      navigate("/admin/alta-productos");
    } else {
      alert("credenciales incorrectas");
      setUserFrom({ name: "", password: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>
        <input
          id="usuario"
          type="text"
          name="name"
          value={userFrom.name}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={userFrom.password}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        Iniciar sesión
      </button>
    </form>
  );
};
