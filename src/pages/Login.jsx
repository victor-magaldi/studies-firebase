import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";

export function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Login" title="Login">
              <h1>Login</h1>
            </Tab>
            <Tab eventKey="Cadastrar" title="Cadastrar">
              <h1>Cadastrar</h1>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
