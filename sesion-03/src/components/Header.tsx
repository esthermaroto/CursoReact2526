import React from "react";

const Header = () => {
  return (
    <div>
      <header className="mb-12 text-center">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-4">
          Menú Platos
          <span className="text-orange-700"> PREMIUM</span>
        </h1>
        <p className="text-gray-600">
          Explora nuestra selección exclusiva de platos gourmet. Usando:{" "}
          <code className="text-orange-300 px-2 rounded">React 19</code>
        </p>
      </header>
    </div>
  );
};

export default Header;
