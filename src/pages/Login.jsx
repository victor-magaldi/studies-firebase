import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";

import style from "./style.module.css";

export function Login() {
  return (
    <Container className={style.containerLogin}>
      <Row>
        <Col>
          <Tabs
            onSelect={(evt) => {
              console.log("evt", evt);
            }}
            defaultActiveKey="Login"
            id="tabslogin"
            className="mb-3"
          >
            <Tab
              ini
              tabClassName={style?.loginTabBtn}
              eventKey="login"
              title="login"
            >
              <h1>Login</h1>
            </Tab>
            <Tab
              tabClassName={style?.RegisterTabBtn}
              eventKey="cadastrar"
              title="cadastrar"
            >
              <h1>Cadastrar</h1>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
