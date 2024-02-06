import React from "react";
import "../../styles/experienceStyle.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Econtainers = ({ title, data }) => {
  return (
    <div className="details-container">
      <h2 className="expereince-sub-title">{title}</h2>
      <div className="article-container">
        {data.map((objData, index) => (
          <article key={index}>
            <BsPatchCheckFill className="e-icon" />
            <div className="e-flex">
              <h3 className="e-title">{objData.title}</h3>
              <p className="e-description">{objData.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Econtainers;
