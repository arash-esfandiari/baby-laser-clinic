// ServicesPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import laserHairRemovalImage from '../assets/images/laser.jpeg'; // Placeholder path
import laserFacialImage from '../assets/images/fractional.jpeg'; // Placeholder path
import hotTowelImage from '../assets/images/hot-towel.jpeg'; // Placeholder path
import professionalBedImage from '../assets/images/bed.jpeg'; // Placeholder path

const ServicesPage = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center mb-5">Our Services</h1>
            <Row>
                <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch">
                    <Card className="h-100">
                        <Card.Img variant="top" src={laserHairRemovalImage} />
                        <Card.Body>
                            <Card.Title>Laser Hair Removal</Card.Title>
                            <Card.Text>
                                Experience smooth skin with our state-of-the-art laser hair removal for all body parts. Safe, effective, and painless.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch">
                    <Card className="h-100">
                        <Card.Img variant="top" src={laserFacialImage} />
                        <Card.Body>
                            <Card.Title>Laser Fractional Facial</Card.Title>
                            <Card.Text>
                                Rejuvenate your skin with our laser fractional facial treatment. Achieve clear, youthful, and radiant skin.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch">
                    <Card className="h-100">
                        <Card.Img variant="top" src={hotTowelImage} />
                        <Card.Body>
                            <Card.Title>Hot Towels</Card.Title>
                            <Card.Text>
                                Relax and unwind with our comforting hot towel service, a perfect addition to any treatment.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-4 d-flex align-items-stretch">
                    <Card className="h-100">
                        <Card.Img variant="top" src={professionalBedImage} />
                        <Card.Body>
                            <Card.Title>Clean Professional Bed</Card.Title>
                            <Card.Text>
                                Our professional beds ensure a clean, safe, and comfortable experience throughout your treatment.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ServicesPage;
