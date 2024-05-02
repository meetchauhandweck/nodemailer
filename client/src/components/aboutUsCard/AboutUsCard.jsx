import AboutUsCardItem from "./AboutUsCardItem/AboutUsCardItem";
import "./aboutUsCard.scss";

const aboutUsCardData = [
  {
    title: "Mission",
    content:
      "To be a global exporter in corporations engraving our notion of sustainable alternatives in the mind of millions through our contribution of supplying environment friendly & affordable solar panels to each and every industrial and residential sector, globally.",
  },
  {
    title: "Vision",
    content:
      " Our ambition is to maintain our leadership position in the Solar PV Module manufacturing Industry. As well as stick to delivering highly efficient solar panels. To make the world green by using renewable energy to save the earth.",
  },
  {
    title: "Core Value",
    content:
      " We strongly believe in delivering Superior quality Solar PV Modules with constant advancement in Technology.",
  },
];

const AboutUsCard = () => {
  return (
    <div className="aboutUsCard">
      <div className="container">
        <div className="aboutUsCard_wrapper">
          {aboutUsCardData.map((item, index) => (
            <AboutUsCardItem
              key={index}
              heading={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutUsCard;
