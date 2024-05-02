import "./footer.scss";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import youtube from "../../images/youtube.svg";
import whatsapp from "../../images/whatsapp.svg";
import linkedin from "../../images/linkedin.svg";
import { Link, useLocation } from "react-router-dom";
import Form from "../form/Form";
const Footer = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="footer">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper_f1">
            <div className="f1">
              <h3>About Company</h3>
              <p>
                We are one of the best Crystalline Solar PV Modules
                Manufacturers India with an exceptionally solid client base PAN
                India.
              </p>
            </div>
          </div>
          <div className="f2">
            <div className="col1">
              <h2>Useful Links</h2>
              <div className="f3">
                <Link to="/raaj-solar/about-us">About</Link>
              </div>
              <div className="f3">
                <Link to="/raaj-solar/management">Management</Link>
              </div>
              <div className="f3">
                <Link to="/raaj-solar/blog">Blogs</Link>
              </div>
            </div>
            <div className="col2">
              <h2>Quick Links</h2>

              <div className="f3">
                <Link to="/raaj-solar/products">Products</Link>
              </div>
              <div className="f3">
                <Link to="/raaj-solar/career">Career</Link>
              </div>
              <div className="f3">
                <Link to="/raaj-solar/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="col3">
              <h2>Contact</h2>
              <div className="address">
                1402, 14th floor, Phoenix, Vijay Cross Rd, Navrangpura,
                Ahmedabad - 380009{" "}
                <Link to={"mailto:marketing@raajsolar.com"}>
                  marketing@raajsolar.com
                </Link>
              </div>
              <div className="link">
                <Link to={"tel:9925031915"}>+91 99250 31915</Link>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="copyright_text">
              Copyright &copy; 2024 Raaj Solar, All Right Reserved. Designed &
              Developed by
              <span>
                <Link target="_blank" to="https://www.humbeestudio.com/">
                  {"H/DS"}
                </Link>
              </span>
            </div>
            <div className="icons">
              <Link to="https://www.facebook.com/raajsolarpv" target="_blank">
                <div className="icon">
                  <img src={facebook} alt="facebook" />
                </div>
              </Link>
              <Link to="https://www.instagram.com/raajsolar/" target="_blank">
                <div className="icon">
                  <img src={instagram} alt="instagram" />
                </div>
              </Link>
              <Link
                to="https://www.youtube.com/channel/UClTvd-G682IozFadbSzBz4w"
                target="_blank"
              >
                <div className="icon">
                  <img src={youtube} alt="youtube" />
                </div>
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=https://wa.link/vzs04n&text=Hello%20Raaj%20Solar%20%20I%20am%20Looking%20For%20"
                target="_blank"
              >
                <div className="icon">
                  <img src={whatsapp} alt="whatsapp" />
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/company/66936534/admin/"
                target="_blank"
              >
                <div className="icon">
                  <img src={linkedin} alt="linkedin" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {location.pathname === "/raaj-solar" && <Form />}
    </div>
  );
};
export default Footer;
