import PropTypes from "prop-types";

function WarrantyItem({ image, year, text }) {
  return (
    <div className="warrantyItem">
      <div className="warrantyItem_wrapper">
        <img src={image} />
        <p className="year">{year}</p>
      </div>
      <div className="Superiorwarrantytext">{text}</div>
    </div>
  );
}
export default WarrantyItem;

WarrantyItem.propTypes = {
  image: PropTypes.any,
  year: PropTypes.string,
  text: PropTypes.string,
};
