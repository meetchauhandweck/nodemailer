import "./aboutExperience.scss";
import image1 from "../../images/aboutExperience.png";

function AboutExperience() {
  return (
    <div className="aboutExperience">
      <div className="aboutExperience_wrapper">
        <div className="aboutExperience_wrapper_inner">
          <div className="aboutExperience_wrapper_inner_wrapper">
            <div className="heading">Raaj Solar</div>
            <div className="content">
              {
                "We are one of the Reliable Solar PV Modules Manufacturers in India with an exceptionally solid client base PAN India. “RAAJ” Solar – is part of Raajratna Ventures Ltd., where we have a set-up of 150 MW Fully automated state – of – the – art manufacturing line & Expanding Manufacturing facility up to 300 MW by 2023. We offer DCR, NON – DCR & Half Cut-cells Multi busbar PV Modules up to 550 Wp. We Manufacture Solar PV Modules as per MNRE (Ministry of New and Renewable Energy) approved guidelines. ”RAAJ“ – Modules are also listed in ALMM. “RAAJ” PV modules are ideal for Ground Mounted, Industrial, commercial, Residential & Solar Water pumping System. We provide impeccable quality and cost-effective solar energy solutions across the globe."
              }
            </div>
          </div>
        </div>
        <div className="img">
          <img src={image1} className="image2" width="100%"></img>
          <div className="yearsofexp">
            <div className="roundbackground">1</div>
            <div className="roundbackground">3</div>
            <div className="imagecontent">years of experience</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutExperience;
