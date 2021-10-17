import Clients from "./Components/Clients";
import Expertise from "./Components/Expertise";
import WhatWeDo from "./Components/WhatWeDo";
import WhoWeAre from "./Components/WhoWeAre";
import ContactUs from "./Components/ContactUs";
import Awards from "./Components/Awards";
import Footer from "./Components/Footer";
import "./Scss/index.scss";

function App() {
  return (
    <div className="App">
      <Expertise />
      <WhatWeDo />
      <WhoWeAre />
      <Clients />
      <Awards />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
