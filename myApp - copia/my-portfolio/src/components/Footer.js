import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <p>Copyrigth 2024 - Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;