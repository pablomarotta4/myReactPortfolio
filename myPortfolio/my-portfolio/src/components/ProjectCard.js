import React, { useState, memo, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = memo(({ title, description, tech, img, link, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsHovered(true);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsHovered(false);
    }
  }, [isMobile]);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="project-card-wrapper">
      <motion.div 
        className="project-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          position: 'relative',
          zIndex: isHovered ? 1 : 0
        }}
        whileHover={{
          scale: 1.05,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
      >
        <div className="project-img-container">
          <motion.div
            className="project-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={img} 
              alt={title}
              loading="lazy"
              onLoad={handleImageLoad}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                opacity: imageLoaded ? 1 : 0,
                transition: 'opacity 0.3s ease',
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
            />
            <AnimatePresence>
              {(isHovered || isMobile) && (
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="tech-tags">
                    {tech?.map((t, i) => (
                      <span 
                        className="tag" 
                        key={`${title}-${t}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FontAwesomeIcon icon={faEye} />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div 
          className="project-content"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <h5>{title}</h5>
          <p className="project-description">{description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
