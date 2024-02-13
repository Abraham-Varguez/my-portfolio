import React from "react";
import "../styles/contactStyle.css";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/abraham-varguez/",
      "_blank",
      "noopener noreferrer"
    );
  };
  return (
    <section id="contact">
      <p className="text-p1">Get in Touch</p>
      <h1 className="title">Contact</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <IoMdMail className="c-icon" />
          <p className="text-p3 email">
              abrahamvarguez92@gmail.com
          </p>
        </div>
        <div className="contact-info-container">
          <FaLinkedin className="c-icon" />
          <p onClick={handleLinkedIn} className="text-p3">
            LinkedIn
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
