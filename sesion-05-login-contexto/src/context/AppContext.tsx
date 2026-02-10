import { createContext, useState, type ReactNode } from "react";
import type { User } from "../types/AppContextType";


export const AppContext = createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState<AppState>({
    user: {
      id: "1",
      name: "Alumno react",
      email: "alumno@gmail.com",
      avatar: "",
      role: "admin",
    },
    theme: "dark",
    language: "es",
  });

  const setUser = (user: User | null) => {
    setState({...state,user})
    // setState((prev) => ({ ...prev, user }));
  };

  const value = {
    ...state,
    setUser,
  };

  return <AppContext value={value}>{children}</AppContext>;
};

createContext;


