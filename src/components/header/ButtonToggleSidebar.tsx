import { PiListBold } from "react-icons/pi";
import { useSidebarStore } from "@stores/useSidebarStore";

const ButtonPcSedebar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
  const toggleMobileSidebar = useSidebarStore(
    (state) => state.toggleMobileSidebar
  );
  return (
    <>
      <li className="pc-h-item pc-sidebar-collapse max-lg:hidden lg:inline-flex">
        <button
          type="button"
          className="pc-head-link ltr:!ml-0 rtl:!mr-0 cursor-pointer"
          id="sidebar-hide"
          onClick={toggleSidebar}
        >
          <PiListBold />
        </button>
      </li>
      <li className="pc-h-item pc-sidebar-popup lg:hidden cursor-pointer">
        <button
          type="button"
          className="pc-head-link ltr:!ml-0 rtl:!mr-0"
          id="mobile-collapse"
          onClick={toggleMobileSidebar}
        >
          <PiListBold />
        </button>
      </li>
    </>
  );
};

export default ButtonPcSedebar;
