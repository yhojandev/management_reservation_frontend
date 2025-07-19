import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de solicitud: Añade el token de acceso a cada request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Obtén el token del localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Añade el token al encabezado
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
