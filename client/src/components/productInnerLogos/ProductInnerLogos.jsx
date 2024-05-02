import logo1 from "../../images/productLogo1.png";
import logo2 from "../../images/productLogo2.png";
import logo3 from "../../images/productLogo3.png";
import logo4 from "../../images/productLogo4.png";
import logo5 from "../../images/productLogo5.png";
import logo6 from "../../images/productLogo6.png";
import ProductInnerLogoItem from "./ProductInnerLogoItem";
import "./productInnerLogos.scss";

const productLogos = [
  {
    image: logo1,
  },
  {
    image: logo2,
  },
  {
    image: logo3,
  },
  {
    image: logo4,
  },
  {
    image: logo5,
  },
  {
    image: logo6,
  },
];

const ProductInnerLogos = () => {
  return (
    <div className="productInnerLogos">
      <div className="container">
        <div className="productInnerLogos_wrapper">
          {productLogos.map((item, index) => (
            <ProductInnerLogoItem key={index} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductInnerLogos;
