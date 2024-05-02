import DownloadItem from "../../components/download/DownloadItem";
import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import bannerImage from "../../images/downloadBanner.png";
import cardDataFile1 from "../../files/mono_perc_file.pdf";
import cardDataFile2 from "../../files/bi_facial_file.pdf";
import cardDataFile3 from "../../files/Bi-Facial TOPCON_Leaflet.pdf";
import cardData1File1 from "../../files/Solar_Panel_Catalogue_All.pdf";
import cardData2File1 from "../../files/BIS-MONO.pdf";
import cardData2File2 from "../../files/BIS-MBB-Inclusion.pdf";
import cardData2File3 from "../../files/IEC-61853-MONO.pdf";
import cardData2File4 from "../../files/Renewed_BIS_Poly_22-24.pdf";
import cardData2File5 from "../../files/ALMM_31MAY2023.pdf";
import cardData3File1 from "../../files/PID-IEC-62804.pdf";
import cardData3File2 from "../../files/Salt-Mist-IS-61701.pdf";
import cardData3File3 from "../../files/STC-Test-Report.pdf";
import cardData4File1 from "../../files/ISO-9001-Raajratna-Ventures-Ltd.pdf";
import cardData4File2 from "../../files/ISO-14001-Raajratna-Ventures-Ltd.pdf";
import cardData4File3 from "../../files/ISO-45001-Raajratna-Ventures-Ltd.pdf";
import PageTitle from "../../components/pageTitle/PageTitle";

const Download = () => {
  const cardData = [
    { title: "Mono PERC", file: cardDataFile1 },
    { title: "Bi-Facial", file: cardDataFile2 },
    { title: "TAPCon", file: cardDataFile3 },
  ];
  const cardData1 = [
    { title: "RAAJ Solar Panels - Catalog", file: cardData1File1 },
  ];

  const cardData2 = [
    {
      title: "BIS Certification for Mono Crystalline PV Modules",
      file: cardData2File1,
    },
    {
      title: "BIS Certification for MBB Mono Crystalline PV Modules",
      file: cardData2File2,
    },
    {
      title: "IEC Test Report for Mono Crystalline PV Modules",
      file: cardData2File3,
    },
    {
      title: "IEC Renewal Of Licence for Mono Crystalline PV Modules",
      file: cardData2File4,
    },
    {
      title: "ALMM List for Manufacturers and Models of Solar PV Modules",
      file: cardData2File5,
    },
  ];

  const cardData3 = [
    {
      title: "IEC Test Report for PID Resistance Solar Panels",
      file: cardData3File1,
    },
    {
      title: "IEC Test Report for Salt Mist of PV Modules",
      file: cardData3File2,
    },
    { title: "STC Test Report for PV Modules", file: cardData3File3 },
  ];

  const cardData4 = [
    {
      title:
        "ISO Certification for Raajratna Ventures Ltd : Quality Management Systems",
      file: cardData4File1,
    },
    {
      title:
        "ISO Certification for Raajratna Ventures Ltd : Environmental Management Systems",
      file: cardData4File2,
    },
    {
      title:
        "ISO Certification for Raajratna Ventures Ltd : Occupational Health and Safety Management Systems",
      file: cardData4File3,
    },
  ];
  return (
    <>
    <PageTitle pageTitle={"Ahmedabad - Solar Panel Manufacturing Company | Raaj Solar"} />
      <InnerPageBanner heading={"Downloads"} image={bannerImage} />
      <div className="download_sec">
        <div className="container">
          <DownloadItem title="DATASHEET" cardsData={cardData} />
          <DownloadItem title="COMPANY PROFILE" cardsData={cardData1} />
          <DownloadItem title="BIS CERTIFICATION" cardsData={cardData2} />
          <DownloadItem title="IEC TEST REPORT" cardsData={cardData3} />
          <DownloadItem title="ISO CERTIFICATION" cardsData={cardData4} />
        </div>
      </div>
    </>
  );
};
export default Download;
