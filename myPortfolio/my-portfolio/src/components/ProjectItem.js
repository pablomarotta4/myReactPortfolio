import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const ProjectItem = ({ title, description, tech, img, link }) => {
    const handleLinkClick = (event) => {
        window.location.href = link;
    };

    return (
        <div className='project'>
            <Row>
                <Row className='project-img-container'>
                    <img src={img} alt={title} className='project-img' />
                </Row>
                <Row className='project-about'>
                    <a href={link} className="project-title" onClick={handleLinkClick}>{title}</a>
                    <p className="project-description">{description}</p>
                    <ul className="mt-2 flex flex-wrap techStatus">
                        {tech.map((t, index) => (
                            <li key={index} className='mr-1.5 mt-2'>
                                <div className='tech-item'>{t}</div>
                            </li>
                        ))}
                    </ul>
                </Row>
            </Row>
        </div>
    );
}

export default ProjectItem;
