import ButtonToggleSedebar from "@components/header/ButtonToggleSidebar";
import ButtonTheme from "@components/header/ButtonTheme";
import ButtonNotifications from "@components/header/ButtonNotifications";
import ButtonUser from "@components/header/ButtonUser";

const Header = () => {
  return (
    <header className="pc-header">
      <div className="header-wrapper flex max-sm:px-[15px] px-[25px] grow">
        {/* botones del menu de la izquierda */}
        <div className="me-auto pc-mob-drp">
          <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
            <ButtonToggleSedebar />
          </ul>
        </div>
        {/* botones del menu de la derecha */}
        <div className="ms-auto">
          <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
            {/* Cambiar tema */}
            <ButtonTheme />
            {/* Notificaciones */}
            <ButtonNotifications />
            {/* Perfil de usuario */}
            <ButtonUser />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
