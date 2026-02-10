import { createContext, use, useState, type ReactNode } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

// creamos el almacén
const AuthContext = createContext<AuthContextType | null>(null);
// crear el provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string): boolean => {
    if (email === "admin@admin.com" && password === "1234") {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    logout,
    login,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

// para user el contexto creo un hook personalizado
export function useAuth() {
  const context = use(AuthContext);
  if (context === undefined) {
    throw new Error("Error al user el contexto global");
  }
  return context;
}
