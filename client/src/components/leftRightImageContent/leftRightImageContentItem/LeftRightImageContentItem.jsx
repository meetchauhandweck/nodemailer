import PropTypes from "prop-types";
import "./leftRightImageContentItem.scss";
import arrowIcon from "../../../images/rightArrow.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LeftRightImageContentItem = ({
  image,
  smallImage,
  title,
  description,
  order,
  link,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      className={`leftRightImageContentItem ${order}`}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
    >
      <div className="content_left">
        <div className="content_image1">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="content_right">
        <div className="content_right_wrapper">
          <div
            data-aos="fade-up"
            className="content_right_wrapper_inner"
            data-aos-duration="2000"
          >
            <h2>{title}</h2>
            <div className="content_text">
              <p>{description}</p>
            </div>
            <div>
                <Link to={link}>
              <p className="button_text">Read more
                <img src={arrowIcon} alt="Read more arrow" />
              </p>
              </Link>
            </div>
          </div>

          <div className="content_image2">
            <img src={smallImage} alt={`smallImage`} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default LeftRightImageContentItem;

LeftRightImageContentItem.propTypes = {
  image: PropTypes.any,
  smallImage: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  order: PropTypes.any,
  link: PropTypes.string,
};
