import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./timeline.scss";
// import Scrollbar from 'smooth-scrollbar';
import { useEffect, useState } from "react";
import TimelineHeading from "./TimeLineHeading";

gsap.registerPlugin(ScrollTrigger);

function TimelineComponent() {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  const widthHandler = () => {
    setCheckWidth(window.innerWidth);
  };

  window.addEventListener("resize", widthHandler);
  console.log(checkWidth);

  let widthX = "217px";
  if (checkWidth < 991 && checkWidth > 767) {
    widthX = "180px";
  } else if (checkWidth < 767 && checkWidth > 575) {
    widthX = "150px";
  } else if (checkWidth < 575) {
    widthX = "110px";
  } else {
    widthX = "217px";
  }

  useEffect(() => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    function initTimeline() {
      let parent_container = document.getElementById("section-timeline");
      let timeline_container = parent_container.querySelector(
        ".timeline-container"
      );
      var sections = timeline_container.querySelectorAll(".year");

      const vh = (coef) => window.innerHeight * (coef / 130);

      let parentST = ScrollTrigger.create({
        id: "parent-timeline",
        trigger: parent_container,
        start: "top 20%",
        toggleClass: "started",
        pin: true,
        markers: true,
        end: "end -60%",
      });

      let currentSection;

      function goto(section, i) {
        if (currentSection !== section) {
          gsap.to(timeline_container, {
            y: -20 * i,
            duration: 1.5,
            overwrite: true,
          });
          let tl = gsap.timeline({ defaults: { overwrite: true } });

          if (currentSection) {
            tl.to(currentSection.querySelector("h2"), {
              fontSize: widthX,
              color: "#d4d4d4",
            });
            tl.to(
              currentSection,
              {
                maxHeight: "12rem",
              },
              0
            );
            tl.to(
              currentSection.querySelectorAll("p"),
              {
                opacity: 0,
                duration: 0.25,
                maxHeight: "100%",
              },
              0
            );
          }

          currentSection = section;

          if (section) {
            tl.to(
              section.querySelector("h2"),
              {
                fontSize: widthX,
                opacity: "1",
                color: "#002d70",
              },
              0
            );
            tl.to(
              section,
              {
                maxHeight: "80vh",
              },
              0
            );
            tl.fromTo(
              section.querySelectorAll("p"),
              { maxHeight: "100%" },
              {
                opacity: "1",
                maxHeight: "100%",
              }
            );
          }
        }
      }

      sections.forEach((sct, i) => {
        let sct_index = sct.getAttribute("data-count");

        ScrollTrigger.create({
          start: () => parentST.start + i * window.innerHeight * 0.4,
          end: () => "+=" + window.innerHeight * 0.4,
          onLeaveBack: () => i || goto(null, 0),
          onToggle: (self) => self.isActive && goto(sct, sct_index),
        });
      });
    }

    initTimeline();
  }, []); // Empty dependency array to run once on component mount

  return (
    <div className="timeline">
      <TimelineHeading />
      <div id="section-timeline" className="section-timeline">
        <div className="timeline-container">
          <article className="year year-1" data-count="1">
            <hgroup>
              <h2>2010</h2>
              <p>
                RAAJ SOLAR ESTABLISHED
                <div className="grey_text">
                  35 MW Solar PV Modules Manufacturing facility
                </div>
              </p>
            </hgroup>
          </article>
          <article className="year year-2" data-count="2">
            <hgroup>
              <h2>2013</h2>
              <p>
                EXPANDED MANUFACTURING CAPACITY UP TO 50MW
                <div className="grey_text">
                  Added Auto Stringer Machine to Manufacturing Facility
                </div>
              </p>
            </hgroup>
          </article>
          <article className="year year-3" data-count="3">
            <hgroup>
              <h2>2016</h2>
              <p>
                SUPPLIED 4MW SOLAR PANELS @GUJARAT SUBSIDY FOR RESIDENTIAL SOLAR
                PANELS
                <div className="grey_text">
                  Under “Surya Gujrat” Scheme Supplied 5 MW+
                </div>
              </p>
            </hgroup>
          </article>
          <article className="year year-4" data-count="4">
            <hgroup>
              <h2>2018</h2>
              <p>
                2MW SOLAR PANELS SUPPLIED AT SINGLE LOCATION
                <div className="grey_text">
                  Supplied4 MW Panels in Ground Mounted Projects @Rajasthan
                </div>
              </p>
            </hgroup>
          </article>
          <article className="year year-5" data-count="5">
            <hgroup>
              <h2>2021</h2>
              <p>
                EXPANDED PRODUCTION CAPACITY WITH AUTOMATIC PRODUCTION LINE
                <div className="grey_text">
                  12+ MW Supply In Gujarat Under “Surya Gujarat” Subsidy Scheme
                </div>
              </p>
            </hgroup>
          </article>
          <article className="year year-6" data-count="6">
            <hgroup>
              <h2>2022</h2>
              <p>
                Manufacturing Capacity
                <div className="grey_text">
                  Aim to Reach 1 GW Manufacturing Capacity
                </div>
              </p>
            </hgroup>
          </article>
          <article className="year year-7" data-count="7">
            <hgroup>
              <h2>2023</h2>
              <p>
                AIMING TO EXPAND PRODUCTION ADDITIONALLY 300MW
                <div className="grey_text">
                  Aiming to Expand Manufacturing Capacity up to 300 MW
                </div>
              </p>
            </hgroup>
          </article>
          <article className="year year-8" data-count="8">
            <hgroup>
              <h2>2025</h2>
              <p>
                AIMING TO ACHIEVE 1GW PRODUCTION CAPACITY
                <div className="grey_text">
                  Aim to Reach 1 GW Manufacturing Capacity
                </div>
              </p>
            </hgroup>
          </article>
        </div>
      </div>
    </div>
  );
}

export default TimelineComponent;
