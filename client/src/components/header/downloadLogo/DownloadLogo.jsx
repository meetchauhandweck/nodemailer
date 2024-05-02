import { Link } from "react-router-dom";
import icon from "../../../images/downloadLogo1.svg";
import "./downloadLogo.scss";

const DownloadLogo = () => {
  return (
    <div className="downloadLogo">
      <Link to="/raaj-solar/download">
        <div className="downloadLogo_wrapper">
          <div className="downloadLogo_wrapper_text">Download</div>
          <div className="downloadLogo_wrapper_icon">
            <img src={icon} alt="downloadLogo" />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default DownloadLogo;
