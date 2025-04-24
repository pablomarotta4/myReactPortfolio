import { useState, useEffect, useMemo, useCallback, lazy, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Lazy load de componentes no críticos
const Slider = lazy(() => import('react-slick'));
const ProjectCard = lazy(() => import('./ProjectCard'));

// Importar estilos de manera optimizada
import("slick-carousel/slick/slick.css");
import("slick-carousel/slick/slick-theme.css");

const LoadingFallback = () => (
    <div className="loading-placeholder" aria-label="Cargando proyectos...">
        <div className="loading-animation"></div>
    </div>
);

export function Projects() {
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [sliderKey, setSliderKey] = useState(0);

    const checkMobile = useCallback(() => {
        const isMobileView = window.innerWidth <= 768;
        if (isMobile !== isMobileView) {
            setIsMobile(isMobileView);
            setSliderKey(prev => prev + 1); // Forzar re-render del slider cuando cambia el viewport
        }
    }, [isMobile]);

    useEffect(() => {
        checkMobile();
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                window.requestAnimationFrame(checkMobile);
            }, 250);
        };
        
        window.addEventListener('resize', handleResize, { passive: true });
        
        const timer = setTimeout(() => setIsLoading(false), 500);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
            clearTimeout(timer);
        };
    }, [checkMobile]);

    const myProjects = useMemo(() => [
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
    ], []);

    const settings = useMemo(() => ({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        swipeToSlide: true,
        touchThreshold: 10,
        useCSS: true,
        useTransform: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    speed: 200,
                    touchThreshold: 5,
                    swipeToSlide: true,
                    adaptiveHeight: true
                }
            }
        ]
    }), []);

    if (isLoading) {
        return <LoadingFallback />;
    }

    return (
        <section id="projects" className="projects">
            <Container>
                <Row>
                    <Col className="projects-intro text-center mb-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                        >
                            <h1 className="projects-title">Proyectos</h1>
                            <p className="projects-text">
                                Estos son algunos de los proyectos en los que he trabajado. 
                                <span className="hover-hint">Pasa el cursor sobre cada proyecto para ver las tecnologías utilizadas.</span>
                            </p>
                            <div className="swipe-indicator">
                                {!isMobile && <FontAwesomeIcon icon={faArrowLeft} />}
                                <span>{isMobile ? "Desliza para ver más" : "Desliza para ver más proyectos"}</span>
                                {!isMobile && <FontAwesomeIcon icon={faArrowRight} />}
                            </div>
                        </motion.div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Suspense fallback={<LoadingFallback />}>
                            <Slider {...settings} key={sliderKey}>
                                {myProjects.map((project, index) => (
                                    <div key={project.title}>
                                        <ProjectCard 
                                            {...project} 
                                            isMobile={isMobile}
                                            priority={index < 2} // Priorizar la carga de los primeros dos proyectos
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </Suspense>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;