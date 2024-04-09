// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-4 bg-light">
            <Container>
                <Row className="justify-content-center text-center mb-3">
                    <Col>
                        <h5>Follow us on social media for updates and offers.</h5>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center mb-4">
                    <Col lg={1} md={2} sm={3} xs={4}>
                        <Link to="#" className="text-dark mx-2"><FaFacebookF /></Link>
                    </Col>
                    <Col lg={1} md={2} sm={3} xs={4}>
                        <Link to="#" className="text-dark mx-2"><FaInstagram /></Link>
                    </Col>
                    <Col lg={1} md={2} sm={3} xs={4}>
                        <Link to="#" className="text-dark mx-2"><FaTwitter /></Link>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col>
                        <p className="text-muted">&copy; {new Date().getFullYear()} Baby's Laser Clinic. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
