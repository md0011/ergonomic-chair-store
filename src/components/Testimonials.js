import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import '../assets/styles/Testimonials.css';

function Testimonials() {
  return (
    <Container className="testimonials mt-5">
      <h2 className="text-center mb-4">Customer Testimonials</h2>
      <Row>
        <Col md={4}>
          <Card className="testimonial-card" data-aos="fade-up">
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                "This chair has completely transformed my workspace. I no longer have back pain after long hours of work."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card" data-aos="fade-up">
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                "This chair has completely transformed my workspace. I no longer have back pain after long hours of work."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card" data-aos="fade-up">
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                "This chair has completely transformed my workspace. I no longer have back pain after long hours of work."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                "Amazing quality and comfort. Highly recommend to anyone looking for a good ergonomic chair."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card" data-aos="fade-up" data-aos-delay="400">
            <Card.Body>
              <Card.Title>Mark Johnson</Card.Title>
              <Card.Text>
                "Worth every penny! This chair is both stylish and incredibly comfortable."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                "Amazing quality and comfort. Highly recommend to anyone looking for a good ergonomic chair."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
