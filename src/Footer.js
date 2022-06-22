import "./App.css";
import { FaMapMarkerAlt } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="phone-number">
        <h2>818 VIKINGS </h2>
        <h2>818 845 4647 </h2>
        <h3> viking@vikingmovingandrelocation.com</h3>
      </div>
      <div className="adress">
        {" "}
        <FaMapMarkerAlt /> Adress: Long Beach, CA 90803{" "}
      </div>
      <div className="logo">
        <img
          alt="logo"
          src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking.png"
        ></img>
      </div>
    </div>
  );
}
export default Footer;
