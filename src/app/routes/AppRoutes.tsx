import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Login } from '../pages/login/Login';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
};
