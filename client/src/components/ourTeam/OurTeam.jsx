import team1 from "../../images/team1.png";
import team2 from "../../images/team2.png";
import team3 from "../../images/team3.png";
import team4 from "../../images/team4.png";
import OurTeamItem from "./OurTeamItem";
import "./ourTeam.scss";

const teamData = [
  {
    id: 0,
    image: team1,
    title: "Ronak Parikh",
    subTitle: "Sales Manager",
    mailLink: "/",
    linkedinLink: "/",
  },
  {
    id: 1,
    image: team2,
    title: "Yagnesh Patel",
    subTitle: "Purchase Manager",
    mailLink: "/",
    linkedinLink: "/",
  },
  {
    id: 2,
    image: team3,
    title: "Adarsh Singh",
    subTitle: "Business Development Manager",
    mailLink: "/",
    linkedinLink: "/",
  },
  {
    id: 3,
    image: team4,
    title: "Pritesh Patel",
    subTitle: "Operation Manager",
    mailLink: "/",
    linkedinLink: "/",
  },
];

const OurTeam = () => {
  return (
    <div className="ourTeam">
      <div className="ourTeam_wrapper">
        <div className="container">
          <div className="ourTeam_wrapper_heading">
            <h2>Meet Our Exclusive Team Members</h2>
          </div>
        </div>
        <div className="ourTeam_wrapper_inner">
          {teamData.map((item) => (
            <OurTeamItem
              key={item.id}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
              // mailLink={item.mailLink}
              linkedInLink={item.linkedinLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurTeam;
