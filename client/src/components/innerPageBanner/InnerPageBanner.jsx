import PropTypes from "prop-types";
import "./innerPageBanner.scss";

const InnerPageBanner = ({ image, heading, subHeading }) => {
  return (
    <div
      className="innerPageBanner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* <div className="big_container"> */}
      <div className="innerPageBanner_wrapper">
        {heading !== "" && <h1>{heading}</h1>}
        {subHeading !== "" && <div className="largeText">{subHeading}</div>}
      </div>
      {/* </div> */}
    </div>
  );
};

export default InnerPageBanner;

InnerPageBanner.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};
