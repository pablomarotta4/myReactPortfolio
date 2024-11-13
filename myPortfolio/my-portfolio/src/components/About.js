import { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';

export function About() {
    return (
        <div className='#about'>
                <Container href="#about" fluid className="about-top-section">
                    <div className='text-center'>
                        <p className='about-text'>
                            Soy un desarrollador apasionado con habilidades técnicas sólidas y un enfoque creativo para resolver problemas. Comunicador efectivo y colaborador entusiasta, comprometido con el crecimiento personal y profesional. Busco aplicar mis conocimientos en entornos desafiantes y en constante evolución.
                        </p>
                    </div>
                </Container>  
            {/* <Container className='about-middle-section'>
            <Row className='box'>
                <Col>
                    <Container className='skill-item'>
                    <img src="https://cdn-icons-png.flaticon.com/128/8016/8016946.png" alt="html" width="30px" height="30px" />
                    <h2 className='skill-title'>Desarrollador</h2>
                    <p className="skill-sub-title">Desarrollador con enfoque en soluciones innovadoras y efectivas, siempre buscando mejorar y aprender.</p>
                    <p className='skill-text-title'>Lenguajes:</p>
                    <p className='skill-text'> Java, C+, JavaScript, HTML, CSS, React, mySQL </p>
                    <p className='skill-text-title'>Herramientas:</p>
                    <p className='skill-text'>Git, Github, VSCode</p>
                    </Container>
                </Col>
                <Col>
                    <Container className='skill-item'>
                    <img src="https://cdn-icons-png.flaticon.com/128/3439/3439472.png" alt="html" width="30px" height="30px" />
                    <h2 className='skill-title'>Soft skills</h2>
                    <p className="skill-sub-title">Colaborador proactivo y comunicador claro, excelente en trabajo en equipo y resolución de problemas complejos.</p>
                    <p className='skill-text-title'>Habilidades:</p>
                    <p className='skill-text'>Comunicación Efectiva, Trabajo en equipo, Resolución de Problemas, Adaptabilidad y Flexibilidad</p>

                    </Container>
                </Col>
                <Col>
                    <Container className='skill-item'>
                    <img src="https://cdn-icons-png.flaticon.com/128/1245/1245112.png" alt="html" width="30px" height="30px" />
                    <h2 className='skill-title'>Formación</h2>
                    <p className="skill-sub-title">Estudiante de ingeniería en computación, comprometido con el aprendizaje continuo y la adaptación a nuevas tecnologías.</p>
                    <p className='skill-text-title'>Estudios:</p>
                    <p className='skill-text'>Universidad de la República (UDELAR), SoloLearning.</p>
                    <p className='skill-text-title'>Otros:</p>
                    <p className='skill-text'>Manejo del inglés que permite comunicación fluida.</p>
                    </Container>
                </Col>
            </Row>
        </Container> */}
                
        </div>
    );
}

export default About;