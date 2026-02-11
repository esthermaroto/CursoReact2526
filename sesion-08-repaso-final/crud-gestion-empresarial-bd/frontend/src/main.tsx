import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import LoginForm from "./components/auth/LoginForm";
import { CompaniesProvider } from "./context/CompaniesContext";
import { BrowserRouter } from "react-router-dom";
import AppFull from "./apps/AppFull";

// cambio por cada ejercicio el valor de App
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <CompaniesProvider>
        <BrowserRouter>
          <AppFull />
          {/* <LoginForm /> */}
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </CompaniesProvider>
    </AuthProvider>
  </StrictMode>,
);
