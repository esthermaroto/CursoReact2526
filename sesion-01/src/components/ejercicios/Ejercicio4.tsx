/**
 * crear un formulario llamado formulario usuario que gestione el nombre la edad y el email
 */

import React, { useState } from "react";
interface Usuario {
  nombre: string;
  edad: number;
  email: string;
}

const FormularioUsuario = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: 0,
    email: "",
  });
  const actualizarCampo = (campo: keyof Usuario, valor: string | number) => {
    setUsuario({ ...usuario, [campo]: valor });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando formulario:", usuario);
    alert(`Usuario ${usuario.nombre} guardado con éxito!`);
  };

  const handleReset = () => {
    setUsuario({
      nombre: "",
      edad: 0,
      email: "",
    });
  };
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow">
        <h3 className="text-xl font-bold mb-4">Registro de Usuario</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nombre:</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
              id="nombre"
              value={usuario.nombre}
              onChange={(e) => actualizarCampo("nombre", e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Edad:</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
              id="edad"
              value={usuario.edad}
              onChange={(e) =>
                actualizarCampo("edad", parseInt(e.target.value))
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring-blue-500"
              id="email"
              value={usuario.email}
              onChange={(e) => actualizarCampo("email", e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-700 font-semibold"
            >
              Guardar Usuario
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-full mt-2 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 font-semibold"
            >
              Limpiar Formulario
            </button>
          </div>
          <div className="mt-6 mb-6 p-4 bg-gray-100 rounded">
            <h4 className="font-semibold mb-2">Datos del Usuario</h4>
            <pre className="text-sm">{JSON.stringify(usuario, null, 2)}</pre>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormularioUsuario;
