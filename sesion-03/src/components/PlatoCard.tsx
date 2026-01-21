import React from "react";
import { API_CONFIG, type Plato } from "../types";

interface PlatoCardProps {
  plato: Plato;
}

const PlatoCard = ({ plato }: PlatoCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={`${API_CONFIG.BASE_URL}${plato.imagen}`}
          alt={plato.nombre}
        />
        <div>
          <p className="absolute top-4 right-4 bg-amber-100 px-3 rounded-full text-xs font-bold text-orange-600 shadow-sm">
            {plato.categoria}
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between mb-3">
          <h2 className="text-xl font-bold text-gray-900">{plato.nombre}</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-2 rounded">
            {plato.calorias} kcal
          </span>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-600">
            {plato.origen}
          </h3>
          <p className="text-gray-400 font-semibold ">Ingredientes: </p>
          <div className="mt-2 gap-2 flex flex-wrap">
            {plato.ingredientes.map((ingrediente: string, index: number) => (
              <span
                key={index}
                className="inline-block bg-orange-100 text-orange-700 text-[10px] font-semibold mr-2 mb-2 px-2 py-1 rounded"
              >
                {ingrediente}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatoCard;
