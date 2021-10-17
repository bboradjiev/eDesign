import React from "react";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import Slide from "react-reveal/Slide";

function Expertise() {
  return (
    <div className="experience" id="experience">
      <div
        className="experience-bg"
        style={{ backgroundImage: `url("./images/BackgroundOne.jpg")` }}
      ></div>
      <div className="experience-info">
        <Header />
        <Slide left cascade>
          <div className="experience-text">
            <h1 className="h1-exc">
              Building &nbsp;&nbsp;our
              <img
                className="excavator"
                src="./images/excavator.png"
                alt="excavator"
              />
              <span className="letter">Y</span>
            </h1>
            <h1>Digital Presance</h1>
            <p>
              We serve the construction and building industries with impactful
              and highly creative websites.
            </p>

            <span>
              <img
                className="triangle"
                src="./images/triangle.png"
                alt="triangle"
              />
            </span>
          </div>
        </Slide>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Expertise;
