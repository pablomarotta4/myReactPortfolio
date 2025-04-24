import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

export function Banner() {
    const [loop, setLoop] = useState(0);
    const [erased, setErased] = useState(false);
    const [word, setWord] = useState('');
    const wordChange = useMemo(() => ['Desarrollador', 'Programador', 'Freelancer', 'Estudiante'], []);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = useCallback(() => {
        let i = loop % wordChange.length;
        let fullText = wordChange[i];
        let updateWord = erased ? fullText.substring(0, word.length - 1) : fullText.substring(0, word.length + 1);

        setWord(updateWord);
        if (erased) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!erased && updateWord === fullText) {
            setDelta(period);
            setErased(true);
        } else if (erased && updateWord === '') {
            setErased(false);
            setLoop(loop + 1);
            setDelta(500);
        }
    }, [loop, word, erased, wordChange, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [word, delta, tick]);

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }), []);

    return (
        <motion.div
            className="banner"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ contain: 'content' }}
        >
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col md={5} className="text-center">
                        <motion.div
                            className="profile-container"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={process.env.PUBLIC_URL + "/micaricatura.png"}
                                alt="Pablo Marotta"
                                className="profile-pic"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 1 }
                                }}
                                width="320"
                                height="320"
                                loading="eager"
                                style={{
                                    willChange: 'transform',
                                    transform: 'translateZ(0)'
                                }}
                            />
                        </motion.div>
                    </Col>
                    <Col md={7} className="text-center text-md-start">
                        <motion.h1 
                            className="banner-name"
                            variants={itemVariants}
                        >
                            Pablo Marotta
                        </motion.h1>
                        <motion.h2 
                            className='wrap'
                            variants={itemVariants}
                        >
                            {word}
                        </motion.h2>
                        <motion.p 
                            className="banner-description"
                            variants={itemVariants}
                        >
                            Explorando posibilidades infinitas, una línea de código a la vez. Apasionado por diseñar soluciones eficientes y creativas que conectan ideas y tecnología para transformar experiencias digitales
                        </motion.p>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}

export default Banner;
