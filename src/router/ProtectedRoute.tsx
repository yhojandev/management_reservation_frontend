import { type JSX, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@stores/useAuthStore";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, initializeAuth } = useAuthStore();

  useEffect(() => {
    // Llama a initializeAuth cuando el componente se monta para verificar si hay un token existente
    initializeAuth();
  }, [initializeAuth]); // El array de dependencias incluye initializeAuth para asegurar que se llama correctamente

  if (!user) {
    // Si no hay ningún usuario logeado (user es null), redirige a login
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
