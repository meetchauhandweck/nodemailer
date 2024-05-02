import { Link } from "react-router-dom";
import "./navbar.scss";
import downloadLogo from "../../../images/downloadLogo1.svg";
import PropTypes from "prop-types";

const Navbar = ({ handleMenu, open }) => {
  return (
    <div className="navbar">
      <div
        className={`mobileMenu_icon ${open ? "active" : null}`}
        onClick={handleMenu}
      >
        {/* Menu */}
        <span className="line1"></span>
        <span className="line2"></span>
      </div>
      <div className={`navbar_wrapper ${open ? "active" : null}`}>
        <ul>
          <li onClick={handleMenu} className="mobile_home">
            <Link to="/raaj-solar">Home</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/raaj-solar/about-us">
              About<span style={{ paddingLeft: "5px" }}>us</span>
            </Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/raaj-solar/management">Management</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/raaj-solar/products">Products</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/raaj-solar/blog">Blog</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/raaj-solar/career">Career</Link>
          </li>
          <li onClick={handleMenu}>
            <Link to="/raaj-solar/contact-us">
              Contact<span style={{ paddingLeft: "5px" }}>Us</span>
            </Link>
          </li>
          <li onClick={handleMenu} className="downloadLogoMObile">
            <Link to={"/raaj-solar/download"}>
              Download<span style={{ paddingLeft: "5px" }}> Now</span>
              <img
                src={downloadLogo}
                alt="downloadLogo"
                style={{ marginLeft: "10px" }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  handleMenu: PropTypes.any,
  open: PropTypes.any,
};
