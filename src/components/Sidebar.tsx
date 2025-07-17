import { PiHouseBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useSidebarStore } from "@stores/useSidebarStore";

const Sidebar = () => {
  const isSidebarHidden = useSidebarStore((state) => state.isSidebarHidden);
  const { isMobileSidebarActive, isMobileOverlayActive, closeMobileSidebar } =
    useSidebarStore();

  return (
    <nav
      className={`pc-sidebar ${isSidebarHidden ? "pc-sidebar-hide" : ""} ${
        isMobileSidebarActive ? "mob-sidebar-active" : ""
      }`}
    >
      <div className="navbar-wrapper">
        <div className="m-header flex items-center py-4 px-6 h-header-height">
          <a href="#" className="b-brand flex items-center gap-3">
            <img src="#" className="img-fluid logo logo-lg" alt="logo" />
          </a>
        </div>
        <div className="navbar-content h-[calc(100vh_-_74px)] py-2.5">
          <ul className="pc-navbar">
            <li className="pc-item pc-caption">
              <label>Inicio</label>
            </li>
            <li className="pc-item">
              <NavLink to="home" className="pc-link">
                <span className="pc-micon">
                  <PiHouseBold />
                </span>
                <span className="pc-mtext">Dashboard</span>
              </NavLink>
            </li>
            <li className="pc-item pc-caption">
              <label>Otros</label>
            </li>
            <li className="pc-item pc-hasmenu">
              <NavLink to="users" className="pc-link">
                <span className="pc-micon">
                  <PiHouseBold />
                </span>
                <span className="pc-mtext">Usuarios</span>
              </NavLink>
            </li>
            <li className="pc-item pc-hasmenu">
              <NavLink to="roles" className="pc-link">
                <span className="pc-micon">
                  <PiHouseBold />
                </span>
                <span className="pc-mtext">Roles</span>
              </NavLink>
            </li>
            <li className="pc-item pc-hasmenu">
              <NavLink to="operators" className="pc-link">
                <span className="pc-micon">
                  <PiHouseBold />
                </span>
                <span className="pc-mtext">Operadores</span>
              </NavLink>
            </li>
            <li className="pc-item pc-hasmenu">
              <NavLink to="reservations" className="pc-link">
                <span className="pc-micon">
                  <PiHouseBold />
                </span>
                <span className="pc-mtext">Reservas</span>
              </NavLink>
            </li>

            {/* {user.role === "Administrador" && (
                <>
                  <li className="pc-item">
                    <a href="#" className="pc-link">
                      <span className="pc-mtext">Dashboard</span>
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#" className="pc-link">
                      <span className="pc-mtext">Usuarios</span>
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#" className="pc-link">
                      <span className="pc-mtext">Roles</span>
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#" className="pc-link">
                      <span className="pc-mtext">Operadores</span>
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#" className="pc-link">
                      <span className="pc-mtext">Reservas</span>
                    </a>
                  </li>
                </>
              )}
              {user.role === "Operador" && (
                <>
                  <li className="pc-item">
                    <a href="#" className="pc-link">
                      <span className="pc-mtext">Dashboard</span>
                    </a>
                  </li>
                  <li className="pc-item pc-hasmenu">
                    <a href="#" className="pc-link">
                      <span className="pc-mtext">MisReservas</span>
                    </a>
                  </li>
                </>
              )} */}
            {/* Agrega más roles según necesites */}
          </ul>
        </div>
      </div>
      {isMobileOverlayActive && (
        <div
          className={`${isMobileOverlayActive ? "pc-menu-overlay" : ""}`}
          onClick={closeMobileSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Sidebar;
