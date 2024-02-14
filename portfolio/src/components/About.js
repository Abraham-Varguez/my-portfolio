import React from "react";
import "../styles/aboutStyle.css";
import aboutPic from "../images/abe-profile.png";
import { TbBrandMinecraft } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const About = () => {
  const handleIconClick = () => {
    window.location.href = "/#experience";
  };

  return (
    <section className="about" id="about">
      <p className="text-p1">Get to know more</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="pic-container">
          <img src={aboutPic} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <TbBrandMinecraft className="a-icon" />
              <h3>Experience</h3>
              <p>
                1+ year <br /> Web Development
              </p>
            </div>
            <div className="details-container">
              <FaGraduationCap className="a-icon" />
              <h3>Education</h3>
              <p>
                Road To Hire Program <br /> Udemy Certifications
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Greetings! I'm Abraham Varguez, a passionate Front-End Web Developer
              based in Charlotte, NC. With a background as an IV Technician at
              Atrium Health and Levine Cancer Center and a recent participant in
              the Road to Hire program, I've seamlessly transitioned into the
              world of tech. My expertise lies in crafting engaging and
              user-friendly applications using React.js. Beyond coding, I find
              joy in staying active with sports like Pickleball, conquering
              challenges in video games, and pushing my limits in running—I'm
              gearing up for my first 5k in just two weeks! Fluent in Spanish
              and surrounded by the companionship of a dog and two cats, I'm
              excited to bring my skills and positive energy to every project.{" "}
              <br />{" "}
              <span className="bold">
                Let's build something amazing together!
              </span>
            </p>
          </div>
        </div>
      </div>
      <IoChevronDownCircleOutline
        className="icon arrow"
        onClick={handleIconClick}
      />
    </section>
  );
};

export default About;
