import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { tickets } from "./tickets.js";
const tickets = require("./tickets.js");
//tickets.default.Items
function App() {
  console.log(tickets.default.Items, "the api");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
