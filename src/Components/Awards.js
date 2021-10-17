import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

function Awards() {
  return (
    <div className="awards" id="awards">
      <Slide top>
        <h4>Awards</h4>
      </Slide>
      <div className="container">
        <div className="projects">
          <Slide left>
            <h1>500+</h1>
            <h4>Fullfilled Projects</h4>
          </Slide>
        </div>
        <div className="projects-two">
          <Slide right>
            <h1>80+</h1>
            <h4>Awards</h4>
          </Slide>
        </div>
      </div>
      <aside className="aside-one">
        <Fade top>
          <p>
            With 550+ fulfilled projects and over 81 awards and nominations, you
            are in good hands with us.
            <br />
            <br />
            In the last 10 years, our creative team has been acclaimed for the
            effectiveness and innovation of our marketing campaigns. We are
            truly honored for your recognition; it keeps our energy, ambition
            and focus high.
          </p>
        </Fade>
      </aside>
      <aside className="aside-two">
        <Slide left>
          <img alt="award" src="./images/awardOne.png" />
          <img alt="award" src="./images/awardThree.png" />
        </Slide>
        <Slide bottom duration={2000}>
          <img alt="award" src="./images/awardtwo.png" />
          <img alt="award" src="./images/awardFour.png" />
        </Slide>
        <Slide right>
          <img alt="award" src="./images/awardFive.png" />
          <img alt="award" src="./images/awardSix.png" />
        </Slide>
      </aside>
    </div>
  );
}

export default Awards;
