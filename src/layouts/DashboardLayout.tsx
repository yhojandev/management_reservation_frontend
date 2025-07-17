// import { useContext } from "react";
// import { AuthContext } from "@context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Breadcrumbs from "@components/Breadcrumbs";

const DashboardLayout = () => {
  // const { user, logout } = useContext(AuthContext);

  // if (!user) return <Navigate to="/login" />;

  return (
    <>
      <Sidebar />
      <Header />
      <div className="pc-container">
        <div className="pc-content">
          <div className="page-header">
            <div className="page-block">
              <div className="page-header-title">
                <h5 className="mb-0 font-medium">Default</h5>
              </div>
              <Breadcrumbs />
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
