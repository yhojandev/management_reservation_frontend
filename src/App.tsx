import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useState, useEffect } from "react";
import ThemeManager from "@components/common/ThemeManager";
// import { AuthProvider } from "@context/AuthProvider";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un fetch o verificación de auth
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // puedes ajustar el tiempo o usar lógica real

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-dvh w-dvw content-center bg-theme-bodybg dark:bg-themedark-bodybg">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <ThemeManager />
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}
