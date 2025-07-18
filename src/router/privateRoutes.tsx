import { type RouteObject, Navigate } from "react-router-dom";
import DashboardLayout from "@layouts/DashboardLayout";
import Dashboard from "@pages/dashboard/AdminDashboard";
import Users from "@pages/users/Users";
import Roles from "@pages/roles/Roles";
import Operators from "@pages/operators/Operators";
import Reservations from "@pages/reservations/Reservations";
import Register from "@pages/auth/Register";
// import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "@layouts/AuthLayout";

const privateRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "home", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "roles", element: <Roles /> },
      { path: "operators", element: <Operators /> },
      { path: "reservations", element: <Reservations /> },
    ],
  },

  {
    path: "/register",
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    ),
  },
];

export default privateRoutes;
