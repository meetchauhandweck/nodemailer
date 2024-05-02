import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import arrow from "../../images/whiteArrow.svg";

const BlogCardsItem = ({ name, image, heading, date, content }) => {
  return (
    <div className="card">
      <div className="card_wrapper">
        <div className="card_wrapper_inner">
          <img src={image} alt="Card" className="card_image" />
          <div className="cardcolor">
            <p className="heading">{heading}</p>
            <p className="date">{date}</p>
            <p className="content">{content}</p>
            {/* <div className="card_inner_btn"> */}
            <Link to={`/raaj-solar/blog/${name}`}>
              Read More <img src={arrow} alt="white_arrow" />
            </Link>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCardsItem;

BlogCardsItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any,
  heading: PropTypes.string,
  date: PropTypes.string,
  content: PropTypes.string,
};
