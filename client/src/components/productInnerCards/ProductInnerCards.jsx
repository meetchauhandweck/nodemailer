import ProductInnerCardItem from "./ProductInnerCardItem";
import "./productInnerCards.scss";

const ProductInnerCards = () => {
  return (
    <div className="productInnerCards">
      <div className="container">
        <div className="productInnerCards_wrapper">
          <div className="productInnerCards_wrapper_inner">
            <ProductInnerCardItem
              backgroundColor="#002D70"
              title="Reliable Quality"
              bullets={[
                " High Energy Yield on field performance",
                "Anti - reflective surface to reduce power loss",
                "100% EL inspection ensure modules are defect free",
                " Application class C, Safety class II",
              ]}
            />
            <ProductInnerCardItem
              backgroundColor=" #007DC5"
              title="Certification"
              bullets={[
                "IS/IES 61730 (Part I) : 2004 & IS/IEC 61730 (Part II) : 2004 UL Certified IEC 61701 & IEC 61853-1",
                "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018 Certified",
                "BIS/IS 14286:2010 / IEC 61215:2005",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInnerCards;
