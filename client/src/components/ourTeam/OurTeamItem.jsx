import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import mailImage from "../../images/teamMail.svg";
import linkedinImage from "../../images/teamLinkedin.svg";

const OurTeamItem = ({ image, title, subTitle, mailLink, linkedInLink }) => {
  return (
    <div className="ourTeamItem">
      <div className="ourTeamItem_wrapper">
        <div className="ourTeamItem_wrapper_image">
          <img src={image} alt={title} />
        </div>
        <div className="ourTeamItem_wrapper_inner">
          <div className="title">{title}</div>
          <div className="sub_title">{subTitle}</div>
          <div className="links">
            {/* <Link to={mailLink} className="mail">
              <img src={mailImage} alt="mail" />
            </Link> */}
            <Link to={linkedInLink} className="linkedin">
              <img src={linkedinImage} alt="linkedin" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTeamItem;
OurTeamItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  // mailLink: PropTypes.string,
  linkedInLink: PropTypes.string,
};
