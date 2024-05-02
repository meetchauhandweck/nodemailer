import ProductInnerCards from "../../../../components/productInnerCards/ProductInnerCards";
import ProductInnerLogos from "../../../../components/productInnerLogos/ProductInnerLogos";
import ProductLinkCards from "../../../../components/productLinkCards/ProductLinkCards";
import ProductModule from "../../../../components/productModule/ProductModule";
import ProductsPageBanner from "../../../../components/productsPageBanner/ProductsPageBanner";
import ReachOut from "../../../../components/reachOut/ReachOut";
import Table from "../../../../components/table/Table";
import Warranty from "../../../../components/warranty/Warranty";
import bannerImage from "../../../../images/productImage1.png";
import moduleImage from "../../../../images/productImage2.png";
import file from "../../../../files/product-poly.pdf";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const productModuleData = {
  title: "MONO PERC PV MODULES",
  images: [
    {
      src: moduleImage,
      caption: "R325P",
      link: "/raaj-solar/mono-perc",
    },
    {
      src: moduleImage,
      caption: "R330P",
      link: "/raaj-solar/mono-perc",
    },
    {
      src: moduleImage,
      caption: "R335P",
      link: "/raaj-solar/mono-perc",
    },
  ],
};

const PolyCrystalline = () => {
  return (
    <>
    <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <ProductsPageBanner
        image={bannerImage}
        heading={"POLY Crystalline"}
        text={
          "With the development of Technology Poly Modules efficiency has increased up to 18% , where we can make Modules up to 345 WP.Poly Modules are ideally used for Ground Mounted , Industrial ,Commercial , Residential , Water Pumping system &…"
        }
        link={file}
      />
      <Table />
      <ProductInnerCards />
      <Warranty />
      <ProductModule
        title={productModuleData.title}
        images={productModuleData.images}
      />
      <ProductLinkCards />
      <ProductInnerLogos />
      <ReachOut />
    </>
  );
};
export default PolyCrystalline;
