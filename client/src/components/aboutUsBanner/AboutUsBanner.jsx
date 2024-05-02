import image from "../../images/aboutUsBanner.png";
import "./aboutUsBanner.scss";

const AboutUsBanner = () => {
  return (
    <div className="aboutUsBanner">
      <div className="aboutUsBanner_wrapper">
        <img src={image} alt="aboutUsBanner" />
      </div>
    </div>
  );
};
export default AboutUsBanner;
