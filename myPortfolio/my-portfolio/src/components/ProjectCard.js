import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, tech, imgUrl, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-img-container">
        <div
          className="project-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="project-overlay">
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              <FontAwesomeIcon icon={faEye} />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h5>{title}</h5>
        {isHovered ? (
          <div className="tech-tags">
            {tech?.map((t, i) => (
              <span className="tag" key={i}>
                {t}
              </span>
            ))}
          </div>
        ) : (
          <p>{description}</p>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;
