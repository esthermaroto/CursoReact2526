// 1. crear el contexto con un hook personalizado llamado create context

import { createContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";

const FamilyContext = createContext<FamilyContextType | null>(null);

// 2. estado inical del contexto

const estadoInicial: FamilyState = {
  mensaje: "Hola desde el contexto de la familia",
  contador: 0,
};

// 3. Crear el Provider (aquello que envuelva a los componentes que van a consumir el contexto)

export function FamilyProvider({ children }: { children: ReactNode }) {
  // hooks
  const [estado, setEstado] = useState<FamilyState>(estadoInicial);
  // funciones, para cambiar los elementos del contexto, etc
  const setMensaje = (mensaje: string) => {
    setEstado((prev) => ({ ...prev, mensaje }));
  };

  const incrementarContador = () => {
    setEstado((prev) => ({ ...prev, contador: prev.contador + 1 }));
  };

  const decrementarContador = () => {
    setEstado((prev) => ({ ...prev, contador: prev.contador - 1 }));
  };

  const value: FamilyContextType = {
    ...estado,
    setMensaje,
    incrementarContador,
    decrementarContador,
  };
  return <FamilyContext value={value}>{children}</FamilyContext>;
}

// 4. Exportar el contexto

export { FamilyContext };
