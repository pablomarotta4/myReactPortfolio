import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const ProjectItem = ({title, description, tech, img}) => {
    return (
        <div className='project'>
            <Row>
                <Col className='project-img' >
                    <img src={img} alt={title} style={{ maxWidth: '100%', height: '100%' }}/>
                </Col>
                <Col className='project-about'>
                    <h1 href="" className="project-title">{title}</h1>
                    <p className="project-description">{description}</p>
                    <ul className="mt-2 flex flex-wrap">
                        {tech.map((t) => (
                            <li className='mr-1.5 mt-2'>
                                <div className='tech-item'>{t}</div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </div>
    );
}

export default ProjectItem;