import { Container , Row , Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';

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
        return () => { clearInterval(ticker)};
    }, [word]);

    const tick = () => {
        let i = loop % wordChange.length;
        let fullText = wordChange[i];
        let updateWord = erased ? fullText.substring(0, word.length - 1) : fullText.substring(0, word.length + 1);

        setWord(updateWord);
        if(erased){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!erased && updateWord === fullText){
            setDelta(period);
            setErased(true);
        }
        else if(erased && updateWord === ''){
            setErased(false);
            setLoop(loop + 1);
            setDelta(500)
        }
    }


    return (
        <Container className="banner align-items-center">
            <Row className='align-items-center'>
                <Col className=" text-center align-items-center">
                    <h1>Pablo Marotta</h1>
                    <h2 className='wrap word-changer'>{word}</h2>
                    <p> Explorando posibilidades infinitas, una línea de código a la vez.</p>
                </Col>
            </Row>
            <Row>
            <Col class="align-items-bottom">
                <img src="https://cdn-icons-png.flaticon.com/128/1688/1688400.png" alt="Pablo Marotta" />
            </Col>
            </Row>
        </Container>
    );
}
export default Banner;