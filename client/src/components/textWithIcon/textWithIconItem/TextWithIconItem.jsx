import PropTypes from "prop-types";
import "./textWithIconItem.scss";

const TextWithIconItem = ({ icon, text }) => {
  return (
    <div className="textWithIconItem">
      <div className="textWithIconItem_wrapper">
        <div className="textWithIconItem_icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="textWithIconItem_text">{text}</div>
      </div>
    </div>
  );
};
export default TextWithIconItem;

TextWithIconItem.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
};
