import { PiBellBold } from "react-icons/pi";
import { useDropdown } from "@hooks/useDropdown";

const ButtonNotifications = () => {
  const { isOpen, referenceRef, dropdownRef, toggle } =
    useDropdown("bottom-end");

  return (
    <li className={`dropdown pc-h-item ${isOpen ? "drp-show" : ""}`}>
      <button
        className="pc-head-link dropdown-toggle me-0 cursor-pointer"
        data-pc-toggle="dropdown"
        ref={referenceRef}
        onClick={toggle}
        type="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        <PiBellBold />
        <span className="badge bg-success-500 text-white !px-[0.6em] !py-[0.35em] !rounded-full z-10 absolute right-0 top-0">
          3
        </span>
      </button>
      <div
        className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown p-2"
        ref={dropdownRef}
      >
        <div className="dropdown-header flex items-center justify-between py-4 px-5">
          <h5 className="m-0">Notificaciones</h5>
          <a href="#!" className="btn btn-link btn-sm">
            Marcar como leido
          </a>
        </div>
        <div className="dropdown-body header-notification-scroll relative py-4 px-5 max-height[calc(100vh_-_215px)]">
          <p className="text-span mb-3">Hoy</p>
          <div className="card mb-2">
            <div className="card-body">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <img
                    className="img-radius w-12 h-12 rounded-0"
                    src="../assets/images/user/avatar-2.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div className="grow">
                  <span className="float-end text-sm text-muted">
                    hace 1 hora
                  </span>
                  <h5 className="text-body mb-2">Message</h5>
                  <p className="mb-0">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-span mb-3 mt-4">Ayer</p>
          <div className="card mb-2">
            <div className="card-body">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <img
                    className="img-radius w-12 h-12 rounded-0"
                    src="../assets/images/user/avatar-3.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div className="grow ms-3">
                  <span className="float-end text-sm text-muted">
                    hace 2 dias
                  </span>
                  <h5 className="text-body mb-2">Forms</h5>
                  <p className="mb-0">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-2">
          <a
            href="#!"
            className="text-danger-500 hover:text-danger-600 focus:text-danger-600 active:text-danger-600"
          >
            Limpiar todas las notificaciones
          </a>
        </div>
      </div>
    </li>
  );
};

export default ButtonNotifications;
