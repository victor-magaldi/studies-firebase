import React from "react";
import { Button, Form } from "react-bootstrap";

export function FormLogin() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log("formData", formData);

    console.log("formData", formData.entries());
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="email" name="email" />
        <Form.Text className="text-muted">Não poderá ser alterado</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>senha</Form.Label>
        <Form.Control type="password" placeholder="senha" name="password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
}
