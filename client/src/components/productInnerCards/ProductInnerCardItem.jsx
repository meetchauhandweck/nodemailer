import PropTypes from "prop-types";
const ProductInnerCardItem = ({ backgroundColor, title, bullets }) => {
  return (
    <div
      className="productinfocard"
      style={{ backgroundColor: backgroundColor }}
    >
      <h2 className="productinfocardtitle">{title}</h2>

      <ul className="productinfocardtitleul">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInnerCardItem;
ProductInnerCardItem.propTypes = {
  backgroundColor: PropTypes.string,
  title: PropTypes.string,
  bullets: PropTypes.array,
};
