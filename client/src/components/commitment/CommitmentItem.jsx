import PropTypes from "prop-types";

const CommitmentItem = ({ icon, topText, bottomText }) => {
  return (
    <div className="container_circle">
      <div className="circle">
        <img src={icon} alt="none" />
      </div>
      <div className="container_text">
        {topText} <br /> {bottomText}
      </div>
    </div>
  );
};
export default CommitmentItem;

CommitmentItem.propTypes = {
  icon: PropTypes.any,
  topText: PropTypes.string,
  bottomText: PropTypes.string,
};
