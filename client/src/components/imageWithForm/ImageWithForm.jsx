import Form from "../form/Form";
import "./imageWithForm.scss";
import PropTypes from "prop-types";

const ImageWithForm = ({ image }) => {
  return (
    <div className="imageWithForm">
      <div className="imageWithForm_wrapper">
        <img src={image} alt="form_banner" />
        <Form />
      </div>
    </div>
  );
};
export default ImageWithForm;

ImageWithForm.propTypes = {
  image: PropTypes.any,
};
