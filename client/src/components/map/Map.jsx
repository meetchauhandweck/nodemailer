import "./map.scss";
import Form from "../form/Form";
const Map = () => {
  return (
    <div className="map">
      <div className="map_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842550428!2d72.41492640121014!3d23.020474103548196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1697632610728!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
        {/* <Form /> */}
      </div>
    </div>
  );
};
export default Map;
