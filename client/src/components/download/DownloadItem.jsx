import "./download.scss"; // Import your CSS file for styling
import PropTypes from "prop-types";
import downloadIcon from "../../images/downloadItem.svg";
import { Link } from "react-router-dom";

const DownloadItem = ({ title, cardsData }) => {
  return (
    <div className="card-container">
      <p className="main-title">{title}</p>
      <div className="cards">
        {cardsData.map((card, index) => (
          <div className="cards_wrapper" key={index}>
            <div className="cards_inner">
              <Link to={card.file} target="_blank">
                <div className="card">
                  <h3 className="downloadtext">{card.title}</h3>
                  <img src={downloadIcon} alt="downloadItem" />
                </div>
              </Link>
              {/* <p className="cardtitle">{card.title}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadItem;

DownloadItem.propTypes = {
  title: PropTypes.string,
  cardsData: PropTypes.any,
};
