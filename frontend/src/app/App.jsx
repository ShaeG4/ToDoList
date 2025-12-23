import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from '../utils/Protectedroutes.jsx';

import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import DashboardPage from "../pages/DashboardPage/DashboardPage.jsx";
import Register from '../pages/Register/Register.jsx';
import PrivatePage from '../pages/PrivatePage/PrivatePage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to ="/login" replace/>} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      <Route element={<ProtectedRoutes />} />
      <Route path="/dashboarad" element={<DashboardPage />} />
     <Route path="/private" element={<PrivatePage />} />

    </Routes>
  );
}