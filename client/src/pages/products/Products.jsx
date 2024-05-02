import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import LeftRightImageContent from "../../components/leftRightImageContent/LeftRightImageContent";
import PageTitle from "../../components/pageTitle/PageTitle";
import ProductForm from "../../components/productForm/ProductForm";
import bannerImage from "../../images/productBanner.png";

const Products = () => {
  return (
    <>
      <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <InnerPageBanner
        subHeading={"INDIA'S MOST RELIABLE SOLAR PANELS MANUFACTURING COMPANY"}
        image={bannerImage}
      />
      <LeftRightImageContent />
      <ProductForm />
    </>
  );
};
export default Products;
