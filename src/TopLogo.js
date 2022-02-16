import "./App.css";
import { BsTelephoneForwardFill } from "react-icons/bs";

function TopLogo() {
  return (
    <div className="top-navbar">
      <div className="logo">
        <img
          alt="logo"
          src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/logo-viking.png"
        ></img>
      </div>
      <div className="phone">
        <div className="phone-number">
          <h2>818 VIKINGS </h2>
          <h2>818 845 4647 </h2>
        </div>
      </div>
    </div>
  );
}

export default TopLogo;
