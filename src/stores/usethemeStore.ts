import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. Definimos los tipos explícitamente
export type ThemeType = "light" | "dark" | "default";

export interface ThemeState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

// 2. Pasamos el tipo <ThemeState> a `create` y a `persist`
export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "default",
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "theme-storage", // Nombre de la clave en localStorage
    }
  )
);
