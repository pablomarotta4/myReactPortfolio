import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ProjectItem } from './ProjectItem';

export function Projects() {
    const myProjects = [
        {
            title: "TrabajoUY",
            description: "TrabajoUY es una plataforma de búsqueda de empleo que conecta a empresas con candidatos. La plataforma permite a los usuarios buscar empleo, postularse a ofertas laborales y a las empresas publicar ofertas de trabajo.",
            tech: ["Java", "Servlets", "Web Services", "HTML", "CSS", "Meaven", "JSP"],
            img: "https://gitlab.fing.edu.uy/joaquin.cabrera.pastor/trabajouy/-/raw/master/src/main/webapp/media/images/trabajoUy.png?ref_type=heads"
        },
    ];


    return (
    <section id="projects" className='projects'>
    <Container className='projects'>
    <Row>
        <Col className='projects-intro'>
            <div className='projects-title'>
                <h1>Proyectos</h1>
            </div>
            <div className='projects-text'>
                <p>Estos son algunos de los proyectos en los que he trabajado. </p>
            </div>
        </Col>
    </Row>
    <Row>
       <Col>
            {myProjects.map((project,index) => (
                <Row>
                <ProjectItem key={index} title={project.title} description={project.description} tech={project.tech} img={project.img} />
                </Row>
            ))}
       </Col>
    </Row>
    </Container>
    </section>
    );
}

export default Projects;