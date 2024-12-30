import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1>404</h1>
          <h4>Página no encontrada</h4>
          <p>Lo sentimos, la página que buscas no existe o fue movida.</p>
          <div className="d-grid gap-2 mt-4">
            <Button variant="dark" size="lg" as={Link} to="/">
              Volver al Home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
