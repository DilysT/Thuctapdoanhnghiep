// admin/src/App.js
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import ProductList from './pages/ProductList';
import ContactList from './pages/ContactList';
import Login from './pages/Login';
import { useAuth } from './auth/AuthContext';

// === Homepage (gộp list + form) ===
import HeroBannerManager from './pages/homepage/HeroBannerManager';
import IntroEdit from './pages/homepage/IntroEdit';


import AboutPageEdit from './pages/AboutPageEdit'; // NEW (đặt ngoài folder homepage)
export default function App() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }
  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />

        {/* Products */}
        <Route path="products" element={<ProductList />} />
        <Route path="products/add" element={<AddProduct />} />

        {/* Contacts */}
        <Route path="contacts" element={<ContactList />} />

        {/* === Homepage management === */}
        <Route path="homepage">
          <Route index element={<Navigate to="/homepage/hero" replace />} />
          <Route path="hero" element={<HeroBannerManager />} />
          {/* giữ tương thích link cũ */}
          <Route path="hero/add" element={<Navigate to="/homepage/hero" replace />} />
          <Route path="hero/:id/edit" element={<Navigate to="/homepage/hero" replace />} />
          <Route path="intro" element={<IntroEdit />} />
        </Route>

        {/* NEW: Giới thiệu chung (nằm ngoài nhóm homepage) */}
        <Route path="about" element={<AboutPageEdit />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}
