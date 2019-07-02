import React from "react";
import NavBar from "./Components/NavBar.js";
import Homepage from "./Components/Homepage.js";
import "./App.css";
// import { tickets } from "./tickets.js";
const tickets = require("./tickets.js");
//tickets.default.Items
function App() {
  console.log(tickets.default.Items, "the api");
  return (
    <div className="App">
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
