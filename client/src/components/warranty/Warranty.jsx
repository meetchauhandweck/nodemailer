import WarrantyItem from "./WarrantyItem";
import "./warranty.scss";
import image1 from "../../images/warranty1.png";
import image2 from "../../images/warranty2.png";

const Warranty = () => {
  return (
    <div className="Superiorwarranty">
      <div className="container">
        <div className="Superiorwarranty_wrapper">
          <div className="Superiorwarrantytitle">Superior Warranty</div>
          <div className="Superiorwarrantyimg">
            <WarrantyItem
              image={image1}
              year={"year"}
              text={"Product Warranty"}
            />
            <WarrantyItem
              image={image2}
              year={"year"}
              text={"Linear Power Output Warranty"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Warranty;
