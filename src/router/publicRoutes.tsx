import type { RouteObject } from "react-router-dom";
import Login from "@pages/auth/Login";
import Home from "@pages/Home";
import AuthLayout from "@layouts/AuthLayout";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
];

export default publicRoutes;
