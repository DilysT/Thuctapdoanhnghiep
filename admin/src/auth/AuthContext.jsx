// admin/src/auth/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { loginApi } from "../services/auth";
import { getUserProfile } from "../services/users";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

// helper: lấy id từ JWT
const getIdFromToken = (tkn) => {
  try {
    const p = jwtDecode(tkn);
    return p.userId || p.id || p.sub || p.user?.id || null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("access_token") || "");
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user") || "null"); }
    catch { return null; }
  });
  const [bootstrapping, setBootstrapping] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(false);

  // Bootstrap khi app mở lại/refresh
  useEffect(() => {
    (async () => {
      if (!token) { setBootstrapping(false); return; }

      // Nếu đã có user trong localStorage thì dùng ngay
      if (user) { setBootstrapping(false); return; }

      // Chưa có user -> decode token lấy id rồi gọi profile
      const uid = getIdFromToken(token);
      if (!uid) { setBootstrapping(false); return; }

      setLoadingProfile(true);
      try {
        const profile = await getUserProfile(uid);
        setUser(profile);
        localStorage.setItem("user", JSON.stringify(profile));
        localStorage.setItem("user_id", String(profile?.id ?? uid));
      } finally {
        setLoadingProfile(false);
        setBootstrapping(false);
      }
    })();
  }, [token]); // chỉ chạy lại khi token đổi

  // Đăng nhập
  const login = async (email, password) => {
    const { token: tkn } = await loginApi({ email, password });
    if (!tkn) throw new Error("Máy chủ không trả token");

    localStorage.setItem("access_token", tkn);
    setToken(tkn);

    const uid = getIdFromToken(tkn);
    if (uid) {
      const profile = await getUserProfile(uid);
      setUser(profile);
      localStorage.setItem("user", JSON.stringify(profile));
      localStorage.setItem("user_id", String(profile?.id ?? uid));
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    setToken("");
    setUser(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{ token, user, isAuthenticated, login, logout, bootstrapping, loadingProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
