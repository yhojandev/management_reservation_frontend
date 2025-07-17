import React from "react";
import { useLocation, Link } from "react-router-dom";

interface BreadcrumbItem {
  path: string;
  label: string;
}

// Opcional: Si tienes rutas con IDs dinámicos (ej. /users/:id),
// puedes mapear esos IDs a nombres más legibles.
// Por ejemplo, de '/users/123' a 'Usuarios > Detalles de Usuario (ID: 123)'
// Para simplificar, en este ejemplo solo reemplazaremos IDs por "Detalles".
const getPathLabel = (pathSegment: string): string => {
  // Si es un ID numérico o UUID, podrías querer mostrar algo genérico
  if (
    pathSegment.match(/^\d+$/) ||
    pathSegment.match(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
    )
  ) {
    return "Detalles"; // O podrías buscar el nombre real del item en un store/API
  }
  // Capitaliza la primera letra y reemplaza guiones con espacios
  return (
    pathSegment.charAt(0).toUpperCase() +
    pathSegment.slice(1).replace(/-/g, " ")
  );
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation(); // Obtiene el objeto de ubicación actual
  const pathnames = location.pathname.split("/").filter((x) => x); // Divide la ruta en segmentos

  const breadcrumbItems: BreadcrumbItem[] = [];

  // Agrega siempre el "Home" o el inicio de tu aplicación
  breadcrumbItems.push({ path: "/", label: "Home" });

  // Construye los elementos del breadcrumb basándose en los segmentos de la ruta
  pathnames.forEach((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
    breadcrumbItems.push({
      path: to,
      label: getPathLabel(value),
    });
  });

  // Si la ruta es solo "/", es decir, la página de inicio,
  // y quieres que el breadcrumb sea solo "Home",
  // puedes ajustar la lógica para no duplicar si pathname es solo '/'
  if (location.pathname === "/") {
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb-item" aria-current="page">
          Home
        </li>
      </ul>
    );
  }

  return (
    <ul className="breadcrumb">
      {breadcrumbItems.map((item, index) => {
        // El último elemento no es un enlace, solo texto
        const isLast = index === breadcrumbItems.length - 1;

        return (
          <li
            key={item.path}
            className={`breadcrumb-item ${isLast ? "active" : ""}`}
            aria-current={isLast ? "page" : undefined}
          >
            {isLast ? item.label : <Link to={item.path}>{item.label}</Link>}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
