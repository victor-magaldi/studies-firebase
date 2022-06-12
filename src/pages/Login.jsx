import React from "react";
import { Tab } from "bootstrap";
import { Tabs } from "react-bootstrap";

export function Login() {
  return (
    <div>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <h1>home</h1>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h1>profile</h1>
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <h1>contact</h1>
        </Tab>
      </Tabs>
    </div>
  );
}
