import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion'; // Importar Framer Motion
import ProjectCard from './ProjectCard'; 
import Slider from 'react-slick'; // Importar react-slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Arrow from './Arrow'; // Importar el componente Arrow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function Projects() {
    const myProjects = [
        {
            title: "TrabajoUY",
            description: "TrabajoUY es una plataforma de búsqueda de empleo que conecta a empresas con candidatos. La plataforma permite a los usuarios buscar empleo, postularse a ofertas laborales y a las empresas publicar ofertas de trabajo. Este proyecto fue desarrollado para el curso de Taller de Programación de la Facultad de Ingeniería de la Universidad de la República.",
            tech: ["Java", "Servlets", "Web Services", "HTML", "CSS", "Meaven", "JSP"],
            img: process.env.PUBLIC_URL + "/trabajoUy.png",
            link: "https://github.com/pablomarotta4/TrabajoUY"
        },
        {
            title: "Portfolio utilizando HTML, CSS y JavaScript",
            description: "Este es mi portfolio personal. El mismo fue desarrollado utilizando HTML, CSS y JavaScript para el curso de desarrollador web de IBM.",
            tech: ["HTML", "CSS", "JavaScript"],
            img: process.env.PUBLIC_URL + "/portfolio.png",
            link: "https://pablomarotta4.github.io/jsPortfolio/"
        },
        {
            title: "App de clases de idiomas",
            description: "Proyecto de clases de idiomas que permite a los usuarios registrarse, loguearse, ver los profesores disponibles y reservar clases, entre otras funcionalidades. Este proyecto fue desarrollado para el curso de Programación 4 de la Facultad de Ingeniería de la Universidad de la República.",
            tech: ["C++"],
            img: process.env.PUBLIC_URL + "/idiomas.png",
            link: "https://github.com/pablomarotta4/LABP4"
        },
        {
            title: "Twitter copycat",
            description: "Copycat de Twitter realizado mediante tecnologias cross-plataform.",
            tech: ["Firebase", "Flutter"],
            img: process.env.PUBLIC_URL + "/twcopycat.png",
            link: "https://github.com/pablomarotta4/smartUpChallenge"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow icon={<FontAwesomeIcon icon={faChevronRight} />} />,
        prevArrow: <Arrow icon={<FontAwesomeIcon icon={faChevronLeft} />} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="projects" className="projects">
            <Container>
                <Row>
                    <Col className="projects-intro text-center mb-5">
                        <div className="projects-title">
                            <h1>Proyectos</h1>
                        </div>
                        <div className="projects-text">
                            <p>Estos son algunos de los proyectos en los que he trabajado.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Slider {...settings}>
                            {myProjects.map((project, index) => (
                                <div key={index}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }} 
                                        whileTap={{ scale: 0.95 }} 
                                        initial={{ opacity: 0, y: 50 }} 
                                        animate={{ opacity: 1, y: 0 }} 
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1, 
                                            ease: "easeOut"
                                        }}
                                    >
                                        <ProjectCard
                                            title={project.title}
                                            description={project.description}
                                            tech={project.tech}
                                            imgUrl={project.img}
                                            link={project.link}
                                        />
                                    </motion.div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;