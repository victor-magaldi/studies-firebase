import React, { useState } from "react";
import "./style.css";
import firebase from "./firebaseConnection";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // pode ser passar o id dentro do .doc
    // .doc("1231121")
    // o .add vai adicionar um id incremental
    // await firebase
    //   .firestore()
    //   .collection("posts")
    //   .doc("1231121")
    //   .set({ autor: autor, titulo: titulo })
    //   .then(() => {
    //     console.log("dados cadastrados com sucesso");
    //   })
    //   .catch((error) => {
    //     console.log(error, "algum erro ocorreu");
    //   });

    await firebase
      .firestore()
      .collection("posts")
      .add({ autor: autor, titulo: titulo })
      .then(() => {
        console.log("dados cadastrados com sucesso");
        setAutor("");
        setAutor("");
      })
      .catch((error) => {
        console.log(error, "algum erro ocorreu");
      });
  }
  async function buscaPost() {
    await firebase
      .firestore()
      .collection("posts")
      .doc("123")
      .get()
      .then((snapShot) => {
        setAutor(snapShot.data().autor);
        setTitulo(snapShot.data().titulo);
      })
      .catch((error) => {
        console.log(error, "algum erro ocorreu");
      });
  }

  return (
    <div className="App">
      <h1>React js + firebase:)</h1>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="">Titulo</label>
        <textarea
          name="teste"
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        ></textarea>

        <label htmlFor="autor">Autor</label>
        <input
          type="text"
          name=""
          value={autor}
          id=""
          onChange={(e) => {
            setAutor(e.target.value);
          }}
        />
        <button type="submit"> Cadastrar</button>
      </form>

      <button onClick={() => buscaPost()}>Buscar post 123</button>
    </div>
  );
}

export default App;
