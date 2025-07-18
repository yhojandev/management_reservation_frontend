import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import { login, register } from "@services/auth/authService";
import { AxiosError } from "axios";

interface JwtPayload {
  sub: string;
  name: string;
  iat: number;
}

interface AuthState {
  user: string | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void; // Agregado para la comprobación inicial del token
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null, // El estado inicial es null, indicando que no hay usuario logeado

  login: async (credentials) => {
    try {
      const dataFromApi = await login(credentials);
      const token = dataFromApi.accessToken;
      localStorage.setItem("accessToken", token);
      const decoded: JwtPayload = jwtDecode(token);
      set({ user: decoded.name || decoded.sub });
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      console.error(
        "Error en el login:",
        err?.response?.data?.message || "Error desconocido"
      );
      throw new Error(
        err?.response?.data?.message || "Error al iniciar sesión"
      ); // Re-lanzar para el componente de login
    }
  },

  register: async (credentials) => {
    try {
      await register(credentials);
      // const token = res.data.token; // Asumiendo que tu servicio de registro devuelve 'token'
      // localStorage.setItem("accessToken", token); // Guarda el token del registro
      // const decoded: JwtPayload = jwtDecode(token);
      // set({ user: decoded.name || decoded.sub }); // Inicia sesión automáticamente con el nuevo token
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      console.error(
        "Error en el registro:",
        err?.response?.data?.message || "Error desconocido"
      );
      // Re-lanzamos el error para que el componente de registro pueda capturarlo y mostrarlo
      throw new Error(err?.response?.data?.message || "Error al registrarse");
    }
  },

  logout: () => {
    localStorage.removeItem("accessToken"); // Asegura consistencia con accessToken
    set({ user: null });
  },

  initializeAuth: () => {
    const token = localStorage.getItem("accessToken"); // Asegura consistencia con accessToken
    if (token) {
      try {
        const decoded: string = jwtDecode(token);
        set({ user: decoded });
      } catch (error) {
        console.error(
          "Error al decodificar el token o el token es inválido:",
          error
        );
        get().logout(); // Cerrar sesión si el token es inválido
      }
    }
  },
}));
