import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function RequireAuth({ children }) {
    const { token, bootstrapping } = useAuth();
    const location = useLocation();

    if (bootstrapping) return null; // có thể hiện spinner
    if (!token) return <Navigate to="/login" state={{ from: location }} replace />;
    return children;
}
