/* eslint-disable no-undef */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./config/firebase_config";

const App = () => {
  const writePost = () => {
    const db = firebase.firestore();
    db.collection("posts")
      .doc()
      .set({
        titulo: "Hola hola",
        description: "Que me mola mucho eeh"
      })
      .then(() => console.log("Nice"))
      .catch(error => {
        console.error(`Error al insertar el token en la BD => ${error}`);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => writePost()}>Click me</button>
    </div>
  );
};

export default App;
