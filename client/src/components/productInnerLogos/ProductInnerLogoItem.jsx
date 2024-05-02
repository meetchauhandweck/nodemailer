import PropTypes from "prop-types";

const ProductInnerLogoItem = ({ image }) => {
  return (
    <div className="productInnerLogoItem">
      <img src={image} alt="productLogo" />
    </div>
  );
};
export default ProductInnerLogoItem;

ProductInnerLogoItem.propTypes = {
  image: PropTypes.any,
};
