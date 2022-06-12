import { useState } from "react";
import "./style.css";

import firebase from "./services/firebaseConnection";
import "firebase/firestore";

function App2() {
  // gerar um documento com o mesmo ID do USER AUTH

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [office, setOffice] = useState("");
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  console.log(
    `email:${email}, senha: ${password}, cargo: ${office}, nome: ${name}`
  );

  async function newUser() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        // quando ele cadastra consegue retornar o ID
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .set({
            nome: name,
            cargo: office,
            status: true,
          })
          .then(() => {
            setName("");
            setOffice("");
            setEmail("");
            setPassword("");
          });
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Senha muito fraca..");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Esse email já existe!");
        }
      });
  }

  async function logout() {
    await firebase.auth().signOut();
    setUser({});
  }

  async function login() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .get()
          .then((snapshot) => {
            setUser({
              nome: snapshot.data().nome,
              cargo: snapshot.data().cargo,
              status: snapshot.data().status,
              email: value.user.email,
            });
          });
      })
      .catch((error) => {
        console.log("ERRO :" + error);
      });
  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1> <br />
      <div className="container">
        <label>Nome</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Cargo</label>
        <input
          type="text"
          value={office}
          onChange={(e) => setOffice(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={logout}>Sair da conta!</button>
        <button onClick={login}>Fazer login</button>
        <button onClick={newUser}>Cadastrar</button>
      </div>
      <hr />
      {Object.keys(user).length && (
        <div>
          <span>{user.nome}</span>
          <br />
          <span>{user.cargo}</span>
          <br />
          <span>{user.status ? "ativo" : "desativado"}</span>
          <br />
        </div>
      )}
    </div>
  );
}

export default App2;
