import image from "../../images/director.png";
// import image from "../../images/raajSolar3.jpeg";
import "./meetOurDirector.scss";

const MeetOurDirector = () => {
  return (
    <div className="meetOurDirector">
      <div className="meetOurDirector_container">
        <div className="meetOurDirector_wrapper">
          <div className="heading">
            <h4>Meet Our Director</h4>
          </div>
          <div className="meetOurDirector_inner">
            <div className="image">
              <img src={image} alt="director" />
            </div>
            <div className="content">
              <div className="content_wrapper">
                <div className="inner_heading">Shri Naresh Sanghvi</div>
                <p>
                  At Raaj solar ,We are committed to playing a pivotal role in
                  making solar energy affordable and accessible without
                  compromising quality at any stage. Established in 2010, today
                  we have 150 MW manufacturing capacity of Poly and Mono PERC
                  Modules with state-of-the-art solar PV production line.
                </p>
                <p>
                  Our ambition is to drive a high-performance culture with
                  sustainable green energy from the heart of Raaj Solar!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurDirector;
