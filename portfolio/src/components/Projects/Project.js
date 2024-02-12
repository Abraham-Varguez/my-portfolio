import React from "react";
import "../../styles/projectStyle.css";
import Pcontainers from "./PContainers";
import projectData from "./projectData";
import { IoChevronDownCircleOutline } from "react-icons/io5";

const Project = () => {
  const handleIconClick = () => {
    window.location.href = "/#projects";
  };
  return (
    <section className="projects">
      <p className="text-p1">Browse my Recent</p>
      <h1 className="title">Projects</h1>
      <div className="project-details-container" id="projects">
        {projectData.map((objData, index) => (
          <Pcontainers
            key={index}
            title={objData.title}
            description={objData.description}
            link={objData.link}
            gitHub={objData.gitHub}
            images={objData.images}
          />
        ))}
      </div>
      <IoChevronDownCircleOutline
        className="icon arrow"
        onClick={handleIconClick}
      />
    </section>
  );
};

export default Project;
