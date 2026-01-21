import React, { use } from "react";
import PlatoCard from "./PlatoCard";
import type { Plato } from "../types";
import { searchFilter } from "../utils/buscarPlato";

interface PlatosListsProps {
  platosPromise: Promise<Plato[]>;
  searchQuery: string;
}

const PlatosLists = ({ platosPromise, searchQuery }: PlatosListsProps) => {
  const platos = use(platosPromise);
  const platosFiltrados = searchFilter(platos, searchQuery);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {platosFiltrados.map((plato) => (
        <PlatoCard key={plato.id} plato={plato} />
      ))}
    </div>
  );
};

export default PlatosLists;
