import React from "react";
import { useState } from "react";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";

function Header() {
  let [toggle, setToggle] = useState(false);
  return (
    <header className={`header ${toggle ? "" : "inactive"}`}>
      <Roll left>
        <span>
          <img className="logo" src="./images/logoCustomer.png" alt="logo" />
        </span>
      </Roll>
      <span onClick={() => setToggle(!toggle)}>
        <img
          className="hamburger"
          src="./images/hamburger.png"
          alt="hamburger"
        />
      </span>
      <Slide right>
        <nav className="links">
          <a onClick={() => setToggle(!toggle)} href="#experience">
            Our Expertise
          </a>
          <a onClick={() => setToggle(!toggle)} href="#whatwedo">
            What we do
          </a>
          <a onClick={() => setToggle(!toggle)} href="#whoweare">
            who are we
          </a>
          <a onClick={() => setToggle(!toggle)} href="#awards">
            Awards
          </a>
          <a onClick={() => setToggle(!toggle)} href="#contacts">
            Contact us
          </a>
        </nav>
      </Slide>
    </header>
  );
}

export default Header;
