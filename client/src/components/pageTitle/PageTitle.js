import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const PageTitle = ({ pageTitle }) => {
  const location = useLocation();

  // console.log(location);
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle, location]);
  return null;
};
export default PageTitle;

PageTitle.propTypes = {
  pageTitle: PropTypes.string,
};
