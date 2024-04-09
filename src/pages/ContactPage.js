// ContactPage.js
import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaPhone, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <h1 className="text-center mb-4">Contact Us</h1>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <FaPhone /> Phone: +123 456 7890
                        </ListGroupItem>
                        <ListGroupItem>
                            <FaInstagram /> Instagram: <a href="https://instagram.com/yourclinic" target="_blank" rel="noopener noreferrer">@yourclinic</a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FaFacebook /> Facebook: <a href="https://facebook.com/yourclinic" target="_blank" rel="noopener noreferrer">@yourclinic</a>
                        </ListGroupItem>
                        <ListGroupItem>
                            <FaTwitter /> Twitter: <a href="https://twitter.com/yourclinic" target="_blank" rel="noopener noreferrer">@yourclinic</a>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
