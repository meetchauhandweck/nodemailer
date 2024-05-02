import { Link } from "react-router-dom";
import "./reachOut.scss";
import icon from "../../images/reachOut_icon.svg";

const ReachOut = () => {
  return (
    <div className="reachOut">
      <div className="container">
        <div className="reachOut_wrapper">
          <div className="big_text">
            Reach out to us and own the solar panel now!
          </div>
          <div className="link">
            <Link to="/contact-us">
              <img src={icon} alt="reachOut_icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
