import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/styles/HomePage.css';
import chairImage from '../assets/images/chair.jpg';

function HomePage() {
  return (
    <Container className="home-page mt-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-left">
          <h1 className="home-title animate__animated animate__fadeInDown">Welcome to ErgoChair</h1>
          <p className="home-subtitle animate__animated animate__fadeInLeft">
            Discover the best ergonomic chair for your office. Improve your posture and comfort with our high-quality chair.
          </p>
          <Button variant="primary" as={Link} to="/product" className="home-button animate__animated animate__fadeInUp">
            Learn More
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <img src={chairImage} alt="Ergonomic Chair" className="img-fluid home-image animate__animated animate__zoomIn" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
