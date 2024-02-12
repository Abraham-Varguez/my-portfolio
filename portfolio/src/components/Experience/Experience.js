import React from "react";
import Econtainers from "./Econtainers";
import "../../styles/experienceStyle.css";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import expereinceData from "./expereinceData";

const Expereince = () => {
  const handleIconClick = () => {
    window.location.href = "/#projects";
  };
  return (
    <section id="experience">
      <p className="text-p1">Explore My</p>
      <h1 className="title"> Expereince</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {expereinceData.map((objData, index) => (
            <Econtainers
              key={index}
              title={objData.title}
              data={objData.data}
            />
          ))}
        </div>
      </div>
      <IoChevronDownCircleOutline
        className="icon arrow"
        onClick={handleIconClick}
      />
    </section>
  );
};

export default Expereince;
