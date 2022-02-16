import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer.js";
import TopLogo from "./TopLogo";
import AboutUs from "./nav-bar/AboutUs.js";
import ContactUs from "./nav-bar/ContactUs.js";
import MovingServices from "./nav-bar/MovingServices";
import PackingServices from "./nav-bar/PackingServices.js";
import PianoAndSafes from "./nav-bar/PianoAndSafes.js";
import StorageServices from "./nav-bar/StorageServices.js";
function App() {
  return (
    <div className="App">
      <header className="viking-moving"></header>
      <div className="navigation">
        <TopLogo />
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/moving-services" element={<MovingServices />} />
        <Route path="/piano-safes" element={<PianoAndSafes />} />
        <Route path="/packing-services" element={<PackingServices />} />
        <Route path="/storage-services" element={<StorageServices />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
