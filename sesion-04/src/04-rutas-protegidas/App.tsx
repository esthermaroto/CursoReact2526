import { NavLink, Route, Routes } from "react-router-dom";
import SecretArea from "./pages/SecretArea";
import PublicHome from "./pages/PublicHome";
import Navbar from "./components/Navbar";
import { ProtectedRoute } from "./utils/Protected";
import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [isAllowed, setIsAllowed] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <nav className="bg-white border-b border-slate-200 p-8 flex justify-center items-center gap-12 shadow-sm top-0 z-50 sticky">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "p-8 py-3 rounded-xl font-bold transition-all text-sm shadow-md scale-90 " +
            (isActive
              ? "bg-indigo-600 text-white shadow-indigo-200"
              : "bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200")
          }
        >
          Inicio
        </NavLink>

        <NavLink
          to="/secret"
          className={({ isActive }) =>
            "p-8 py-3 rounded-xl font-bold transition-all text-sm shadow-md scale-90 " +
            (isActive
              ? "bg-indigo-600 text-white shadow-indigo-200"
              : "bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200")
          }
        >
          Secret
        </NavLink>

        <div>
          <button
            onClick={() => setIsAllowed(!isAllowed)}
            className={`px-10 py3 rounded-xl font-black text-sm uppercase transition-all active:scale-90 ${
              isAllowed
                ? "bg-slate-900 text-slate-400 border-slate-700"
                : "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
            }`}
          >
            {isAllowed ? "Sing out" : "Sing in"}
          </button>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<PublicHome />} />
          <Route
            path="/secret"
            element={
              <ProtectedRoute isAllowed={isAllowed}>
                <SecretArea />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
