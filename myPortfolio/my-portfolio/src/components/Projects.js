import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion'; 
import ProjectCard from './ProjectCard'; 
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function Projects() {
    const myProjects = [
        {
          title: "TrabajoUY",
          description: "Plataforma para buscar y publicar ofertas de empleo. Proyecto académico de la Facultad de Ingeniería (UdelaR).",
          tech: ["Java", "Servlets", "Web Services", "HTML", "CSS", "Maven", "JSP"],
          img: process.env.PUBLIC_URL + "/trabajoUy.png",
          link: "https://github.com/pablomarotta4/TrabajoUY"
        },
        {
          title: "Portfolio Web",
          description: "Mi portfolio personal, creado con HTML, CSS y JavaScript durante el curso de IBM.",
          tech: ["HTML", "CSS", "JavaScript"],
          img: process.env.PUBLIC_URL + "/portfolio.png",
          link: "https://pablomarotta4.github.io/jsPortfolio/"
        },
        {
          title: "App de Idiomas",
          description: "App para registrarse y reservar clases de idiomas. Proyecto académico de la UdelaR.",
          tech: ["C++"],
          img: process.env.PUBLIC_URL + "/idiomas.png",
          link: "https://github.com/pablomarotta4/LABP4"
        },
        {
          title: "Twitter Clone",
          description: "Clon de Twitter construido con Flutter y Firebase.",
          tech: ["Flutter", "Firebase"],
          img: process.env.PUBLIC_URL + "/twcopycat.png",
          link: "https://github.com/pablomarotta4/smartUpChallenge"
        },
        {
            title: "Concesionario Virtual",
            description: "Sistema completo para gestión de vehículos, consultas, autenticación con JWT y chatbot con IA.",
            tech: ["FastAPI", "Python", "MongoDB", "JWT", "React", "TypeScript", "Tailwind", "IA"],
            img: process.env.PUBLIC_URL + "/concesionario.jpg", 
            link: "https://github.com/pablomarotta4/Concesionario" 
          }
      ];
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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