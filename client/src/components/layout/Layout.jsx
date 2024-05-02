import Header from "../header/Header";
import Footer from "../footer/Footer";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
 
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
