import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

function WhoWeAre() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
  };
  return (
    <div className="whoweare" id="whoweare">
      <Bounce top duration={2000}>
        <Slider {...settings}>
          <div>
            <img className="img" src="./images/screens.png" alt="img" />
          </div>
          <div>
            <img
              className="img"
              src="./images/Japanese-Designs-PNG-HD.png"
              alt="img"
            />
          </div>
          <div>
            <img
              className="img"
              src="./images/pngaaa.com-1379022.png"
              alt="img"
            />
          </div>
          <div>
            <img
              className="img"
              src="./images/pngaaa.com-1419710.png"
              alt="img"
            />
          </div>
          <div>
            <img
              className="img"
              src="./images/pngaaa.com-1160586.png"
              alt="img"
            />
          </div>
          <div>
            <img className="img" src="./images/sliderIMGone.png" alt="img" />
          </div>
        </Slider>
      </Bounce>
      <div className="container">
        <Slide left>
          <button className="button_one">tell us about your project</button>
        </Slide>
        <Slide right>
          <h4>Who we are</h4>
        </Slide>
        <aside className="aside_one">
          <Slide bottom duration={2000}>
            <h1>
              The digital agency <br />
              that represents leaders.
            </h1>
          </Slide>
          <Slide bottom duration={2000}>
            <p>
              Our team delivers outstanding websites and online advertising that
              helps clients increase their market share. Unmatched by any other
              firm, our knowledge in manufacturing and how products are
              selected, distributed and sold, sets us apart.
              <br />
              <br />
              We offer a unique blend of industry expertise, technology and
              creativity that will allow your corporation to break through the
              noise.
              <br />
              <br />
              We are CMT | Construction Marketing Team <br /> Perfect
              collaboration of three companies:
            </p>
          </Slide>
        </aside>
        <aside className="aside_two">
          <Flip>
            <span className="logo">
              <img src="./images/eDesign.png" alt="logo" />
            </span>
          </Flip>
          <div className="text">
            <Flip top>
              <p>
                Do you need digital advertising that creates brand awareness,
                attracts traffic to your business and converts visitors into
                paying customers? eDesign can help you dazzle your audience and
                grow your bottom line with tangible results.
                <br />
                <br />
                eDesign is an award-winning digital agency. We create
                world-class websites, interactive landing pages and immersive
                social campaigns. We collaborate with leading brands to educate,
                engage, entertain and ultimately drive sales.
                <br />
                <br />
                Our clients range from private businesses to corporations, ad
                agencies and PR firms. Together, we create, co-create and
                develop smart online advertising that cannot help but get
                noticed.
              </p>
            </Flip>
            <Slide left duration={2000}>
              <button className="button_two">&lt; Back </button>
            </Slide>
          </div>
          <Flip>
            <span className="brush">
              <img src="./images/brush.png" alt="brush" />
            </span>
          </Flip>
        </aside>
      </div>
    </div>
  );
}

export default WhoWeAre;
