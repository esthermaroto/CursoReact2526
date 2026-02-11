import React, { Suspense, useState } from "react";
import PlatosLists from "./components/PlatosLists";
import Header from "./components/Header";
import LoadingFallBack from "./components/LoadingFallBack";
import { fetchPlatos } from "./utils/api";
import Search from "./components/Search";

const App = () => {
  const [platosPromise] = useState(() => fetchPlatos());
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main>
          <Suspense fallback={<LoadingFallBack message="Cargando platos..." />}>
            <Search onSearch={handleSearch} />
            <PlatosLists
              platosPromise={platosPromise}
              searchQuery={searchQuery}
            />
          </Suspense>
        </main>
      </div>
    </div>
  );
};


export default App;
