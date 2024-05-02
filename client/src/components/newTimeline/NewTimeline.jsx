import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./newTimeline.scss";

const NewTimeLine = () => {
  const container = useRef(null);

  var sections = document.querySelectorAll(".new_wrapper");
  const vh = (coef) => window.innerHeight * (coef / 100);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    create();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createBoll();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top top",
        // end: "bottom ",
        toggleClass: "started",
        pin: true,
        end: () => "+=" + (sections.length - 1) * vh(80),
      },
      opacity: 1,
      color: "black",
      ease: "out",
      duration: 1.5,
      //   ease: "slow(0.7,0.7,false)",
      scale: 1.25,
      stagger: 0.9,
    });
  };

  const create = () => {
    gsap.to(".triggered-section", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top top",
        end: "bottom ",
        pin: true,
      },
      opacity: 1,
      color: "black",
      ease: "out",
      scale: 2,
      duration: 1.5,
      // ease: "slow(0.7,0.7,false)",
      stagger: 0.9,
    });
  };

  const createBoll = () => {
    gsap.to(".triggered-bead", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top top",
        end: "bottom ",
      },
      opacity: 1,
      backgroundColor: "#C3A464",
      duration: 1.5,
      ease: "slow(0.7,0.7,false)",
      scale: 2.2,
      stagger: 0.9,
    });
  };

  return (
    <div>
      <div className="timeline_outer">
        <div className="timeline_wrapper">
          <h2 className="timeline_heading">Our Story</h2>

          <div className="timeline_main_outer">
            <div className="timeline_width" id="timeline_width">
              <div className="timeline" ref={container}>
                <div className="line"></div>
                <div className="new_wrapper">
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>

                    <div
                      className="content triggered-element"
                      style={{
                        paddingLeft: "60rem",
                        width: "calc(100% - 2rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        First Laminate Factory was established at Surendranagar.
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "45rem",
                        }}
                        className="triggered-section"
                      >
                        1978
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <div className="content">
                        <p className="timeline_comment">
                          Second Laminate Factory was established in Ahmedabad.
                        </p>

                        <div
                          style={{
                            fontSize: "50px",
                            color: "#848484",
                            position: "absolute",
                            top: "0rem",
                            left: "42rem",
                          }}
                          className="triggered-section"
                        >
                          1999
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        Modular Furniture Factory was established in Rajkot.
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "42rem",
                        }}
                        className="triggered-section"
                      >
                        1999
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        An Aluminium extrusion unit with 3 top of the line
                        presses started in Ahmedabad
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "42rem",
                        }}
                        className="triggered-section"
                      >
                        2002
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        An Aluminium extrusion unit with 3 top of the line
                        presses started in Ahmedabad
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "42rem",
                        }}
                        className="triggered-section"
                      >
                        2002
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        An Aluminium extrusion unit with 3 top of the line
                        presses started in Ahmedabad
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "42rem",
                        }}
                        className="triggered-section"
                      >
                        2002
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        An Aluminium extrusion unit with 3 top of the line
                        presses started in Ahmedabad
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "42rem",
                        }}
                        className="triggered-section"
                      >
                        2002
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        An Aluminium extrusion unit with 3 top of the line
                        presses started in Ahmedabad
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "42rem",
                        }}
                        className="triggered-section"
                      >
                        2002
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <div
                      style={{
                        position: "absolute",
                        display: "block",
                        height: "1rem",
                        width: "1rem",
                        borderRadius: "50%",
                        backgroundColor: "#0f8a83",
                        left: "49.1%",
                        zIndex: "2",
                        top: "14%",
                        transform: "translateX(-50%)",
                      }}
                      className="triggered-bead"
                    ></div>
                    <div
                      className="content triggered-element"
                      style={{
                        //   width: "100%",
                        paddingLeft: "60rem",
                        width: "calc(100% - 23rem)",
                        color: "#848484",
                        fontSize: "35px",
                        opacity: 0.1,
                      }}
                    >
                      <p className="timeline_comment">
                        An Aluminium extrusion unit with 3 top of the line
                        presses started in Ahmedabad
                      </p>

                      <div
                        style={{
                          fontSize: "50px",
                          color: "#848484",
                          position: "absolute",
                          top: "0rem",
                          left: "42rem",
                        }}
                        className="triggered-section"
                      >
                        2002
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTimeLine;
