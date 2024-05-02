import image from "../../images/icon_with_text_bg_image.png";
import HomePageCommonHeading from "../homePageCommonHeading/HomePageCommonHeading";
import icon1 from "../../images/usp1.svg";
import icon2 from "../../images/usp2.svg";
import icon3 from "../../images/usp3.svg";
import icon4 from "../../images/usp4.svg";
import icon5 from "../../images/usp5.svg";
import icon6 from "../../images/usp6.svg";
import TextWithIconItem from "./textWithIconItem/TextWithIconItem";
import "./textWithIcon.scss";

const textWithIconData = [
  {
    id: 0,
    icon: icon1,
    text: "12+ years of Manufacturing Experience",
  },
  {
    id: 1,
    icon: icon2,
    text: "Availability of Pan file toget Esteem generation",
  },
  {
    id: 2,
    icon: icon3,
    text: "Legacy with over 2500+cr turnover",
  },
  {
    id: 3,
    icon: icon4,
    text: "Single point of Contact for sales & Service support",
  },
  {
    id: 4,
    icon: icon5,
    text: "Assured Quality Products",
  },
  {
    id: 5,
    icon: icon6,
    text: "No MOQ Required",
  },
];

const TextWithIcon = () => {
  return (
    <div className="textWithIcon" style={{ backgroundImage: `url(${image})` }}>
      <div className="small_container">
        <div className="textWithIcon_wrapper">
          <HomePageCommonHeading heading={"Our Usp"} />
          <div className="textWithIcon_inner">
            {textWithIconData.map((item) => (
              <TextWithIconItem
                key={item.id}
                icon={item.icon}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextWithIcon;
