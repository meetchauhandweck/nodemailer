import ContactUsForm from "../../components/contactUsForm/ContactUsForm";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import PageTitle from "../../components/pageTitle/PageTitle";
import bannerImage from "../../images/contactBanner.png";

const ContactUs = () => {
  return (
    <>
    <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <InnerPageBanner heading={"CONTACT US"} image={bannerImage} />
      <ContactUsForm />
    </>
  );
};
export default ContactUs;
