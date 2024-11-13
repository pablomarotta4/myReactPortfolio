import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div className="project-overlay">
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>
      </div>
      <div className="project-content">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
