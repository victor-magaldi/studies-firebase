import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";

import style from "./style.module.css";

export function Login() {
  return (
    <Container className={style.containerLogin}>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab
              tabClassName={style?.loginTabBtn}
              eventKey="Login"
              title="Login"
            >
              <h1>Login</h1>
            </Tab>
            <Tab
              tabClassName={style?.RegisterTabBtn}
              eventKey="Cadastrar"
              title="Cadastrar"
            >
              <h1>Cadastrar</h1>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
