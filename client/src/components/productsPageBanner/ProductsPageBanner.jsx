import { Link } from "react-router-dom";
import "./productsPageBanner.scss";
import arrow from "../../images/whiteArrow.svg";
import PropTypes from "prop-types";

function ProductsPageBanner({ image, heading, text, link }) {
  return (
    <div className="productPageBanner">
      <div className="container">
        <div className="productPageBanner_wrapper">
          <div className="productPageBanner_wrapper_image">
            <img src={image} alt="productPageBanner_image" />
          </div>
          <div className="productPageBanner_wrapper_inner">
            <div className="productPageBanner_wrapper_inner_wrapper">
              <h2>{heading}</h2>
              <div className="content">{text}</div>
              <div className="link">
                <Link to={link} target={`_blank`}>
                  BROCHURE <img src={arrow} alt="whiteArrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPageBanner;

ProductsPageBanner.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};
