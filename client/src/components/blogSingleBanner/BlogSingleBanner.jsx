import PropTypes from "prop-types";
import "./blogSingleBanner.scss";

const BlogSingleBanner = ({ image, subHeading, date }) => {
  return (
    <div
      className="blogSingleBanner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="blogSingleBanner_wrapper">
        <div className="largeText">{subHeading}</div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default BlogSingleBanner;

BlogSingleBanner.propTypes = {
  image: PropTypes.any,
  date: PropTypes.string,
  subHeading: PropTypes.string,
};
