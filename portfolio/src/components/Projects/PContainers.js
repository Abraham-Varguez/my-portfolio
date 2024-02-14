import React from "react";
import Slideshow from "./Slideshow";

const Pcontainers = ({
  title,
  description,
  link,
  gitHub,
  images,
  subTitle,
}) => {
  const handleGithub = () => {
    window.open(gitHub, "_blank", "noopener noreferrer");
  };
  const handleLink = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <div className="p-sub-details-container color-container">
      <div className="">
        <Slideshow images={images} />
      </div>
      <h2 className="project-title">{title}</h2>
      <p className="text-p4">{subTitle}</p>
      <p className="project-text">{description}</p>
      <div className="p-btn-container">
        <button className="btn project-btn" onClick={handleGithub}>
          GitHub
        </button>
        <button className="btn project-btn" onClick={handleLink}>
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default Pcontainers;
