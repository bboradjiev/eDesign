import React from "react";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";

function WhatWeDo() {
  return (
    <div className="whatwedo" id="whatwedo">
      <img
        className="whatwedo-bg"
        src="./images/BackgroundTwo.jpg"
        alt="whatwedo-bg"
      />
      <div className="whatwedo-text">
        <Fade top duration={1500}>
          <h4>what we do</h4>
        </Fade>
        <Fade bottom duration={2000}>
          <h1>
            We create stunning marketing and websites for influential firms in
            the construction industry.
          </h1>
        </Fade>

        <div className="links">
          <Fade left duration={2000}>
            <a href=".#">web design</a>
            <a href=".#">web marketing</a>
          </Fade>
          <a href=".#">branding</a>
          <Fade right duration={2000}>
            <a href=".#">graphic design</a>
            <a href=".#">video production</a>
          </Fade>
        </div>

        <div className="text">
          <Roll left duration={1500}>
            <aside>
              A powerful website plays an important role in the positioning of
              your firm in today’s competitive construction industry. Our
              modern, device responsive designs stand out and set you apart from
              your competitors. We carefully customize content that proves
              visitors that your firm is the ideal choice for their next
              project.
              <br />
              <br />
              We offer world-class websites that are engaging and designed to
              give decision makers the information and confidence they need to
              make you a part of their project.
            </aside>
          </Roll>
          <ul>
            <Roll right duration={1500}>
              <li>Website design</li>
              <li>Website & social media co-branding</li>
              <li>Web banner advertising</li>
              <li>Website hosting</li>
              <li>Beautiful graphics</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Website video and photo gallery</li>
              <li>Blogging</li>
            </Roll>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
