import { useEffect } from "react";
import { useThemeStore } from "@stores/usethemeStore";

function ThemeManager(): null {
  // Obtenemos el estado del store de Zustand
  const theme = useThemeStore((state) => state.theme);

  // Efecto para aplicar el tema al DOM
  useEffect(() => {
    let actualTheme = theme;
    // Si es 'default', determinamos el tema según la preferencia del sistema
    if (theme === "default") {
      actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    // Aplicamos el atributo al elemento <html>
    document.documentElement.setAttribute("data-pc-theme", actualTheme);
  }, [theme]); // Se ejecuta cada vez que 'theme' cambia

  // Efecto para escuchar los cambios del tema del sistema operativo
  useEffect(() => {
    // Solo escuchamos si el tema seleccionado es 'default'
    if (theme !== "default") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Cuando el sistema cambia, aplicamos el tema correspondiente al DOM
      const newActualTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-pc-theme", newActualTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Función de limpieza para eliminar el listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]); // Se re-evalúa si el usuario cambia la preferencia

  return null; // Este componente no renderiza nada
}

export default ThemeManager;
