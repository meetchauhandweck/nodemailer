import Slider from "react-slick";
import pic1 from "../../images/clientLogo1.png";
import pic2 from "../../images/clientLogo1.png";
import pic3 from "../../images/clientLogo1.png";
import pic4 from "../../images/clientLogo1.png";
import pic5 from "../../images/clientLogo1.png";
import { useState } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";
import HomePageCommonHeading from "../homePageCommonHeading/HomePageCommonHeading";

const SliderSection = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [
    {
      pic: pic1,
      heading: "ASV Energy – Dealer Gujarat",
      content:
        "“RAAJ” has Excellent Manufacturing Facility who offer MBB solar PV Modules with Quality & timely Supply to the customers. Team is knowledgeable, Experienced & supportive for all the queries. That’s why I preferred to RAAJ compared to other Manufacturer.",
    },
    {
      pic: pic1,
      heading: "Pingakash energy – Dealer Madhya Pradesh",
      content:
        "“RAAJ” has presence PAN India. As I’m located in MP, We get RAAJ Panels easily & timely delivered at our sites. They have smooth supply chain which makes it easy for us to receive panels at any of our sites in India.",
    },
    {
      pic: pic1,
      heading: "Infinity Solar – Dealer Gujarat",
      content:
        "India’s best solar panels manufacturing company, easy way to no reach this company. Company making best Solar Modules.",
    },
    {
      pic: pic1,
      heading: "Nes Energy – Dealer Gujarat",
      content:
        "“RAAJ” – is continuously Working to develop their products according to market standards to fulfill their customer’s requirements. Panels have high quality & proven generation to convince the customers. We are extremely satisfied with the panels supplied by RAAJ.",
    },

    // pic2,
    // pic3,
    // pic4,
    // pic5,
  ];
  const settings = {
    infinite: true, //to allow the slides to show infinitely
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    focusOnSelect: true,
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
         
        },
      },
    ],
  };

  return (
    <div className="test_slider">
      <div className="container">
        <HomePageCommonHeading heading={"OUR testimonials"} />
        <div className="test_slider_wrapper">
          {/* <h1>React 3D Slider</h1> */}
          <Slider {...settings}>
            {images.map((item, idx) => (
              <div
                key={idx}
                className={idx === imgIndex ? "slide activeSlide" : "slide"}
              >
                <div className="card_content">
                  <h3>{item.heading}</h3>
                  <div className="content">{item.content}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
