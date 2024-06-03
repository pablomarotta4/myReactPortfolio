import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function MainNav() {
    const  [scroll, setScroll] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScroll(true);
            }
            else {
                setScroll(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }
    ,[]);

    const alternarEstadoItem = (item) => {
        setActiveNavItem(item);
    }


    return (
        <>
            <Navbar expand="lg" className={scroll ? "scroll": ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container className="ToggleContainer">
                        <Container class="item-container">
                        <Nav className="me-auto">
                            <Nav.Link href="#about" className={activeNavItem === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => alternarEstadoItem('about')}>Sobre mi</Nav.Link>
                            <Nav.Link href="#projects" className={activeNavItem === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => alternarEstadoItem('projects')}>Proyectos</Nav.Link>
                            <Nav.Link href="#contact" className={activeNavItem === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => alternarEstadoItem('contact')}>Contacto</Nav.Link>
                        </Nav>
                        </Container>
                        <Container>
                        <div className="social-media">
                            <Row className=''>
                                <Col>
                                    <a href="https://www.linkedin.com/in/pablo-marotta/" target="_blank" rel="noreferrer">
                                        <img className='img-fluid mx-auto d-block' src="https://cdn-icons-png.flaticon.com/128/174/174857.png" alt="LinkedIn"  width="30px" height="30px"/>
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://github.com/pablomarotta4" target="_blank" rel="noreferrer">
                                        <img className='img-fluid mx-auto d-block' src="https://cdn-icons-png.flaticon.com/128/25/25657.png" alt="Github"  width="30px" height="30px"/>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    </Container>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    );
}

export default MainNav;

