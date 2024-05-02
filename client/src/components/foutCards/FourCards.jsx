import bgImage from "../../images/fourCardsBgImage.png";
import HomePageCommonHeading from "../homePageCommonHeading/HomePageCommonHeading";
import logo1 from "../../images/RT_logo1.png";
import logo2 from "../../images/RT_logo2.png";
import logo3 from "../../images/RT_logo3.png";
import logo4 from "../../images/RT_logo4.png";
import FourCardItem from "./fourCardItem/FourCardItem";
import "./fourCards.scss";

const fourCardData = [
  { id: 0, image: logo1, link: "https://raajratnaelectrodes.com/" },
  { id: 1, image: logo2, link: " https://raajratna.com/" },
  { id: 2, image: logo3, link: "https://www.raajventures.com/" },
  { id: 3, image: logo4, link: "http://www.ratnashri.co.in/" },
];

const FourCards = () => {
  return (
    <div className="fourCards" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container">
        <div className="wrapper">
          <HomePageCommonHeading heading={"Raajratna Group Of Companies"} />
          <div className="wrapper_inner">
            {fourCardData.map((item) => (
              <FourCardItem key={item.id} image={item.image} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FourCards;
