import React from "react";
import { useState } from "react";
import { useAuth } from "../hook/useAuth";

export function RegisterUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();
  console.log("signUp", signUp);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt, name, email, password);
  };
  return (
    <div>
      <form className="d-flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Criar Usuário </button>
      </form>
    </div>
  );
}
