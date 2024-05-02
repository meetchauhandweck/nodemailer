import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductLinkCardItem = ({ text1, text2, link }) => {
  return (
    <Link to={link}>
      <div className="productLinkCardItem">
        <h2>
          {text1}
          <br />
          {text2}
        </h2>
      </div>
    </Link>
  );
};
export default ProductLinkCardItem;

ProductLinkCardItem.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  link: PropTypes.string,
};
