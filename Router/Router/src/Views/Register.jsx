import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");

  return (
    <Container className="mt-5 text-white">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Registro</h2>
          <Form>
            <Form.Group controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant='dark' type='submit' className='mt-3'>
              Registrarse
            </Button>
          </Form>

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

export default Register;
