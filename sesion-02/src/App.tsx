import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <main>
        {/* aquí vendrán otros componentes */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
