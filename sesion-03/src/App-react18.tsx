import React from "react";
import { useFetch } from "./hooks/useFetch";
import { API_CONFIG, type Plato } from "./types";
import Header from "./components/Header";
import LoadingFallBack from "./components/LoadingFallBack";
import PlatoCard from "./components/PlatoCard";


const App = () => {
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PLATOS}`;
  const { data: platos, error, loading } = useFetch<Plato[]>(url);
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main>
          {loading && <LoadingFallBack message="Cargando platos..." />}
          {error && <div className="text-red-500">Error: {error.message}</div>}
          {platos && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {platos.map((plato: Plato) => (
                <PlatoCard key={plato.id} plato={plato} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
