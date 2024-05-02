import { useState } from "react";
import { useSwiper } from "swiper/react";
// import "./button.css";

export const SliderBtn = () => {
  const swiper = useSwiper();
  const [activeSlide, setActiveSlide] = useState(false);

  document.getQuerySelector()

  return (
    <div className="swiper-navbar-btns">
      <div className="">
        <div className="textblue">01</div>
        <button
          onClick={() => swiper.slidePrev()}
          className="prevnavbar"
        ></button>
      </div>
      <div className="">
        <div className="textblue">02</div>
        <button
          onClick={() => swiper.slideNext()}
          className="nextnavbar"
        ></button>
        <div className="textblue">Company video</div>
      </div>
    </div>
  );
};
