import { PiUserBold, PiGearBold, PiSignOutBold } from "react-icons/pi";
import { useDropdown } from "@hooks/useDropdown";
import { useAuthStore } from "@stores/useAuthStore";

const ButtonUser = () => {
  const { isOpen, referenceRef, dropdownRef, toggle } =
    useDropdown("bottom-end");
  const logout = useAuthStore((state) => state.logout);
  return (
    <li
      className={`dropdown pc-h-item header-user-profile ${
        isOpen ? "drp-show" : ""
      }`}
    >
      <button
        className="pc-head-link dropdown-toggle arrow-none me-0"
        data-pc-toggle="dropdown"
        type="button"
        ref={referenceRef}
        onClick={toggle}
        aria-haspopup="false"
        data-pc-auto-close="outside"
        aria-expanded="false"
      >
        <PiUserBold />
      </button>
      <div
        className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown p-2 overflow-hidden"
        ref={dropdownRef}
      >
        <div className="dropdown-header flex items-center justify-between py-4 px-5 bg-primary-500">
          <div className="flex mb-1 items-center">
            <div className="shrink-0">
              <img
                src="../assets/images/user/avatar-2.jpg"
                alt="user-image"
                className="w-10 rounded-full"
              />
            </div>
            <div className="grow ms-3">
              <h6 className="mb-1 text-white">Juan Benites 🖖</h6>
              <span className="text-white">Juan@example.com</span>
            </div>
          </div>
        </div>
        <div className="dropdown-body py-4 px-5">
          <div className="profile-notification-scroll position-relative max-h[calc(100vh_-_225px)]">
            <a href="#" className="dropdown-item">
              <span className="inline-flex items-center gap-2">
                <PiGearBold />
                <span>Configuracion</span>
              </span>
            </a>
            <div className="grid my-3">
              <button className="btn btn-primary" onClick={logout}>
                <span className="inline-flex items-center justify-center gap-2">
                  <PiSignOutBold />
                  <span>Cerrar Sesion</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ButtonUser;
