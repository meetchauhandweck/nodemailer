import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import img1 from "../../images/productImage4.png";
import img2 from "../../images/productImage2.png";
import img3 from "../../images/productImage3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./productSlider.scss";
// import "swiper/css/effect-fade";
import HomePageCommonHeading from "../homePageCommonHeading/HomePageCommonHeading";
import arrow from "../../images/slider_arrow.svg";
import { Link } from "react-router-dom";
// import ProductSliderItem from "./productSliderItem/ProductSliderItem";

const ProductSlider = () => {
  return (
    <div className="productSlider">
      <div className="wrapper">
        <Swiper
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          speed={1000}
          navigation={{
            nextEl: ".productSlider .right",
            prevEl: ".productSlider .left",
            // disabledClass: "swiper-button-disabled",
          }}
          modules={[Navigation, EffectFade, Autoplay]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card1">
                <HomePageCommonHeading heading={"Our Product"} />
                <div className="card1_inner">
                  <div className="info">
                    {"TOPCon"}
                    <br />
                    {/* {"CRYSTALLINE"} */}
                  </div>
                  <div className="details">
                    {
                      "TOPCon Solar Modules Utilize Half-Cut Cells Produced Using Non-Destructive Cell Cutting (NDC). TOPCon Cells Convert More Sunlight That P-Type Cells, Which Results In A Higher Cell And Module Efficiency. TOPCon Cells Can Reach 28% Efficiency (The PERC Cell Maximum Efficiency Is Around 24%)."
                    }
                  </div>
                  <div className="link">
                    <Link to="/raaj-solar/topcon">
                      See more
                      <span>
                        <img src={arrow} alt="arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="index">01</div>
                </div>
              </div>
              <div className="card2">
                <img src={img1} alt="none" className="imgg"></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card1">
                <HomePageCommonHeading heading={"Our Product"} />
                <div className="card1_inner">
                  <div className="info">
                    {"MONO"}
                    <br />
                    {"PERC"}
                  </div>
                  <div className="details">
                    {
                      "Assembled with MBB PERC cells, the half-cell configuration of the modules offers the advantages of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical loading. Reduce BoS & Ideally used for Ground Mounted, Industrial & Commercial Projects."
                    }
                  </div>
                  <div className="link">
                    <Link to="/raaj-solar/mono-perc">
                      See more
                      <span>
                        <img src={arrow} alt="arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="index">02</div>
                </div>
              </div>
              <div className="card2">
                <img src={img2} alt="none" className="imgg"></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="productSliderCardItem">
              <div className="card1">
                <HomePageCommonHeading heading={"Our Product"} />
                <div className="card1_inner">
                  <div className="info">
                    {"MONO"}
                    <br />
                    {"Bi-Facial"}
                  </div>
                  <div className="details">
                    {
                      "Bifacial solar panels represent a type of photovoltaic module designed to capture sunlight from both the front and rear sides, maximizing energy production.  The front side of a bifacial solar panel operates similarly to traditional monofacial panels, absorbing sunlight and converting it into electricity through the photovoltaic effect. What distinguishes bifacial panels is their ability to capture additional sunlight from the rear side, which reflects off surfaces such as the ground or nearby structures. To optimize rear-side light absorption, bifacial solar panels are often installed on surfaces that reflect light well, such as white gravel or a reflective material."
                    }
                  </div>
                  <div className="link">
                    <Link to="/raaj-solar/mono-bi-facial">
                      See more
                      <span>
                        <img src={arrow} alt="arrow" />
                      </span>
                    </Link>
                  </div>
                  <div className="index">03</div>
                </div>
              </div>
              <div className="card2">
                <img src={img3} alt="none" className="imgg"></img>
              </div>
            </div>
          </SwiperSlide>
          <div className="slider_btn">
            <div className="left">
              <img src={arrow} alt="slider_arrow" />
            </div>
            <div className="right">
              <img src={arrow} alt="slider_arrow" />
            </div>
          </div>
          {/* <SwiperNavButtons /> */}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
