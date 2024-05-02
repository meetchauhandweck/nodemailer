import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.scss";
import { EffectCoverflow, Navigation,Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="big_container">
        <div className="wrapper">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="testimonial_slider"
          >
            <SwiperSlide>
              <div className="card_content">
                <h3>ASV Energy – Dealer Gujarat</h3>
                <div className="content">
                  “RAAJ” has Excellent Manufacturing Facility who offer MBB
                  solar PV Modules with Quality &amp; timely Supply to the
                  customers. Team is knowledgeable , Experienced &amp;
                  supportive for all the queries. That’s why I preferred to RAAJ
                  compared to other Manufacturer.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card_content">
                <h3>ASV Energy – Dealer Gujarat</h3>
                <div className="content">
                  “RAAJ” has Excellent Manufacturing Facility who offer MBB
                  solar PV Modules with Quality &amp; timely Supply to the
                  customers. Team is knowledgeable , Experienced &amp;
                  supportive for all the queries. That’s why I preferred to RAAJ
                  compared to other Manufacturer.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card_content">
                <h3>ASV Energy – Dealer Gujarat</h3>
                <div className="content">
                  “RAAJ” has Excellent Manufacturing Facility who offer MBB
                  solar PV Modules with Quality &amp; timely Supply to the
                  customers. Team is knowledgeable , Experienced &amp;
                  supportive for all the queries. That’s why I preferred to RAAJ
                  compared to other Manufacturer.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card_content">
                <h3>ASV Energy – Dealer Gujarat</h3>
                <div className="content">
                  “RAAJ” has Excellent Manufacturing Facility who offer MBB
                  solar PV Modules with Quality &amp; timely Supply to the
                  customers. Team is knowledgeable , Experienced &amp;
                  supportive for all the queries. That’s why I preferred to RAAJ
                  compared to other Manufacturer.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card_content">
                <h3>ASV Energy – Dealer Gujarat</h3>
                <div className="content">
                  “RAAJ” has Excellent Manufacturing Facility who offer MBB
                  solar PV Modules with Quality &amp; timely Supply to the
                  customers. Team is knowledgeable , Experienced &amp;
                  supportive for all the queries. That’s why I preferred to RAAJ
                  compared to other Manufacturer.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card_content">
                <h3>ASV Energy – Dealer Gujarat</h3>
                <div className="content">
                  “RAAJ” has Excellent Manufacturing Facility who offer MBB
                  solar PV Modules with Quality &amp; timely Supply to the
                  customers. Team is knowledgeable , Experienced &amp;
                  supportive for all the queries. That’s why I preferred to RAAJ
                  compared to other Manufacturer.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card_content">
                <h3>ASV Energy – Dealer Gujarat</h3>
                <div className="content">
                  “RAAJ” has Excellent Manufacturing Facility who offer MBB
                  solar PV Modules with Quality &amp; timely Supply to the
                  customers. Team is knowledgeable , Experienced &amp;
                  supportive for all the queries. That’s why I preferred to RAAJ
                  compared to other Manufacturer.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
