import type { Plato } from "../types";

export const searchFilter = (platos: Plato[], query: string): Plato[] => {
  if (!query) return platos;
  const lowerQuery = query.toLowerCase();
    return platos.filter((plato) => 
        plato.nombre.toLowerCase().includes(lowerQuery) ||
        plato.ingredientes.some((ingrediente) => ingrediente.toLowerCase().includes(lowerQuery)));
};
