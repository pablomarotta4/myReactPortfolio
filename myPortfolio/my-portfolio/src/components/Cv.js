import React from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';

const Cv = () => {
    const redirectToCV = () => {
        window.open('https://drive.google.com/file/d/1tGnzlGhAEtZEELXSzkQevVnq1iau9HjI/view', '_blank');
    };

    

    return (
        <Container className="my-container">
            <Row>
                <Col className="cv-container">
                        <Card className="cv-card">
                            <Card.Header className="cv-card-header">
                                Mi CV
                            </Card.Header>
                                <Card.Body>
                                    <div className="cv-container">
                                        <img src={`${process.env.PUBLIC_URL}/CV-Pablo-Marotta.png`} alt="CV" onClick={redirectToCV} />
                                    </div>
                                </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Cv;