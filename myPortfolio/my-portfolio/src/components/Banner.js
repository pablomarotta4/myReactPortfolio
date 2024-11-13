import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importa Framer Motion

export function Banner() {
    const [loop, setLoop] = useState(0);
    const [erased, setErased] = useState(false);
    const [word, setWord] = useState('');
    const wordChange = ['Desarrollador', 'Programador', 'Freelancer', 'Estudiante'];
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [word]);

    const tick = () => {
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
    }

    return (
        <Container className="banner align-items-center">
            <Row className="align-items-center">
                <Col md={4} className="text-center">
                    <motion.img
                        src={process.env.PUBLIC_URL + "/micaricatura.png"}
                        alt="Pablo Marotta"
                        className="profile-pic"
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 }, 
                        }}
                        transition={{
                            y: {
                                duration: 2,
                                yoyo: Infinity, 
                                ease: "easeInOut"
                            }
                        }}
                    />
                </Col>
                <Col md={8} className="text-left">
                    <h1 className="banner-name">Pablo Marotta</h1>
                    <h2 className='wrap'>{word}</h2>
                    <p className="banner-description">Explorando posibilidades infinitas, una línea de código a la vez. Apasionado por diseñar soluciones eficientes y creativas que conectan ideas y tecnología para transformar experiencias digitales</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Banner;
