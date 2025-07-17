import { PiGearBold, PiSunBold, PiMoonBold } from "react-icons/pi";
import { useDropdown } from "@hooks/useDropdown";
import { useThemeStore } from "@stores/usethemeStore";

const ButtonTheme = () => {
  const { isOpen, referenceRef, dropdownRef, toggle } =
    useDropdown("bottom-end");

  const { setTheme } = useThemeStore();

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
        <PiSunBold />
      </button>
      <div
        className="dropdown-menu dropdown-menu-end pc-h-dropdown"
        ref={dropdownRef}
      >
        <button className="dropdown-item" onClick={() => setTheme("dark")}>
          <PiMoonBold />
          <span>Oscuro</span>
        </button>
        <button className="dropdown-item" onClick={() => setTheme("light")}>
          <PiSunBold />
          <span>Claro</span>
        </button>
        <button className="dropdown-item" onClick={() => setTheme("default")}>
          <PiGearBold />
          <span>Por Defecto</span>
        </button>
      </div>
    </li>
  );
};

export default ButtonTheme;
