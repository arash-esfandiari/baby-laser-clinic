// AboutPage.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import teamPhoto from '../assets/images/leg3.png'; // Placeholder, replace with actual path
import clinicInterior from '../assets/images/leg5.png'; // Placeholder, replace with actual path

const AboutPage = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col lg={6}>
                    <Image src={teamPhoto} alt="Our Team" fluid roundedCircle />
                </Col>
                <Col lg={6}>
                    <h1>Welcome to Baby Laser Clinic</h1>
                    <p>
                        At Baby Laser Clinic, we're dedicated to providing the best in laser treatment and care.
                        Our team of experts uses the latest technology to ensure you receive the highest
                        standard of service. Learn more about our journey, values, and commitment to excellence.
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col lg={12}>
                    <h2>Our Space</h2>
                    <Image src={clinicInterior} alt="Clinic Interior" fluid thumbnail />
                    <p>
                        Our clinic is designed with your comfort and safety in mind. We believe in creating
                        a welcoming, relaxing environment where you can feel at ease while receiving treatment.
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col lg={12}>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to empower individuals by enhancing their natural beauty through
                        the latest laser technology. We are committed to innovation, excellence, and
                        making a positive impact in the lives of our clients.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
