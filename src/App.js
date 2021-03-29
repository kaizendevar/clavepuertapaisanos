import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const chipakey = Math.floor(Math.random() * 1001);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h5 style={{ margin: 0 }}>Clave Puerta</h5>
        <h2 style={{ margin: 0 }}>chipa{chipakey}</h2>
        <div>
          <a
            href={`https://wa.me/?text=Hola!%20Me%20abren%20porfi?%20La%20clave%20es:%20chipa${chipakey}`}
          >
            <button className="button" style={{ verticalAlign: "middle" }}>
              Enviar clave por WhatsApp
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
