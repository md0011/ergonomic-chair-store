import React from 'react';
import { Container } from 'react-bootstrap';

function NotFoundPage() {
  return (
    <Container className="mt-5 text-center">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </Container>
  );
}

export default NotFoundPage;
