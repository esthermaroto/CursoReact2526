import React from "react";
import Nieto from "./Nieto";
import { useFamily } from "../hooks/useFamily";

const Hijo = () => {
  const { incrementarContador, decrementarContador } = useFamily()
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-orange-500 rounded-lg p-4 bg-orange-50">
        <h1>Hijo</h1>
           
          <button
            className="px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-gray-700 transition-all"
            onClick={() => incrementarContador()}
          >
            + 1
          </button>
          <button
            className="px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-gray-700 transition-all"
            onClick={() => decrementarContador()}
          >
            - 1
          </button>
        <div className="mt-4 rounded-lg border-4 border-orange-200">
          <Nieto />
        </div>
      </div>
    </div>
  );
};

export default Hijo;
