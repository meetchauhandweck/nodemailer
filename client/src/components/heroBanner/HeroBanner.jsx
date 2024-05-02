import "./heroBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import video from "../../images/banner_video.mp4";
import image from "../../images/heroImage.png";
import { SliderBtn } from "./SliderBtn";

const HeroBanner = () => {
  const renderCustomBullet = (index, className, isActive) => {
    const backgroundColor = isActive ? "blue" : "white";
    const width = isActive ? "10px" : "100px";
    return `<span class="${className} custom-bullet" ><span class="slideIndex">${
      "0" + (index + 1)
    }</span></span>`;
  };
  return (
    <div className="heroBanner">
      <Swiper
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        className="mySwiper"
        pagination={{
          clickable: true,
          renderBullet: renderCustomBullet,
        }}
      >
        <SwiperSlide>
          <div className="banner_slider_wrapper">
            <div className="banner_slider_inner">
              {/* <img src={rectimg} alt="none" className="rectimg"></img> */}
              <video
                src={video}
                autoPlay
                muted
                loop
                className="rectimg"
              ></video>
            </div>
            <div className="text">
              INDIA'S MOST RELIABLE <br />
              SOLAR PANELS MANUFACTURING COMPANY
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner_slider_wrapper">
            <div className="banner_slider_inner">
              <img src={image} alt="none" className="rectimg"></img>
            </div>
            <div className="text">
              INDIA'S MOST RELIABLE <br />
              SOLAR PANELS MANUFACTURING COMPANY
            </div>
          </div>
        </SwiperSlide>
        {/* <SliderBtn /> */}
        {/* <div className="swiper_btn">
          <div className="left"></div>
          <div className="right"></div>
        </div> */}
      </Swiper>
    </div>
  );
};
export default HeroBanner;
