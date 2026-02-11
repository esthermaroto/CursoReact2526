import React, { useState } from "react";
import Boton from "./Boton";

interface Credenciales {
  email: string;
  password: string;
}

const Login = () => {
  const [credenciales, setCredenciales] = useState<Credenciales>({
    email: "",
    password: "",
  });
  const [errores, setErrores] = useState<({ email?: string; password?: string })>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("enviando ...");
  };

  const validar = (): boolean => {
    const nuevosErrores: { email?: string; password?: string } = {};

    if (!credenciales.email) {
      nuevosErrores.email = "El email no puede estar vacío";
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        credenciales.email
      )
    ) {
      nuevosErrores.email = "El email no tiene un formato válido";
    }

    if (!credenciales.password) {
      nuevosErrores.password = "La contraseña no puede estar vacía";
    } else if (credenciales.password.length < 8) {
      nuevosErrores.password = "La contraseña debe tener al menos 8 caracteres";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

//   const emailValido = (email: string): boolean => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

  return (
    <div className="max-w-md mx-auto p-6 bg-amber-100 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email: </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
            placeholder="tu@email.com"
            value={credenciales?.email}
            onChange={(e) =>
              setCredenciales({ ...credenciales, email: e.target.value })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Contraseña: </label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-4"
            placeholder="tu contraseña"
            value={credenciales?.password}
            onChange={(e) =>
              setCredenciales({ ...credenciales, password: e.target.value })
            }
          />
        </div>
        <div>
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🕳️ " : "👁️"}
          </button>
        </div>
        <div>
          <Boton
            submit={true}
            onClick={() => handleSubmit}
            texto="Enviar"
            tipo="primary"
          />
        </div>
        <label htmlFor="">
            
        </label>
      </form>
    </div>
  );
};

export default Login;
