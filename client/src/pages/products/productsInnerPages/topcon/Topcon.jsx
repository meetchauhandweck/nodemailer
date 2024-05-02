import ProductInnerCards from "../../../../components/productInnerCards/ProductInnerCards";
import ProductInnerLogos from "../../../../components/productInnerLogos/ProductInnerLogos";
import ProductLinkCards from "../../../../components/productLinkCards/ProductLinkCards";
import ProductModule from "../../../../components/productModule/ProductModule";
import ProductsPageBanner from "../../../../components/productsPageBanner/ProductsPageBanner";
import ReachOut from "../../../../components/reachOut/ReachOut";
import Table from "../../../../components/table/Table";
import Warranty from "../../../../components/warranty/Warranty";
import bannerImage from "../../../../images/productImage4.png";
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

const Topcon = () => {
  return (
    <>
    <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <ProductsPageBanner
        image={bannerImage}
        heading={"TOPCon"}
        text={
          "With the development of Technology Poly Modules efficiency has increased up to 18% , where we can make Modules up to 345 WP.Poly Modules are ideally used for Ground Mounted , Industrial ,Commercial , Residential , Water Pumping system &…"
        }
        link={file}
      />
      <Table row1col1={"R585T"} row1col2={"R590T"} row1col3={"R595T"} row1col4={"R600T"}
        row2col1={"44.44"} row2col2={"44.56"} row2col3 ={"44.66"} row2col4={"44.68"}
        row3col1={"13.18"} row3col2={"13.35"} row3col3={"13.33"} row3col4={"13.40"}
        row4col1={"51.72"} row4col2={"51.78"} row4col3={"51.90"} row4col4={"52.04"}
        row5col1={"13.76"} row5col2={"13.79"} row5col3={"13.86"} row5col4={"13.91"}
        row6col1={"22.64"} row6col2={"22.83"} row6col3={"23.02"} row6col4={"23.22"} 
        notes={"STC: Irradiances of 1000 W/m², cell temperature 25°C,Air Mass AM1.5"}
        celltypes={"TOPCon 144 half cut (72*72)"}
       />
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
export default Topcon;
