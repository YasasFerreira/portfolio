import React from "react";
import "./Contact.css";
import call_icon from "../../assets/call_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div className="contact-detail">
            <div className="contact-details">
              <img src={mail_icon} alt="mail" />
              <p>yasasferreira05@gmail.com</p>
            </div>
            <div className="contact-details">
              <img src={call_icon} alt="call" />
              <p>+94 76 275 1352</p>
            </div>
            <div className="contact-details">
              <img src={location_icon} alt="location" />
              <p>Gampaha, Sri Lanka</p>
            </div>
          </div>
        </div>

        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="8"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
