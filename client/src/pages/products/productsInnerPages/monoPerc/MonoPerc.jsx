import ProductInnerCards from "../../../../components/productInnerCards/ProductInnerCards";
import ProductInnerLogos from "../../../../components/productInnerLogos/ProductInnerLogos";
import ProductLinkCards from "../../../../components/productLinkCards/ProductLinkCards";
import ProductModule from "../../../../components/productModule/ProductModule";
import ProductsPageBanner from "../../../../components/productsPageBanner/ProductsPageBanner";
import ReachOut from "../../../../components/reachOut/ReachOut";
import Table from "../../../../components/table/Table";
import Warranty from "../../../../components/warranty/Warranty";
import bannerImage from "../../../../images/productImage2.png";
import moduleImage from "../../../../images/productImage4.png";
import file from "../../../../files/product-mono.pdf"
import PageTitle from "../../../../components/pageTitle/PageTitle";

const productModuleData = {
  title: "Mono Bi Facial PV MODULES",
  images: [
    {
      src: moduleImage,
      caption: "R540M",
      link: "/mono-bi-facial",
    },
    {
      src: moduleImage,
      caption: "R545M",
      link: "/mono-bi-facial",
    },
    {
      src: moduleImage,
      caption: "R550M",
      link: "/mono-bi-facial",
    },
  ],
};

const MonoPerc = () => {
  return (
    <>
    <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <ProductsPageBanner
        image={bannerImage}
        heading={"MONO PERC"}
        text={
          "Assembled with MBB PERC cells, the half-cell configuration of the modules offers the advantages of higher power output, better temperature-dependent performance, reduced shading effect on the energy generation, lower risk of hot spot, as well as enhanced tolerance for mechanical…"
        }
        link={file}
      />
      <Table row1col1={"R540M"} row1col2={"R545M"} row1col3={"R550M"} 
      row2col1={"42.26"} row2col2={"42.34"} row2col3 ={"42.55"}
      row3col1={"12.78"} row3col2={"12.87"} row3col3={"12.93"}  
      row4col1={"49.54"} row4col2={"49.61"} row4col3={"49.82"} 
      row5col1={"13.35"} row5col2={"13.45"} row5col3={"13.51"} 
      row6col1={"20.89"} row6col2={"21.09"} row6col3={"21.28"} 
      notes={"STC: Irradiances of 1000 W/m²,spectrum AM 1.5and cell temperature of 25°C"}
      celltypes={"Mono PERC 144 half cut cells (72*72)"}
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
export default MonoPerc;
