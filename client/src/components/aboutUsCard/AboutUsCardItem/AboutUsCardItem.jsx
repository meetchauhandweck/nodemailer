import PropTypes from "prop-types";

const AboutUsCardItem = ({ heading, content }) => {
  return (
    <article className="aboutUsCardItem">
      <div className="aboutUsCardItem_wrapper">
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    </article>
  );
};
export default AboutUsCardItem;

AboutUsCardItem.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
};
