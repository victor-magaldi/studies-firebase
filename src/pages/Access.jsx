import React from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import { FormLogin } from "../components/FormLogin";
import { RegisterUser } from "../components/RegisterUser";


import style from "./style.module.css";

export function Access() {
  return (
    <Container className={style.containerLogin}>
      <Row>
        <Col sm={12} md={8}>
          sm=12 md=8
        </Col>
        <Col sm={12} className="d-none d-md-block" md={4}>
          sm=12 md=4
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs
            onSelect={(evt) => {
              console.log("evt", evt);
            }}
            defaultActiveKey="login"
            id="tabslogin"
            className="mb-3"
          >
            <Tab
              ini
              tabClassName={style?.loginTabBtn}
              eventKey="login"
              title="login"
            >
              <FormLogin />
            </Tab>
            <Tab
              tabClassName={style?.RegisterTabBtn}
              eventKey="cadastrar"
              title="cadastrar"
            >
              <RegisterUser />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}
