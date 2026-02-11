import { useState } from "react";
import { useFamily } from "../hooks/useFamily";

const Nieto = () => {
  const { mensaje, setMensaje } = useFamily();
  const [newMensaje, setNewMensaje] = useState("");
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-yellow-500 rounded-lg p-4 bg-yellow-50">
        <h1>Nieto</h1>
        <p>
          Aquí termina el árbol genialógico de componentes utilizando Context
          <br />
          <strong>{mensaje}</strong>
          <div className="flex gap-2 my-4">
            <input
              type="text"
              className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escribe el nuevo mensaje"
            />
          </div>
          <button
            className="px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-gray-700 transition-all"
            onClick={() => setMensaje("Mensaje cambiado")}
          >
            Cambiar mensaje
          </button>
        </p>
      </div>
    </div>
  );
};

export default Nieto;
