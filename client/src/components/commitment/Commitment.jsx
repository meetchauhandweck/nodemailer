import "./commitment.scss";
import icon1 from "../../images/commitment_icon1.svg";
import icon2 from "../../images/commitment_icon2.svg";
import icon3 from "../../images/commitment_icon3.svg";
import icon4 from "../../images/commitment_icon4.svg";
import CommitmentItem from "./CommitmentItem";

const commitmentData = [
  {
    id: 0,
    icon: icon1,
    topText: "Assured",
    bottomText: "Quality",
  },
  {
    id: 1,
    icon: icon2,
    topText: "Product ",
    bottomText: "Warranty",
  },
  {
    id: 2,
    icon: icon3,
    topText: "Linear ",
    bottomText: "Output Warranty",
  },
  {
    id: 3,
    icon: icon4,
    topText: "After ",
    bottomText: "sales-service",
  },
];

function OurCommitment() {
  return (
    <div className="commitment">
      <div className="commitment_container">
        <div className="commitment_title">Our Commitment</div>
        <div className="image-container">
          {/* <div className="container_circle">
          <div className="circle">
            <img src={icon1} alt="none" />
          </div>
          <div className="container_text">
            Assured <br />
            Quality
          </div>
        </div>
        <div className="container_circle">
          <div className="circle">
            <img src={icon2} alt="none" />
          </div>
          <div className="container_text">
            Product <br />
            Warranty
          </div>
        </div>
        <div className="container_circle">
          <div className="circle">
            <img src={icon3} alt="none" />
          </div>
          <div className="container_text">
            Linear <br />
            Output Warranty
          </div>
        </div>
        <div className="container_circle">
          <div className="circle">
            <img src={icon4} alt="none" />
          </div>
          <div className="container_text">
            After <br />
            sales-service
          </div>
        </div> */}
          {commitmentData.map((item) => (
            <CommitmentItem
              key={item.id}
              icon={item.icon}
              topText={item.topText}
              bottomText={item.bottomText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCommitment;
