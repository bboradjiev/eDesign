import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

function Clients() {
  return (
    <div className="clients" id="clients">
      <img
        className="clients-bg"
        src="./images/backgroundThree.jpg"
        alt="clients-bg"
      />
      <div className="text">
        <Bounce top>
          <h4>Clients</h4>
          <h1>Our clients demand high quality advertising.</h1>
        </Bounce>
        <Flip top>
          <p>
            Over the past decade we have built lasting relationships with the
            leaders of the construction industry. From builders and construction
            managers, to multinational equipment and tool manufacturers, our
            clients demand high quality advertising, exceptional service and
            on-time delivery. Most of the projects we handle require discretion
            and elaborate security measures during the design phase, so when the
            news is released it makes a big splash.
            <br />
            <br />
          </p>
        </Flip>
        <Flip bottom>
          <h3>We serve:</h3>
        </Flip>
        <aside className="list">
          <Slide left duration={1500}>
            <ul>
              <li>General Contractors</li>
              <li>Construction Managers</li>
              <li>Design/Build Experts </li>
              <li>Specialty Sub-Contractors</li>
            </ul>
          </Slide>
          <Slide right duration={1500}>
            <ul>
              <li>Building Product Manufacturers</li>
              <li>Construction Equipment Manufacturers</li>
              <li>Tool Manufacturers</li>
              <li>Firms Servicing the Construction Industry</li>
            </ul>
          </Slide>
        </aside>
      </div>
    </div>
  );
}

export default Clients;
