import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import "./header.scss";
import "../../variables.scss";
import DownloadLogo from "./downloadLogo/DownloadLogo";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  function handleMobileMenu() {
    setShowMenu(!showMenu);
  }
  if (showMenu && window.innerWidth < 992) {
    document.body.classList.add("mobile_menu_open");
  } else {
    document.body.classList.remove("mobile_menu_open");
  }
  return (
    <div className="header" id="hide-header">
      <div className="header_wrapper">
        <Logo handleMenu={handleMobileMenu} />
        <Navbar handleMenu={handleMobileMenu} open={showMenu} />
        <DownloadLogo />
      </div>
    </div>
  );
};
export default Header;


