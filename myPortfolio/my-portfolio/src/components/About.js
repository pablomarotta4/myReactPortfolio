import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export function About() {
    return (
        <section id="about" className="about">
            <Container fluid className="about-top-section">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <motion.div 
                            className="about-content"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="about-title">Sobre mí</h2>
                            <p className="about-text">
                                Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras y eficientes.
                                Me destaco por mi capacidad de adaptación a nuevas tecnologías y mi compromiso con el aprendizaje continuo,
                                siempre buscando la mejor manera de resolver desafíos a través del código.
                            </p>
                            <div className="about-highlights">
                                <Row>
                                    <Col md={4}>
                                        <motion.div 
                                            className="highlight-item"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="highlight-emoji">💻</span>
                                            <h3>Desarrollador</h3>
                                            <p>Desarrollo de aplicaciones y sistemas, utilizando las mejores prácticas y tecnologías modernas</p>
                                        </motion.div>
                                    </Col>
                                    <Col md={4}>
                                        <motion.div 
                                            className="highlight-item"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="highlight-emoji">🎓</span>
                                            <h3>Formación</h3>
                                            <p>Estudiante de Ingeniería en Computación en UdelaR, con formación continua en tecnologías emergentes</p>
                                        </motion.div>
                                    </Col>
                                    <Col md={4}>
                                        <motion.div 
                                            className="highlight-item"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <span className="highlight-emoji">🚀</span>
                                            <h3>Innovación</h3>
                                            <p>Enfoque en soluciones creativas y eficientes, siempre buscando la mejor manera de resolver desafíos técnicos</p>
                                        </motion.div>
                                    </Col>
                                </Row>
                            </div>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;