// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import OperatorDashboard from "./OperatorDashboard";

const AdminDashboard = () => {
  // const { user } = useContext(AuthContext);

  // if (user?.role === "operator") {
  //   return <OperatorDashboard />;
  // }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bienvenido operador</h2>
      {/* métricas, tarjetas, etc */}
    </div>
  );
};

export default AdminDashboard;
