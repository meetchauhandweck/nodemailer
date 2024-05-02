import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./timelineNew.module.css";
import TimelineHeading from "../timeline/TimeLineHeading";
const TimelineNew = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 60%",
        end: "bottom 80%",
      },
      opacity: 1,
      color: "#002d70",
      ease: "none",
      stagger: 0.9,
    });
    // gsap.to(".triggered-element", {
    //   scrollTrigger: {
    //     trigger: container.current,
    //     scrub: 1,
    //     start: "top 20%",
    //     end: "bottom 10%",
    //   },
    //   opacity: 0,
    //   color: "#002d70",
    //   ease: "none",
    //   stagger: 0.9,
    // });
  };

  return (
    <div>
      <TimelineHeading />
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
          <div className={styles.timeline} ref={container}>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2010</h2>
                  <p>
                    RAAJ SOLAR ESTABLISHED
                    <div className={styles.grey_text}>
                      35 MW Solar PV Modules Manufacturing facility
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2013</h2>
                  <p>
                    EXPANDED MANUFACTURING CAPACITY UP TO 50MW
                    <div className={styles.grey_text}>
                      Added Auto Stringer Machine to Manufacturing Facility
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2016</h2>
                  <p>
                    SUPPLIED 4MW SOLAR PANELS @GUJARAT SUBSIDY FOR RESIDENTIAL
                    SOLAR PANELS
                    <div className={styles.grey_text}>
                      Under “Surya Gujrat” Scheme Supplied 5 MW+
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2018</h2>
                  <p>
                    2MW SOLAR PANELS SUPPLIED AT SINGLE LOCATION
                    <div className={styles.grey_text}>
                      Supplied4 MW Panels in Ground Mounted Projects @Rajasthan
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2021</h2>
                  <p>
                    EXPANDED PRODUCTION CAPACITY WITH AUTOMATIC PRODUCTION LINE
                    <div className={styles.grey_text}>
                      12+ MW Supply In Gujarat Under “Surya Gujarat” Subsidy
                      Scheme
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2022</h2>
                  <p>
                    AIMING TO EXPAND PRODUCTION ADDITIONALLY 300MW
                    <div className={styles.grey_text}>
                      Aiming to Expand Manufacturing Capacity up to 300 MW
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2023</h2>
                  <p>
                    EXPANDED MANUFACTURING CAPACITY
                    <div className={styles.grey_text}>
                      Established state-of-the-art manufacturing facility with
                      300+ MW of capacity
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
            <div className={styles.section}>
              <div className={`${styles.contentX} triggered-element`}>
                <hgroup>
                  <h2>2025</h2>
                  <p>
                    AIMING TO ACHIEVE 1GW PRODUCTION CAPACITY
                    <div className={styles.grey_text}>
                      Aim to Reach 1 GW Manufacturing Capacity
                    </div>
                  </p>
                </hgroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineNew;
