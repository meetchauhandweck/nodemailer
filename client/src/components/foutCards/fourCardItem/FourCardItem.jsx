import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./fourCardItem.scss";

const FourCardItem = ({ image, link }) => {
  return (
    <div className="fourCardItem">
      <div className="fourCardItem_wrapper">
        <div className="fourCardItem_wrapper_logo">
          <img src={image} alt="RT_logo" />
        </div>
        <div className="fourCardItem_wrapper_link">
          <Link to={link}>Read more</Link>
        </div>
      </div>
    </div>
  );
};
export default FourCardItem;

FourCardItem.propTypes = {
  image: PropTypes.any,
  link: PropTypes.string,
};
