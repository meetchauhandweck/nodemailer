import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./productModule.scss";

const ProductModule = ({ title, images }) => {
  return (
    <div className="productModule">
      <div className="container">
        <div className="productModule_wrapper">
          <div className="image-section">
            <h2>{title}</h2>
            <div className="image-container">
              {images.map((image, index) => (
                <div key={index} className="image-item">
                  <Link to={image.link}>
                    <img src={image.src} alt={image.caption} />
                    <p className="image-sectiontext">{image.caption}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModule;

ProductModule.propTypes = {
  title: PropTypes.string,
  images: PropTypes.any,
  link: PropTypes.string,
};
