import { useState, useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

export function MainNav() {
    const [scroll, setScroll] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState("home");
    const [expanded, setExpanded] = useState(false);

    const onScroll = useCallback(() => {
        if (window.scrollY > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    const handleNavClick = useCallback((item) => {
        setActiveNavItem(item);
        setExpanded(false);
    }, []);

    return (
        <Navbar 
            expand="lg" 
            className={scroll ? "scroll": ""} 
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
        >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            href="#about" 
                            className={activeNavItem === 'about' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => handleNavClick('about')}
                        >
                            Sobre mí
                        </Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activeNavItem === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => handleNavClick('projects')}
                        >
                            Proyectos
                        </Nav.Link>
                        <Nav.Link 
                            href="#contact" 
                            className={activeNavItem === 'contact' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => handleNavClick('contact')}
                        >
                            Contacto
                        </Nav.Link>
                    </Nav>
                    <div className="social-media">
                        <motion.a 
                            href="https://www.linkedin.com/in/pablo-marotta/" 
                            target="_blank" 
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/174/174857.png" 
                                alt="LinkedIn"  
                                width="30"
                                height="30"
                                loading="lazy"
                            />
                        </motion.a>
                        <motion.a 
                            href="https://github.com/pablomarotta4" 
                            target="_blank" 
                            rel="noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/25/25657.png" 
                                alt="Github"  
                                width="30"
                                height="30"
                                loading="lazy"
                            />
                        </motion.a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;

