import BlogSingleBanner from "../blogSingleBanner/blogSingleBanner";
import "./blogSingleItem.scss";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import rightArrow from "../../images/rightArrowWhite.svg";
import plusIcon from "../../images/plus.svg";
import minusIcon from "../../images/minus.svg";
import upArrow from "../../images/upArrow.svg";

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li
        key={heading.id}
        className={heading.id === activeId ? "active" : ""}
        style={{ padding: "8px 5px 8px 5px" }}
      >
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);
/**
 * Dynamically generates the table of contents list, using any H2s and H3s it can find in the main text
 */
const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);
  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("main h2"));
    // Created a list of headings, with H3s nested
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);
  return { nestedHeadings };
};
const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];
  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;
    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });
  return nestedHeadings;
};
const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);
      // Get all headings that are currently visible on the page
      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });
      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);
      // If there is only one visible heading, this is our "active" heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
        // If there is more than one visible heading,
        // choose the one that is closest to the top of the page
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(a.target.id) > getIndexFromId(b.target.id)
        );
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };
    const observer = new IntersectionObserver(callback, {
      root: document.querySelector("iframe"),
      rootMargin: "0px",
    });
    const headingElements = Array.from(document.querySelectorAll("h2"));
    headingElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [setActiveId]);
};
/**
 * Renders the table of contents.
 */
const TableOfContents = () => {
  const [activeId, setActiveId] = useState("initial-header");
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);
  const [show, setShow] = useState("hide");
  return (
    <nav aria-label="Table of contents">
      <div className="tableofborder">
        <div className="Tablecontent">
          <p onClick={() => setShow(!show)}>Table of content</p>
          <button className="btn" onClick={() => setShow(!show)}>
            {/* <i
              className={`fas ${show ? "fa-chevron-down" : "fa-chevron-up"}`}
            /> */}
            <img
              src={upArrow}
              alt="upArrow"
              className={`${show ? "up" : "down"}`}
            />
          </button>
        </div>
        {show && <Headings headings={nestedHeadings} activeId={activeId} />}
      </div>
    </nav>
  );
};

const AccordionItem = ({ title, description, isOpen, toggleAccordion }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
        <div className="icon">
          {isOpen ? (
            <img src={plusIcon} alt="plueIcon" />
          ) : (
            <img src={minusIcon} className="minus" alt="minusIcon" />
          )}
        </div>
      </div>
      {isOpen && <div className="accordion-description">{description}</div>}
    </div>
  );
};

