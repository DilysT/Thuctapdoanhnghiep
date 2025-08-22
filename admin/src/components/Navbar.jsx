import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800 tracking-wide">🛠️ Quản trị hệ thống</div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">Xin chào, <strong>{user?.name || "Admin"}</strong></span>
        <FaUserCircle size={28} className="text-gray-600" />
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Đăng xuất
        </button>
      </div>
    </header>
  );
}
