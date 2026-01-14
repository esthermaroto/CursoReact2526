import React from "react";

interface SaludoProps {
  nombre: string;
  edad: number;
}

const Saludo = ({ nombre, edad }: SaludoProps) => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg shadow mt-4">
      <h2 className="text-xl font-semibold">Hola {nombre}</h2>
      <p>Tienes {edad} años.</p>
    </div>
  );
};

export default Saludo;
