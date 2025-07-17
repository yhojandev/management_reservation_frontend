import api from "@services/api";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData extends LoginData {
  username: string;
  firstName: string;
  lastName: string;
}

export const login = (data: LoginData) => api.post("/auth/login", data);
export const register = (data: RegisterData) =>
  api.post("/auth/register", data);
