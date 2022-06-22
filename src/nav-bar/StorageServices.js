import "./nav-bar.css";

function StorageServices() {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <img
          src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/abstract.jpg"
          alt="moving"
        ></img>
      </div>
      <div className="text">
        <p>
          {" "}
          All of us have had that "what am I going to do with all these things!
          I don't want to take them, but I want to keep them!" moment, and we
          know how it feels! For that reason and for your convenience, Viking
          offers a great storage solution for you. We will store your things in
          our warehouse safely, accessibly and affordably, for a short stay or a
          long period, which ever you decide is best for you. <br></br>{" "}
          <br></br>Call us and let us know how we may be able to help you with
          your storage needs.
        </p>
      </div>
      ;
    </div>
  );
}

export default StorageServices;
