import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import "./logo.scss";
import { useState } from "react";
import PropTypes from "prop-types";

const Logo = ({ handleMenu }) => {
  const [handleWidth, setHandleWidth] = useState(window.innerWidth);
  function handleMobileLogo() {
    setHandleWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleMobileLogo);
  return (
    <div className={`logo`} onClick={handleWidth < 991 ? handleMenu : null}>
      <Link to={"/raaj-solar"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};
export default Logo;

Logo.propTypes = {
  handleMenu: PropTypes.any,
};
