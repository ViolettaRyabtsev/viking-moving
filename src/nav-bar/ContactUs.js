import "./contact.css";
import React from "react";
import "./nav-bar.css";

import { Formik, Field, Form } from "formik";

function ContactUs() {
  return (
    <div className="about-us-container">
      <div className="about-us">
        <img
          src="https://s3.us-west-2.amazonaws.com/moveviking.com/images/abstract.jpg"
          alt="moving"
        ></img>
      </div>
      <div className="text">
        <h2>
          This is an exclusive channel where you can get in touch with Viking.
          Send us your suggestion, doubt or compliment.
        </h2>
        <div className="contact-form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "live message",
            }}
            onSubmit={async (values) => {
              return alert(JSON.stringify(values, null, 4));
            }}
          >
            <Form class="contact-box">
              <Field name="name" type="text" className="contact-box-field" />
              <Field name="email" type="text" className="contact-box-field" />
              <Field name="phone" type="text" className="contact-box-field" />
              <Field name="message" class="message-box" type="text" />
              <button type="submit" class="submit-button">
                SEND
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
