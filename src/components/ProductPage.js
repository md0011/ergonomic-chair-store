import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import '../assets/styles/ProductPage.css';
import chairImage from '../assets/images/product.jpg';

function ProductPage() {
  return (
    <Container className="product-page mt-5">
      <Row className="align-items-center">
        <Col md={6} className="image-container">
          <Image src={chairImage} alt="Ergonomic Chair" fluid className="product-image"/>
        </Col>
        <Col md={6} className="details-container">
          <Card className="product-details">
            <Card.Body>
              <Card.Title className="product-title">Ergonomic Office Chair</Card.Title>
              <Card.Text className="product-price">$199.99</Card.Text>
              <Card.Text className="product-description">
                Our ergonomic office chair is designed to provide maximum comfort and support for long hours of sitting. It features adjustable height, lumbar support, and breathable mesh fabric.
              </Card.Text>
              <Button variant="success" className="buy-now-button">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
