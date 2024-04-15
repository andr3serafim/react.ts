import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard } from '../pages/dashboard/Dashboard';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
};
