import React from "react";
import "../styles/heroStyle.css";
import profilePic from "../images/profile-pic.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  const resume =
    "https://docs.google.com/document/d/1npY8-ELfSQSwjwfoU_PdZyZUKSu5_wq6/edit";
  const linked = "https://www.linkedin.com/in/abraham-varguez/";
  const github = "https://github.com/Abraham-Varguez";

  const handleResume = () => {
    window.open(resume, "_blank", "noopener noreferrer");
  };
  const handleLinkedIn = () => {
    window.open(linked, "_blank", "noopener noreferrer");
  };
  const handleGithub = () => {
    window.open(github, "_blank", "noopener noreferrer");
  };

  return (
    <>
      <section className="profile">
        <div className="pic-container">
          <img src={profilePic} alt="profile of Abraham Varguez" />
        </div>
        <div className="text">
          <p className="text__p1"> Hello, I'm</p>
          <h1 className="title">Abraham Varguez</h1>
          <p className="text__p2">Fullstack Developer in Charlotte, NC</p>
          <div className="btn-container">
            <button className="btn btn-1" onClick={handleResume}>
              Resume
            </button>
            <button className="btn btn-2">
              <a className="contact-info-btn" href="#contact">
                Contact Info
              </a>
            </button>
          </div>
          <div className="socials-container">
            <FaLinkedin className="icon" onClick={handleLinkedIn} />
            <FaGithub className="icon" onClick={handleGithub} />
          </div>
        </div>
      </section>
      <p className="website-info">
        This Project was created with React.js and will be mobile responsive in
        the coming future
      </p>
    </>
  );
};

export default Hero;
