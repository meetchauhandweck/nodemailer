import ReachOut from "../../../../components/reachOut/ReachOut";
import ProductsPageBanner from "../../../../components/productsPageBanner/ProductsPageBanner";
import bannerImage from "../../../../images/productImage4.png";
import Table from "../../../../components/table/Table";
import ProductInnerCards from "../../../../components/productInnerCards/ProductInnerCards";
import Warranty from "../../../../components/warranty/Warranty";
import ProductInnerLogos from "../../../../components/productInnerLogos/ProductInnerLogos";
import ProductLinkCards from "../../../../components/productLinkCards/ProductLinkCards";
import moduleImage from "../../../../images/productImage1.png";
import ProductModule from "../../../../components/productModule/ProductModule";
import Table2 from "../../../../components/table2/Table2";
import file from "../../../../files/product-bi-facial.pdf";
import PageTitle from "../../../../components/pageTitle/PageTitle";

const productModuleData = {
  title: "TAPCon PV MODULES",
  images: [
    {
      src: moduleImage,
      caption: "R325P",
      link: "/poly-crystalline",
    },
    {
      src: moduleImage,
      caption: "R330P",
      link: "/poly-crystalline",
    },
    {
      src: moduleImage,
      caption: "R335P",
      link: "/poly-crystalline",
    },
  ],
};

const MonoBiFacial = () => {
  return (
    <>
    <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <ProductsPageBanner
        image={bannerImage}
        heading={"MONO BI-Facial"}
        text={
          "Assembled with MBB PERC cells, the half-cell configuration of the modules offers the advantages of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical…"
        }
        link={file}
      />
      <Table row1col1={"R530M"} row1col2={"R535M"} row1col3={"R540M"} row1col4={"R545M"} row1col5={"R550M"}
       row2col1={"41.90"} row2col2={"42.12"} row2col3 ={"42.26"} row2col4={"42.36"} row2col5={"42.55"}
      row3col1={"12.65"} row3col2={"12.70"} row3col3={"12.78"} row3col4={"12.87"} row3col5={"12.93"} 
       row4col1={"49.18"} row4col2={"49.39"} row4col3={"49.54"}  row4col4={"49.61"}  row4col5={"49.82"} 
      row5col1={"13.22"} row5col2={"13.27"} row5col3={"13.35"} row5col4={"13.45"} row5col5={"13.51"}  
       row6col1={"20.51"} row6col2={"20.70"} row6col3={"20.89"} row6col4={"21.09"} row6col5={"21.28"} 
       notes={"STC: Irradiances of 1000 W/m²,spectrum AM 1.5and cell temperature of 25°C"}
       celltypes={"Mono PERC 144 half cut cells (72*72)"}
       />
      <Table2 />
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
export default MonoBiFacial;
