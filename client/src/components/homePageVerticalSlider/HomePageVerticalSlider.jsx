import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import arrow from "../../images/slider_arrow.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./homePageVerticalSlider.scss";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const HomePageVerticalSlider = () => {
  const [screen, setScreen] = useState(window.innerWidth);

  function handleScreen() {
    setScreen(window.innerWidth);
  }
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Get stats in an array to process one by one
    let stats = Array.from(document.querySelectorAll(".text_counter"));

    // Recursive function
    function countOne(stats) {
      if (stats.length < 1) {
        return; // When all stats are done, exit
      }
      let stat = stats.shift(); // Remove the first stat

      // Make the card visible
      stat.parentElement.style.visibility = "visible";

      let count = stat;
      let zero = {
        val: 0,
      };
      let num = parseFloat(count.getAttribute("data-number"));
      let split = (num + "").split(".");
      let decimals = split.length > 1 ? split[1].length : 0;

      // If it's not a number, then skip counting
      if (typeof num === "number") {
        gsap.to(zero, {
          val: num,
          duration: 2,
          scrollTrigger: stat,
          onUpdate: function () {
            let numText = zero.val.toFixed(decimals);
            numText = numText.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
            count.textContent = numText;
          },
          onComplete: function () {
            countOne(stats);
          },
        });
      } else {
        count.textContent = num;
        countOne(stats);
      }
    }

    // Initiate counting
    countOne(stats);
  }, []);

  window.addEventListener("resize", handleScreen);
  return (
    <div className="homePageVerticalSlider">
      <div className="homePageVerticalSlider_wrapper">
        <Swiper
          // effect="coverflow"
          grabCursor={true}
          direction={screen < 600 ? "horizontal" : "vertical"}
          slidesPerView={1}
          speed={1000}
          autoplay={{
            delay: 3000,
          }}
          navigation={{
            nextEl: ".homePageVerticalSlider_wrapper_item_slider .right",
            prevEl: ".homePageVerticalSlider_wrapper_item_slider .left",
            // disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            //pagination(dots)
            el: ".homePageVerticalSlider_dots",
          }}
          loop={true}
          modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
          className="homePageVerticalSlider_wrapper_item_slider"
        >
          <SwiperSlide>
            <div className="homePageVerticalSlider_wrapper_item">
              <div className="homePageVerticalSlider_wrapper_item_left">
                <h3>Module Supplied</h3>
              </div>
              <div className="homePageVerticalSlider_wrapper_item_right">
                <h2>
                  <span className="text_counter" data-number="70">
                    70
                  </span>
                  MW+
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homePageVerticalSlider_wrapper_item">
              <div className="homePageVerticalSlider_wrapper_item_left">
                <h3>Customers</h3>
              </div>
              <div className="homePageVerticalSlider_wrapper_item_right">
                <h2>
                  <span className="text_counter" data-number=" 4500">
                    4,500
                  </span>
                  +
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homePageVerticalSlider_wrapper_item">
              <div className="homePageVerticalSlider_wrapper_item_left">
                <h3>Channel Partners</h3>
              </div>
              <div className="homePageVerticalSlider_wrapper_item_right">
                <h2>
                  <span className="text_counter" data-number="380">
                    380
                  </span>
                  +
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="homePageVerticalSlider_wrapper_item">
              <div className="homePageVerticalSlider_wrapper_item_left">
                <h3>Team Members</h3>
              </div>
              <div className="homePageVerticalSlider_wrapper_item_right">
                <h2>
                  <span className="text_counter" data-number="85">
                    85
                  </span>
                  +
                </h2>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="homePageVerticalSlider_wrapper_item">
              <div className="homePageVerticalSlider_wrapper_item_left">
                <h3>Module Supplied</h3>
              </div>
              <div className="homePageVerticalSlider_wrapper_item_right">
                <h2>70MW+</h2>
              </div>
            </div>
          </SwiperSlide> */}
          <div className="slider_btn">
            <div className="left">
              <img src={arrow} alt="slider_arrow" />
            </div>
            <div className="right">
              <img src={arrow} alt="slider_arrow" />
            </div>
          </div>
          <div className="homePageVerticalSlider_dots"></div>
        </Swiper>
      </div>
    </div>
  );
};
export default HomePageVerticalSlider;
