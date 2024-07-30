import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../assets/styles/AboutPage.css';
import officeImage from '../assets/images/about.jpg';

function AboutPage() {
  return (
    <Container className="about-page mt-5">
      <Row className="align-items-center">
        <Col md={6} className="about-image-wrapper">
          <Image src={officeImage} alt="Office Environment" fluid className="about-image" />
        </Col>
        <Col md={6}>
          <div className="about-content">
            <h2 className="about-title">About ErgoChair</h2>
            <p className="about-text">
              At ErgoChair, we are dedicated to improving your workspace with our top-of-the-line ergonomic office chairs.
              Our mission is to enhance your comfort and productivity with products that prioritize your well-being.
            </p>
            <p className="about-text">
              We believe that the right chair can make a significant difference in your daily work routine. That's why we focus
              on quality, comfort, and innovative design to bring you the best ergonomic solutions.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
