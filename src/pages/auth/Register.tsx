import React, { useState } from "react";
import { useAuthStore } from "@stores/useAuthStore";

const Register = () => {
  const register = useAuthStore((state) => state.register);
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // confirmPassword se maneja solo a nivel de formulario
  });
  const [error, setError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Limpiar errores previos

    if (form.password !== form.confirmPassword) {
      return setError("Las contraseñas no coinciden.");
    }

    try {
      // Excluye confirmPassword antes de pasar los datos al store
      const { confirmPassword, ...dataToSend } = form;
      await register(dataToSend); // Llama a la acción de registro del store
      setRegistrationSuccess(true); // Indicar éxito en el registro
    } catch (err) {
      // Captura el error relanzado desde el store y lo muestra
      const errorMessage =
        (err as Error).message ||
        "Error al registrar. Por favor, inténtalo de nuevo.";
      setError(errorMessage);
    }
  };
  return (
    <div className="card sm:my-12  w-full shadow-none">
      <div className="card-body !p-10">
        <div className="text-center mb-8">
          <a href="#">
            <p>logo</p>
            {/* <img
              src=""
              alt="img"
              className="mx-auto auth-logo"
            /> */}
          </a>
        </div>
        <h4 className="text-center font-medium mb-4">Registrar Usuario</h4>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-3 mb-3">
            <div className="col-span-12 sm:col-span-6">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Nombres"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Apellidos"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Nombre de usuario"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Correo electronico"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirmar contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
          {registrationSuccess && (
            <p className="text-green-500 text-sm mb-3">
              ¡Registro exitoso! Ahora puedes iniciar sesión.
            </p>
          )}
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="btn btn-primary mx-auto shadow-2xl"
            >
              Registrar
            </button>
          </div>
        </form>
        <div className="flex justify-between items-end flex-wrap mt-4">
          <h6 className="font-medium mb-0">Already have an Account?</h6>
          <a href="/login" className="text-primary-500">
            log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
