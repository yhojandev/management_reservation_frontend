import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@stores/useAuthStore";

const Login = () => {
  const login = useAuthStore((state) => state.login);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos
    try {
      await login(form); // Llama a la acción login del store con las credenciales
      navigate("/dashboard"); // Navega solo si el login es exitoso
    } catch (err) {
      // Captura el error relanzado desde el store
      const errorMessage = (err as Error).message || "Error al iniciar sesión";
      setError(errorMessage);
    }
  };

  return (
    <div className="card sm:my-12 w-full shadow-none">
      <div className="card-body !p-10">
        <div className=" text-center mb-8">
          <p>logo</p>
          {/* <a href="#">
              <img src="" alt="img" className="mx-auto" />
            </a> */}
        </div>
        <h4 className="text-center font-medium mb-4">Iniciar Sesion</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              placeholder="Correo electronico"
              value={form.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-4">
            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          <div className="flex mt-1 justify-between items-center flex-wrap">
            <div className="form-check">
              <label className="form-check-label text-muted text-sm">
                <input
                  className="form-check-input input-primary"
                  type="checkbox"
                  id="customCheckc1"
                />
                <span className="pl-2">Remember me?</span>
              </label>
            </div>
            <h6 className="font-normal !text-primary-500 mb-0">
              <a href="#"> Forgot Password? </a>
            </h6>
          </div>
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="btn btn-primary mx-auto shadow-2xl"
            >
              Entrar
            </button>
          </div>
        </form>
        {/* <div className="flex justify-between items-end flex-wrap mt-4">
            <h6 className="font-medium mb-0">Don't have an Account?</h6>
            <a href="#" className="text-primary-500 text-sm">
              Create Account
            </a>
          </div> */}
      </div>
    </div>
  );
};

export default Login;
