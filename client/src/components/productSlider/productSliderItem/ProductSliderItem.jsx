import HomePageCommonHeading from "../../homePageCommonHeading/HomePageCommonHeading";
import { SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import "./productSliderItem.scss";

const ProductSliderItem = ({ topHeading, bottomHeading, content, image }) => {
  return (
    <SwiperSlide>
      <div className="productSliderCardItem">
        <div className="card1">
          <HomePageCommonHeading heading={"Our Product"} />
          <div className="card1_inner">
            <div className="info">
              {topHeading}
              <br />
              {bottomHeading}
            </div>
            <div className="details">{content}</div>
          </div>
        </div>
        <div className="card2">
          <img src={image} alt="none" className="imgg"></img>
        </div>
      </div>
    </SwiperSlide>
  );
};
export default ProductSliderItem;

ProductSliderItem.propTypes = {
  topHeading: PropTypes.string,
  bottomHeading: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.any,
};
