import React, { useEffect, useState } from "react";

const UseEffectBasico = () => {
  // hooks
  const [isTabActive, setIsTabActive] = useState(true);

  // efectos
  useEffect(() => {
    // document.addEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  //funciones
  const handleVisibilityChange = () => {
    const active = document.visibilityState === "visible";
    setIsTabActive(active);
    document.title = active ? "React App" : "Vuelve a la pestaña";
  };
  return (
    <div
      className={` p-8 rounded-3xl transition-all duration-300 border-2
    ${
      isTabActive
        ? "bg-green-500 border-green-700"
        : "bg-red-500 border-red-700"
    }`}
    >
      <h2 className="text-white font-black text-2xl">Estado de la pestaña</h2>
      <p className="text-white mt-4">
        La pestaña está {isTabActive ? "activa" : "inactiva"}
      </p>
    </div>
  );
};

export default UseEffectBasico;

/**
 * crear una tarjeta que va a cambiar de color en funcion de si la pestaña está activa o no
 * si la pestaña está activa, la tarjeta será de color verde
 * si la pestaña no está activa, la tarjeta será de color rojo
 */
