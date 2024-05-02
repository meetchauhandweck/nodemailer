import "./homePageCommonHeading.scss";
import PropTypes from "prop-types";

const HomePageCommonHeading = ({ heading }) => {
  return (
    <div className="homePageCommonHeading">
      <div className="homePageCommonHeading_text">{heading}</div>
    </div>
  );
};
export default HomePageCommonHeading;

HomePageCommonHeading.propTypes = {
  heading: PropTypes.string,
};
