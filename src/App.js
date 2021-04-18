import React, { useEffect, useState } from "react";
import "./style.css";
import firebase from "./firebaseConnection";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    async function loadPosts() {
      // o método onSnapshot vai fazer com que fique se atualizando em real time
      await firebase
        .firestore()
        .collection("posts")
        .onSnapshot((doc) => {
          const listPosts = [];

          doc.forEach((item) => {
            listPosts.push({
              id: item.id,
              titulo: item.data().titulo,
              autor: item.data().autor,
            });
          });
          setPosts(listPosts);
        });
    }
    loadPosts();
  }, []);

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

  async function buscaPosts() {
    // busca post pelo id 123
    // await firebase
    //   .firestore()
    //   .collection("posts")
    //   .doc("123")
    //   .get()
    //   .then((snapShot) => {
    //     setAutor(snapShot.data().autor);
    //     setTitulo(snapShot.data().titulo);
    //   })
    //   .catch((error) => {
    //     console.log(error, "algum erro ocorreu");
    //   });

    await firebase
      .firestore()
      .collection("posts")
      .get()
      .then((snapShot) => {
        const listPosts = [];
        snapShot.forEach((item) => {
          listPosts.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor,
          });
        });
        setPosts(listPosts);
      })
      .catch((error) => console.log(error));
  }
  async function editPost() {
    await firebase
      .firestore()
      .collection("posts")
      .doc(idPost)
      .update({ titulo: titulo, autor: autor })
      .then(() => {
        alert("dados atualizados");
        setAutor("");
        setTitulo("");
        setIdPost("");
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function excluirPost(id) {
    await firebase
      .firestore()
      .collection("posts")
      .doc(`${id}`)
      .delete()
      .then(() => {
        alert("post excluído");
      })
      .catch((error) => console.log(error));
  }
  async function novoUsuario() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value);
        alert("novo usuário cadastrado com sucesso");
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("senha muito fraca");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Email já existe");
        }
      });
  }
  return (
    <div className="App">
      <h1>React js + firebase:)</h1>
      <h2>Registrar usuário</h2>
      <div>
        <label htmlFor="email"> E-mail</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password"> Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={novoUsuario}>Cadastrar</button>
      </div>
      <br />
      <hr />
      <h2>Banco de Dados </h2>
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
      <button onClick={() => buscaPosts()}>Buscar lista de posts</button> <br />
      <label htmlFor="">ID</label>
      <input
        type="text"
        value={idPost}
        onChange={(e) => setIdPost(e.target.value)}
      />
      <br />
      <button onClick={editPost}>Editar Post pelo ID</button> <br />
      <hr />
      <ol className="listPosts">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <span>id: {post.id}</span>
              <p>titulo:{post.titulo}</p>
              <p>autor: {post.autor}</p>
              <button
                onClick={() => {
                  excluirPost(post.id);
                }}
              >
                Excluir Post
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
