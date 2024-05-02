import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import img2 from "../../images/clientLogo2.png";
import img3 from "../../images/clientLogo3.png";
import img4 from "../../images/clientLogo4.png";
import img1 from "../../images/clientLogo1.png";
import img5 from "../../images/clientLogo5.png";
import img6 from "../../images/clientLogo6.png";
import img7 from "../../images/clientLogo7.png";
import img8 from "../../images/clientLogo8.png";
import img9 from "../../images/clientLogo9.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./logoSlider.scss";
import HomePageCommonHeading from "../homePageCommonHeading/HomePageCommonHeading";

const LogoSlider = () => {
  return (
    <div className="logoSlider">
      <div className="container">
        <div className="wrapper">
          <HomePageCommonHeading heading={"Our Client"} />
          <div className="logoSlider_wrapper">
            <Swiper
              grabCursor={true}
              spaceBetween={30}
              direction="horizontal"
              autoplay={{
                delay: 2000,
              }}
              speed={1000}
              loop={true}
              slidesPerView={6}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="client_slider"
              breakpoints={{
                1199: {
                  slidesPerView: 6,
                },
                991: {
                  slidesPerView: 5,
                },
                767: {
                  slidesPerView: 4,
                },
                575: {
                  slidesPerView: 3,
                },
                320: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="logo">
                  <img src={img1} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img2} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img3} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img4} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img5} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img6} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img7} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img8} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img9} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img1} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img2} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img3} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img4} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img5} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img6} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img7} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img8} alt="clientLogo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="logo">
                  <img src={img9} alt="clientLogo" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoSlider;
