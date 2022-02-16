import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-bar">
      <ul>
        <Link to="/">
          <li>ABOUT US</li>
        </Link>
        <Link to="/moving-services">
          <li>MOVING SERVICED</li>
        </Link>
        <Link to="/piano-safes">
          {" "}
          <li>PIANO AND SAFES</li>
        </Link>
        <Link to="/packing-services">
          <li>PACKING SERVICES</li>
        </Link>
        <Link to="/storage-services">
          <li>STORAGE SERVICES</li>
        </Link>
        <Link to="/contact-us">
          <li>CONTACT US</li>
        </Link>
      </ul>
    </div>
  );
}
export default NavBar;
