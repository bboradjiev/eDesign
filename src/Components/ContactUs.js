import React from "react";
import Fade from "react-reveal/Fade";

function ContactUs() {
  return (
    <div className="contacts" id="contacts">
      <img
        className="contactUs-bg"
        src="./images/Backgroundfour.jpg"
        alt="contactUs-bg"
      />
      <div className="container">
        <Fade top>
          <h4>Contact Us</h4>
          <h1>Tell Us About Your Project</h1>
        </Fade>

        <Fade left cascade duration={1500}>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <textarea
              className="text"
              type="text"
              placeholder="Tell us about your project"
            />
            <select placeholder="budget">
              <option value="" disabled selected hidden>
                timeframe & budget
              </option>
              <option value="volvo">1000+</option>
              <option value="saab">5000+</option>
              <option value="fiat">10 000+</option>
              <option value="audi">100 000+</option>
            </select>
            <button>Contact us</button>
          </form>
        </Fade>
      </div>
    </div>
  );
}

export default ContactUs;
