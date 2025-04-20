import React from 'react';
import { motion } from 'framer-motion';

export function Technologies() {
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
                        initial={{ y: -10 }}
                        animate={{
                            y: [10, -10],
                        }}
                        transition={{
                            duration: tech.duration,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: tech.delay,
                        }}
                    >
                        <img
                            src={tech.logo}
                            alt={`${tech.name} logo`}
                            className="technology-logo"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Technologies;
