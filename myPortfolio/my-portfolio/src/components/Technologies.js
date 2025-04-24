import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

export function Technologies() {
    const [isMobile, setIsMobile] = useState(false);

    const checkMobile = useCallback(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

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
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, [checkMobile]);

    const technologies = [
        { name: "React", logo: process.env.PUBLIC_URL + "/react.png", duration: 3, delay: 0 },
        { name: "Next.js", logo: process.env.PUBLIC_URL + "/nextjs.png", duration: 2.5, delay: 0.2 },
        { name: "MongoDB", logo: process.env.PUBLIC_URL + "/mongodb.png", duration: 2.8, delay: 0.4 },
        { name: "SQL", logo: process.env.PUBLIC_URL + "/sql.png", duration: 3.2, delay: 0.1 },
        { name: "Node.js", logo: process.env.PUBLIC_URL + "/nodejs.png", duration: 2.7, delay: 0.3 },
        { name: "C/C++", logo: process.env.PUBLIC_URL + "/c.png", duration: 3.1, delay: 0.5 },
        { name: "Java", logo: process.env.PUBLIC_URL + "/java.png", duration: 2.9, delay: 0.6 },
        { name: "Flutter", logo: process.env.PUBLIC_URL + "/flutter.png", duration: 2.7, delay: 0.7 },
        { name: "Python", logo: process.env.PUBLIC_URL + "/python.png", duration: 2.8, delay: 0.8 },
    ];

    return (
        <section className="technologies-section">
            <h2 className="technologies-title">Tecnologías</h2>
            <div className="technologies-grid">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        className="technology-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ 
                            opacity: 1, 
                            y: 0,
                            ...(isMobile ? {} : {
                                y: [0, -10, 0],
                                transition: {
                                    y: {
                                        duration: tech.duration,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut",
                                        delay: tech.delay
                                    }
                                }
                            })
                        }}
                        viewport={{ once: true }}
                        whileHover={!isMobile ? {
                            scale: 1.1,
                            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                            transition: { duration: 0.3 }
                        } : {}}
                        style={{
                            transform: 'translateZ(0)',
                            willChange: 'transform',
                            contain: 'layout style paint'
                        }}
                    >
                        <div className="technology-content">
                            <motion.img
                                src={tech.logo}
                                alt={`${tech.name} logo`}
                                className="technology-logo"
                                loading="lazy"
                                whileHover={!isMobile ? {
                                    rotate: 360,
                                    scale: 1.2,
                                    transition: { duration: 0.5 }
                                } : {}}
                                style={{
                                    transform: 'translateZ(0)',
                                    willChange: 'transform'
                                }}
                            />
                            <motion.span 
                                className="technology-name"
                                whileHover={!isMobile ? {
                                    scale: 1.1,
                                    color: "#6E07F3",
                                    transition: { duration: 0.3 }
                                } : {}}
                            >
                                {tech.name}
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Technologies;