const BlogSingleItem = ({
  id,
  image,
  heading,
  date,
  intro,
  introP1,
  introP2,
  introP3,
  blueSecondHeading,
  blueSecondHeadingImage,
  blueSecondHeadingContent,
  blueSecondHeadingContent1,
  blueSecondHeadingContent2,
  blueSecondHeadingContent3,
  blueSecondHeadingContent4,
  blueSecondHeadingContent5,
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  blackHeading1,
  blackHeading1Content,
  blackHeading2,
  blackHeading2Content,
  blackHeading3,
  blackHeading3Content1,
  blackHeading3Content2,
  blueThirdHeading,
  blueThirdHeadingContent1,
  blueThirdHeadingContent2Heading,
  blueThirdHeadingContent2,
  blueThirdHeadingContent3,
  blueThirdHeadingContent3Heading,
  blueThirdHeadingContent4,
  blueThirdHeadingContent4Heading,
  blueThirdHeadingContent5,
  blueThirdHeadingContent5Heading,
  blueThirdHeadingContent6,
  blueForthHeading,
  blueForthHeadingContent1,
  blueForthHeadingContent2Heading,
  blueForthHeadingContent2,
  blueForthHeadingContent3,
  blueForthHeadingContent3Heading,
  blueForthHeadingContent4,
  blueForthHeadingContent4Heading,
  blueForthHeadingContent5_1,
  blueForthHeadingContent5_2,
  blueForthHeadingContent5Heading,
  blueForthHeadingContent6,
  blueForthHeadingContent6Heading,
  blueFifthHeading,
  blueFifthHeadingContent1,
  blueFifthHeadingContent2,
  blueFifthHeadingContent3,
  blueFifthHeadingContent4,
  blueFifthHeadingContent5,
  listBottomContent1,
  listBottomContent2,
  listBottomContent3,
  listBottomContent4,
  listBottomContent5,
  listBottomContent6,
  listBottomContent7,
  listBottomContent2Heading,
  listBottomContent3Heading,
  listBottomContent4Heading,
  blueSixthHeading,
  blueSixthHeadingImage,
  blueSixthHeadingContent1,
  blueSixthHeadingContent2Heading,
  blueSixthHeadingContent2,
  blueSixthHeadingContent3Heading,
  blueSixthHeadingContent3,
  blueSixthHeadingContent4Heading,
  blueSixthHeadingContent4,
  blueSixthHeadingContent5Heading,
  blueSixthHeadingContent5,
  blueSixthHeadingContent6Heading,
  blueSixthHeadingContent6,
  blueSixthHeadingContent7Heading,
  blueSixthHeadingContent7,
  blueSixthHeadingContent8,
  blueSeventhHeading,
  blueSeventhHeadingImage,
  blueSeventhHeadingContent1,
  blueSeventhHeadingContent2Heading,
  blueSeventhHeadingContent2,
  blueSeventhHeadingContent3Heading,
  blueSeventhHeadingContent3,
  blueSeventhHeadingContent4Heading,
  blueSeventhHeadingContent4,
  blueSeventhHeadingContent5Heading,
  blueSeventhHeadingContent5,
  blueSeventhHeadingContent6Heading,
  blueSeventhHeadingContent6,
  blueSeventhHeadingContent7Heading,
  blueSeventhHeadingContent7,
  blueSeventhHeadingContent8,
  blueEightthHeading,
  blueEightthHeadingImage,
  blueEightthHeadingContent1,
  blueEightthHeadingContent2Heading,
  blueEightthHeadingContent2,
  blueEightthHeadingContent3Heading,
  blueEightthHeadingContent3,
  blueEightthHeadingContent4Heading,
  blueEightthHeadingContent4,
  blueEightthHeadingContent5Heading,
  blueEightthHeadingContent5,
  blueEightthHeadingContent6Heading,
  blueEightthHeadingContent6,
  blueEightthHeadingContent7Heading,
  blueEightthHeadingContent7,
  blueEightthHeadingContent8,
  blueNinethHeading,
  blueNinethHeadingImage,
  blueNinethHeadingContent1,
  blueNinethHeadingContent2_1,
  blueNinethHeadingContent2_2,
  blueNinethHeadingContent2_3,
  blueNinethHeadingContent3,
  blueTenthHeading,
  blueTenthHeadingContent,
  blueTenthHeadingContent1,
  blueTenthHeadingContent2Heading,
  blueTenthHeadingContent2,
  blueTenthHeadingContent3Heading,
  blueTenthHeadingContent3,
  blueTenthHeadingContent4Heading,
  blueTenthHeadingContent4,
  blueTenthHeadingContent5Heading,
  blueTenthHeadingContent5,
  blueTenthHeadingContent6Heading,
  blueTenthHeadingContent6,
  blueTenthHeadingContent7Heading,
  blueTenthHeadingContent7,
  blueTenthHeadingContent8Heading,
  blueTenthHeadingContent8,
  blueTenthHeadingContent9Heading,
  blueTenthHeadingContent9,
  blueTenthHeadingContent10Heading,
  blueTenthHeadingContent10,
  blueTenthHeadingContent11Heading,
  blueTenthHeadingContent11,

  Conclusioncontent,
  ConclusionTitle,
  blueElevenHeading,
  blueElevenHeadingContent1,
  blueElevenHeadingContent2,
  blueElevenHeadingContent3Heading,
  blueElevenHeadingContent3,
  blueElevenHeadingContent4Heading,
  blueElevenHeadingContent4,
  blueElevenHeadingContent5Heading,
  blueElevenHeadingContent5,
  blueElevenHeadingContent6,
  companies,
  constuctionWorldImage,
  constuctionWorldText1,
  constuctionWorldText2,
  constuctionWorldText3,
  typesOfSolarPanels,
  solarPanelTypesHeading,
  electricityHeading,
  electricityContent,
  electricityImage,
  electricityText1,
  accordionTitle,
  items,
  accordionText,
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };
  return (
    <div className="blogSingle_inner">
      <div className="blogSingleItem_wrapper_banner">
        <BlogSingleBanner image={image} subHeading={heading} date={date} />
      </div>
      <div className="blogSingle_content_wrapper">
        <div className="container">
          <div className="blogSingle_content_wrapper_inner">
            <div className="blogSingle_content_sec">
              <h2 id="initial-header" className="elementor-element-title">
                <span className="elementor-element-border">{intro}</span>
              </h2>
              <p className="elementor-element-text">{introP1}</p>
              <p className="elementor-element-text">{introP2}</p>
              <p className="elementor-element-text">{introP3}</p>
              <div>
                <img src={image} className="elementor-element-image" />
              </div>
              {id === 1 ? (
                <p className="elementor-element-border">
                  <h2 id="second-header" className="elementor-element-title">
                    {blueSecondHeading}
                  </h2>
                </p>
              ) : null}
              {id === 1 ? (
                <>
                  <ul className="headingBottomList">
                    <li>{l1}</li>
                    <li>{l2}</li>
                    <li>{l3}</li>
                    <li>{l4}</li>
                    <li>{l5}</li>
                    <li>{l6}</li>
                    <li>{l7}</li>
                  </ul>
                  <div className="listBtn">
                    <Link
                      to={
                        "https://visitor-registration.renewableenergyindiaexpo.com/registration/?ref=exhibitors"
                      }
                      target="_blank"
                    >
                      Register now to visit
                      <img src={rightArrow} alt="rightArrowWhite" />
                    </Link>
                  </div>
                  <p className="elementor-element-text">{listBottomContent1}</p>
                  <p className="elementor-element-text">
                    <span>{listBottomContent2Heading}</span>
                    {listBottomContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{listBottomContent3Heading}</span>
                    {listBottomContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{listBottomContent4Heading}</span>
                    {listBottomContent4}
                  </p>
                  <p className="elementor-element-text">{listBottomContent5}</p>
                  <p className="elementor-element-text">{listBottomContent6}</p>
                  <p className="elementor-element-text">{listBottomContent7}</p>
                </>
              ) : null}
              {id === 0 || id === 4 ? (
                <>
                  <p className="elementor-element-border">
                    <h2 id="second-header" className="elementor-element-title">
                      {blueSecondHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent}
                  </p>
                  {blackHeading1 && (
                    <h2
                      id="third-header"
                      className="elementor-element-title-black"
                    >
                      <span>{blackHeading1}</span>
                    </h2>
                  )}
                  {blackHeading1Content && (
                    <p className="elementor-element-text">
                      {blackHeading1Content}
                    </p>
                  )}
                  {blackHeading2 && (
                    <h2
                      id="fourth-header"
                      className="elementor-element-title-black"
                    >
                      <span>{blackHeading2}</span>
                    </h2>
                  )}
                  {blackHeading2Content && (
                    <p className="elementor-element-text">
                      {blackHeading2Content}
                    </p>
                  )}
                  {blackHeading3 && (
                    <h2
                      id="fifth-header"
                      className="elementor-element-title-black"
                    >
                      <span>{blackHeading3}</span>
                    </h2>
                  )}
                  {blackHeading3Content1 && (
                    <p className="elementor-element-text">
                      {blackHeading3Content1}
                    </p>
                  )}
                  {blackHeading3Content2 && (
                    <p className="elementor-element-text">
                      {blackHeading3Content2}
                    </p>
                  )}
                </>
              ) : null}

              {id !== 1 && id !== 4 && id !== 5 && id !== 6 && id !== 7 && id !== 8 && (
                <>
                  <h2 id="sixth-header" className="elementor-element-title">
                    <span className="elementor-element-border">
                      {blueThirdHeading}
                    </span>
                  </h2>
                  <p className="elementor-element-text">
                    {blueThirdHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueThirdHeadingContent2Heading}</span>
                    {blueThirdHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueThirdHeadingContent3Heading}</span>{" "}
                    {blueThirdHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueThirdHeadingContent4Heading}</span>
                    {blueThirdHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueThirdHeadingContent5Heading}</span>
                    {blueThirdHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    {blueThirdHeadingContent6}
                  </p>
                </>
              )}
              {blueFifthHeading ||
                blueFifthHeadingContent1 ||
                blueFifthHeadingContent2 ||
                blueFifthHeadingContent3 ||
                blueFifthHeadingContent4 ||
                blueFifthHeadingContent5 ? (
                <>
                  <p className="elementor-element-border">
                    <h2 id="eighth-header" className="elementor-element-title">
                      {blueFifthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    {blueFifthHeadingContent5}
                  </p>
                </>
              ) : null}
              {id !== 1 && id !== 3 && id !== 4 && id !== 5 && id !== 6 && id !== 7 && id !== 8 &&(
                <>
                  <p className="elementor-element-border">
                    <h2 id="seventh-header" className="elementor-element-title">
                      {blueForthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent2Heading}</span>
                    {blueForthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent3Heading}</span>{" "}
                    {blueForthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent4Heading}</span>{" "}
                    {blueForthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent5Heading}</span>
                    {blueForthHeadingContent5_1}
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent5_2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent6Heading}</span>
                    {blueForthHeadingContent6}
                  </p>
                </>
              )}
              {id === 3 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="ninth-header" className="elementor-element-title">
                      {blueSixthHeading}
                    </h2>
                  </p>
                  <p>
                    <img src={blueSixthHeadingImage} alt={blueSixthHeading} />
                  </p>
                  <p className="elementor-element-text">
                    {blueSixthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent2Heading}</span>
                    {blueSixthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent3Heading}</span>{" "}
                    {blueSixthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent4Heading}</span>{" "}
                    {blueSixthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent5Heading}</span>
                    {blueSixthHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent6Heading}</span>
                    {blueSixthHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent7Heading}</span>
                    {blueSixthHeadingContent7}
                  </p>
                  <p className="elementor-element-text">
                    {blueSixthHeadingContent8}
                  </p>
                </>
              )}
              {id === 3 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="tenth-header" className="elementor-element-title">
                      {blueSeventhHeading}
                    </h2>
                  </p>
                  <p>
                    <img
                      src={blueSeventhHeadingImage}
                      alt={blueSeventhHeading}
                    />
                  </p>
                  <p className="elementor-element-text">
                    {blueSeventhHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSeventhHeadingContent2Heading}</span>
                    {blueSeventhHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSeventhHeadingContent3Heading}</span>{" "}
                    {blueSeventhHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSeventhHeadingContent4Heading}</span>{" "}
                    {blueSeventhHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSeventhHeadingContent5Heading}</span>
                    {blueSeventhHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSeventhHeadingContent6Heading}</span>
                    {blueSeventhHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSeventhHeadingContent7Heading}</span>
                    {blueSeventhHeadingContent7}
                  </p>
                  <p className="elementor-element-text">
                    {blueSeventhHeadingContent8}
                  </p>
                </>
              )}
              {id === 3 && (
                <>
                  <p className="elementor-element-border">
                    <h2
                      id="eleventh-header"
                      className="elementor-element-title"
                    >
                      {blueEightthHeading}
                    </h2>
                  </p>
                  <p>
                    <img
                      src={blueEightthHeadingImage}
                      alt={blueEightthHeading}
                    />
                  </p>
                  <p className="elementor-element-text">
                    {blueEightthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueEightthHeadingContent2Heading}</span>
                    {blueEightthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueEightthHeadingContent3Heading}</span>{" "}
                    {blueEightthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueEightthHeadingContent4Heading}</span>{" "}
                    {blueEightthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueEightthHeadingContent5Heading}</span>
                    {blueEightthHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueEightthHeadingContent6Heading}</span>
                    {blueEightthHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueEightthHeadingContent7Heading}</span>
                    {blueEightthHeadingContent7}
                  </p>
                  <p className="elementor-element-text">
                    {blueEightthHeadingContent8}
                  </p>
                </>
              )}
              {id === 3 && (
                <>
                  <p className="elementor-element-border">
                    <h2
                      id="twelvefth-header"
                      className="elementor-element-title"
                    >
                      {blueNinethHeading}
                    </h2>
                  </p>
                  <p>
                    <img src={blueNinethHeadingImage} alt={blueNinethHeading} />
                  </p>
                  <p className="elementor-element-text">
                    {blueNinethHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <ul className="headingBottomList">
                      <li> {blueNinethHeadingContent2_1}</li>
                      <li>{blueNinethHeadingContent2_2}</li>
                      <li> {blueNinethHeadingContent2_3}</li>
                    </ul>
                  </p>
                  <p className="elementor-element-text">
                    {blueNinethHeadingContent3}
                  </p>
                </>
              )}
              {id === 4 && (
                <div className="companies_section">
                  <p className="elementor-element-border">
                    <h2 id="third-header" className="elementor-element-title">
                      {blueTenthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent}
                  </p>
                  {companies.map((item, index) => {
                    return (
                      <div className="companies" key={index}>
                        <p className="elementor-element-border">
                          <h2
                            id={item.id}
                            className="elementor-element-title-black"
                          >
                            <span className="company_count">{`${index + 1
                              }. `}</span>
                            {item.companyTitle}
                          </h2>
                        </p>
                        {item.companyContent.map((item, index) => {
                          return (
                            <div key={index}>
                              <p className="elementor-element-text">
                                {item.text1}
                              </p>
                              <p className="elementor-element-text">
                                {item.text2}
                              </p>
                              <p className="elementor-element-text">
                                {item.text3}
                              </p>
                            </div>
                          );
                        })}
                        <table>
                          {item.tableHeading.map((item, index) => (
                            <th key={index}>{item}</th>
                          ))}
                          {item.tableConetnt.map((item, index) => (
                            <tr key={index}>
                              <td>{item.col1}</td>
                              <td>{item.col2}</td>
                              <td>{item.col3}</td>
                            </tr>
                          ))}
                        </table>
                      </div>
                    );
                  })}
                </div>
              )}
              {id === 4 && (
                <>
                  <p className="elementor-element-border">
                    <h2
                      id="fourteenth-header"
                      className="elementor-element-title"
                    >
                      {blueSixthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueSixthHeadingContent1}
                  </p>
                  <p>
                    <img src={blueSixthHeadingImage} alt={blueSixthHeading} />
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent2Heading}</span>
                    {blueSixthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent3Heading}</span>{" "}
                    {blueSixthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent4Heading}</span>{" "}
                    {blueSixthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent5Heading}</span>
                    {blueSixthHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueSixthHeadingContent6Heading}</span>
                    {blueSixthHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    {blueSixthHeadingContent7}
                  </p>
                </>
              )}
              {id === 4 && (
                <>
                  <p className="elementor-element-border">
                    <h2
                      id="fifteenth-header"
                      className="elementor-element-title"
                    >
                      {blueForthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent2Heading}</span>
                    {blueForthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent3Heading}</span>{" "}
                    {blueForthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent4Heading}</span>{" "}
                    {blueForthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent5Heading}</span>
                    {blueForthHeadingContent5_1}
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent5_2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueForthHeadingContent6Heading}</span>
                    {blueForthHeadingContent6}
                  </p>
                </>
              )}
              {id === 5 && (
                <div className="constructionWord">
                  <div className="constructionWord_heading">
                    As per the
                    <Link to="https://www.constructionworld.in/">
                      constructionworld.in
                    </Link>
                  </div>
                  <p>
                    <img
                      src={constuctionWorldImage}
                      alt={blueNinethHeading}
                      className="constructionWord_artical_image"
                    />
                  </p>
                  <p className="elementor-element-text">
                    {constuctionWorldText1}
                  </p>
                  <p className="elementor-element-text">
                    {constuctionWorldText2}
                  </p>
                  <p className="elementor-element-text">
                    {constuctionWorldText3}
                  </p>
                </div>
              )}
              {id === 5 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="second-header" className="elementor-element-title">
                      {blueSecondHeading}
                    </h2>
                  </p>
                  <p>
                    <img
                      src={blueSecondHeadingImage}
                      alt={blueSecondHeading}
                      className="constructionWord_artical_image"
                    />
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent4}
                  </p>
                </>
              )}
              {id === 5 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="third-header" className="elementor-element-title">
                      {solarPanelTypesHeading}
                    </h2>
                  </p>
                  {typesOfSolarPanels.map((item, index) => {
                    return (
                      <div className="types_of_solar_panel" key={index}>
                        <h2
                          className="elementor-element-title-black"
                          id={item.id}
                        >
                          <span className="company_count">{`${index + 1
                            }. `}</span>
                          {item.solarPanelHeading}
                        </h2>
                        <img
                          src={item.solarPanelImage}
                          alt="TypesOfSolarPanels"
                        />
                        <p className="elementor-element-text">
                          {item.solarPanelText1}
                        </p>
                        <p className="elementor-element-text">
                          {item.solarPanelText2}
                        </p>
                        <p className="elementor-element-text">
                          {item.solarPanelText3}
                        </p>
                        <p className="elementor-element-text">
                          {item.solarPanelText4}
                        </p>
                        <p className="elementor-element-text">
                          {item.solarPanelText5}
                        </p>
                        <p className="elementor-element-text">
                          {item.solarPanelText6}
                        </p>
                        <div className="advantages">
                          {item.advantageImage && (
                            <img
                              src={item.advantageImage}
                              alt="advantageImage"
                            />
                          )}
                          <div className="advantageHeading">
                            <div className="advantageHeading_wrap">
                              {item.advantageHeading}
                            </div>
                            <ul>
                              {item.advantages?.map((text, index) => (
                                <li key={index}>{text}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
              {id === 5 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="nineth-header" className="elementor-element-title">
                      {blueTenthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent2Heading}</span>
                    {blueTenthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent3Heading}</span>{" "}
                    {blueTenthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent4Heading}</span>{" "}
                    {blueTenthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent5Heading}</span>
                    {blueTenthHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent6Heading}</span>
                    {blueTenthHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent7Heading}</span>
                    {blueTenthHeadingContent7}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent8Heading}</span>
                    {blueTenthHeadingContent8}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent9Heading}</span>
                    {blueTenthHeadingContent9}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent10Heading}</span>
                    {blueTenthHeadingContent10}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent11Heading}</span>
                    {blueTenthHeadingContent11}
                  </p>
                </>
              )}
              {id === 5 && (
                <div className="constructionWord">
                  <p className="elementor-element-border">
                    <h2 id="tenth-header" className="elementor-element-title">
                      {electricityHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">{electricityContent}</p>
                  <div className="constructionWord_heading">
                    As per the
                    <Link to="https://www.magicbricks.com/blog/">
                      Magic bricks Article
                    </Link>
                  </div>
                  <p>
                    <img
                      src={electricityImage}
                      alt={blueNinethHeading}
                      className="constructionWord_artical_image"
                    />
                  </p>
                  <p className="elementor-element-text">{electricityText1}</p>
                </div>
              )}
              {/* 
              {id === 6  &&(
                <div className="constructionWord">
          
                  <p>
                    <img
                      src={constuctionWorldImage}
                      alt={blueNinethHeading}
                      className="constructionWord_artical_image"
                    />
                  </p>
                  <p className="elementor-element-text">
                    {constuctionWorldText1}
                  </p>
                  <p className="elementor-element-text">
                    {constuctionWorldText2}
                  </p>
                  <p className="elementor-element-text">
                    {constuctionWorldText3}
                  </p>
                </div>
              )} */}
              {id === 6 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="second-header" className="elementor-element-title">
                      {blueSecondHeading}
                    </h2>
                  </p>
                  {/* <p>
                    <img
                      src={blueSecondHeadingImage}
                      alt={blueSecondHeading}
                      className="constructionWord_artical_image"
                    />
                  </p> */}
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent5}
                  </p>
                </>
              )}
              {id === 6 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="nineth-header" className="elementor-element-title">
                      {blueTenthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent2Heading}</span>
                    {blueTenthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent3Heading}</span>{" "}
                    {blueTenthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent4Heading}</span>{" "}
                    {blueTenthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent5Heading}</span>
                    {blueTenthHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent6Heading}</span>
                    {blueTenthHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent7Heading}</span>
                    {blueTenthHeadingContent7}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent8Heading}</span>
                    {blueTenthHeadingContent8}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent9Heading}</span>
                    {blueTenthHeadingContent9}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent10Heading}</span>
                    {blueTenthHeadingContent10}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent11Heading}</span>
                    {blueTenthHeadingContent11}
                  </p>
                </>
              )}
              {id === 6 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="tenth-header" className="elementor-element-title">
                      {blueElevenHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueElevenHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent2Heading}</span>
                    {blueElevenHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueElevenHeadingContent3Heading}</span>{" "}
                    {blueElevenHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueElevenHeadingContent4Heading}</span>{" "}
                    {blueElevenHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueElevenHeadingContent5Heading}</span>
                    {blueElevenHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    {blueElevenHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{ConclusionTitle}</span>
                    {Conclusioncontent}
                  </p>

                </>
              )}

              {id === 7 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="third-header" className="elementor-element-title">
                      {blueSecondHeading}
                    </h2>
                  </p>
                  {/* <p>
                    <img
                      src={blueSecondHeadingImage}
                      alt={blueSecondHeading}
                      className="constructionWord_artical_image"
                    />
                  </p> */}
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent5}
                  </p>
                </>
              )}
              {id === 7 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="nineth-header" className="elementor-element-title">
                      {blueTenthHeading}
                    </h2>
                  </p>

                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent2Heading}</span>

                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent4Heading}</span>

                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent5Heading}</span>

                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent7Heading}</span>

                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent7}
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent8}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent3Heading}</span>

                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent6Heading}
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent8Heading}
                  </p>

                </>
              )}
              {id === 7 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="tenth-header" className="elementor-element-title">
                      {blueElevenHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueElevenHeadingContent1}
                  </p>
                  <p className="elementor-element-text">

                    {blueElevenHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueElevenHeadingContent3Heading}</span>{" "}
                    {blueElevenHeadingContent3}
                  </p>
                  <p className="elementor-element-text">

                    {blueElevenHeadingContent4}
                  </p>
                  <p className="elementor-element-text">

                    {blueElevenHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueElevenHeadingContent5Heading}</span>
                  </p>
                  <p className="elementor-element-text">
                    {blueElevenHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{ConclusionTitle}</span>
                    {Conclusioncontent}

                  </p>
                  <p className="elementor-element-text">
                    {blueElevenHeadingContent4Heading}
                  </p>

                </>
              )}
              {id === 8 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="second-header" className="elementor-element-title">
                      {blueSecondHeading}
                    </h2>
                  </p>
                  {/* <p>
                    <img
                      src={blueSecondHeadingImage}
                      alt={blueSecondHeading}
                      className="constructionWord_artical_image"
                    />
                  </p> */}
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span> {blueSecondHeadingContent2}</span>
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span> {blueSecondHeadingContent4}</span>
                  </p>
                  <p className="elementor-element-text">
                    {blueSecondHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{constuctionWorldText1}</span>
                  </p>
                  <p className="elementor-element-text">
                    {constuctionWorldText2}
                  </p>
                  <p className="elementor-element-text">
                    <span> {constuctionWorldText3}</span>
                  </p>
                  <p className="elementor-element-text">
                    {solarPanelTypesHeading}
                  </p>
                  <p className="elementor-element-text">
                    <span> {blueForthHeading}</span>
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span> {blueForthHeadingContent2Heading}</span>
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span> {blueForthHeadingContent3}</span>
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent3Heading}
                  </p>
                  <p className="elementor-element-text">
                    {blueForthHeadingContent4}
                  </p>
                </>
              )}
              {id === 8 && (
                <>
                  <p className="elementor-element-border">
                    <h2 id="nineth-header" className="elementor-element-title">
                      {blueTenthHeading}
                    </h2>
                  </p>
                  <p className="elementor-element-text">
                    {blueTenthHeadingContent1}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent2Heading}</span>
                    {blueTenthHeadingContent2}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent3Heading}</span>{" "}
                    {blueTenthHeadingContent3}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent4Heading}</span>{" "}
                    {blueTenthHeadingContent4}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent5Heading}</span>
                    {blueTenthHeadingContent5}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent6Heading}</span>
                    {blueTenthHeadingContent6}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent7Heading}</span>
                    {blueTenthHeadingContent7}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent8Heading}</span>
                    {blueTenthHeadingContent8}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent9Heading}</span>
                    {blueTenthHeadingContent9}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent10Heading}</span>
                    {blueTenthHeadingContent10}
                  </p>
                  <p className="elementor-element-text">
                    <span>{blueTenthHeadingContent11Heading}</span>
                    {blueTenthHeadingContent11}
                  </p>
                </>
              )}
              {id === 8 && (
                <>
                  <p>
                    <p className="elementor-element-border">
                      <h2 id="tenth-header" className="elementor-element-title">
                        {blueElevenHeading}
                      </h2>
                    </p>
                    <p className="elementor-element-text">
                      {blueElevenHeadingContent1}
                    </p>

                    <p className="elementor-element-text">
                      <span>{blueElevenHeadingContent3Heading}</span>{" "}
                      {blueElevenHeadingContent3}
                    </p>

                    <p className="elementor-element-text">
                      {blueSixthHeadingContent7}
                    </p>

                    <p className="elementor-element-text">
                    <li>{blueElevenHeadingContent4Heading}</li>
              
                    </p>
                    <p className="elementor-element-text">
                    <li>{blueElevenHeadingContent4}</li>
                    </p>
                    <p className="elementor-element-text">
                      {blueElevenHeadingContent5Heading}
                      </p>
                      <p className="elementor-element-text">
                     <li> {blueElevenHeadingContent5}</li>
                    </p>
                    <p className="elementor-element-text">
                    <span>{ blueSixthHeadingContent6}</span>
                      {blueElevenHeadingContent6}
                    </p>
                  

                    <p className="elementor-element-text">
                     <li> { blueSixthHeadingContent4Heading}</li>
                    </p>
                    <p className="elementor-element-text">
                     <li> { blueSixthHeadingContent4}</li>
                    </p>
                    <p className="elementor-element-text">
                     <li> {blueSixthHeadingContent5Heading}</li>
                    </p>
                    <p className="elementor-element-text">
                     <li> {blueSixthHeadingContent5}</li>
                    </p>
                    <p className="elementor-element-text">
                 {blueSixthHeadingContent6Heading}
                    </p>
                    <p className="elementor-element-text">
                      <span>{ConclusionTitle}</span>
                      {Conclusioncontent}
                    </p>
                  </p>
                </>
              )}
            </div>
            <TableOfContents />
          </div>
          {accordionTitle && (
            <div className="accordion-section">
              <h2 className="accordian-main-title">{accordionTitle}</h2>
              <h3 className="main-text">{accordionText}</h3>
              <div className="accordion">
                {items?.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    isOpen={index === openIndex}
                    toggleAccordion={() => toggleAccordion(index)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BlogSingleItem;
BlogSingleItem.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  date: PropTypes.string,
};

Headings.propTypes = {
  headings: PropTypes.any,
  activeId: PropTypes.any,
};
