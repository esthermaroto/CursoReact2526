import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/commons/NAvBar";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import DashBoardPage from "../pages/DashBoardPage";
import ProtectedRoute from "../components/commons/ProtectedRoute";
import CompaniesPage from "../pages/CompaniesPage";
import CompaniesDetailPage from "../pages/CompaniesDetailPage";
import ContactPage from "../pages/ContactPage";

const AppFull = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        {/* -----------Rutas públicas------------*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* -----------Rutas protegidas---------- */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashBoardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <CompaniesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/companies/:id"
          element={
            <ProtectedRoute>
              <CompaniesDetailPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppFull;
