import React from 'react';
import { motion } from 'framer-motion';

const Divider = () => {
    return (
        <motion.div
            className="divider"
            initial={{ width: 0 }} // Inicia sin anchura
            animate={{ width: "100%" }} // Se expande al 100% de la anchura
            transition={{
                duration: 1, // Duración de la animación
                ease: "easeInOut" // Suavizado para un movimiento fluido
            }}
        />
    );
};

export default Divider;
