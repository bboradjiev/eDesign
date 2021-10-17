import React from "react";
import Slide from "react-reveal/Slide";

function Footer() {
  return (
    <footer>
      <Slide bottom cascade duration={2000}>
        <img src="./images/logoCustomer.png" alt="logo" />
        <p>
          Give us your email and we’ll keep you in the loop with our latest
          projects and thoughts.
        </p>
        <form>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
        <hr size="1" width="50%" color="gray" />
        <p className="uppercase">
          2434 Trailmate Dr. Suite 108, Sarasota, FL 34243
          <br />
          941.312.7801
          <br />
          info@constructionmarketing.com
        </p>
        <a href=".#">Google maps</a>
        <div className="media">
          <a href=".#">
            <img alt="media" src="./images/icons8-facebook-48.png" />
          </a>
          <a href=".#">
            <img alt="media" src="./images/linkedin.png" />
          </a>
          <a href=".#">
            <img alt="media" src="./images/twitter.png" />
          </a>
        </div>
      </Slide>
    </footer>
  );
}

export default Footer;
