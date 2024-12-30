import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Bienvenidos al Home</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut mollitia, vel dolor assumenda, a illo quia cumque quasi necessitatibus earum quaerat rem velit, autem iure aspernatur eveniet facilis facere modi.
          </p>

          <div className="d-grid gap-2">
            <Button variant="dark" size="lg" as={Link} to="/Login">Iniciar sesión</Button>
            <Button variant="dark" size="lg" as={Link} to="/Registro">Registrarse</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
