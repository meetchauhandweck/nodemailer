import { useLocation } from "react-router-dom";
import ProductLinkCardItem from "./ProductLinkCardItem";
import "./productLinkCards.scss";

const productLinkCardsData = [
  {
    text1: "TOP",
    text2: "Con",
    link: "/raaj-solar/topcon",
  },
  {
    text1: "MONO",
    text2: "PERC",
    link: "/raaj-solar/mono-perc",
  },
  {
    text1: "MONO",
    text2: "BI-Facial",
    link: "/raaj-solar/mono-bi-facial",
  },
];

const ProductLinkCards = () => {
  const location = useLocation();
  return (
    <div className="productLinkCards">
      <div className="productLinkCards_wrapper">
        {productLinkCardsData.map(
          (item, index) =>
            location.pathname !== item.link && (
              <ProductLinkCardItem
                key={index}
                text1={item.text1}
                text2={item.text2}
                link={item.link}
              />
            )
        )}
      </div>
    </div>
  );
};
export default ProductLinkCards;
