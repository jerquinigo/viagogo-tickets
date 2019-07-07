import React from "react";
import NavBar from "./Components/NavBar.js";
import Homepage from "./Components/Homepage.js";
import Search from "./Components/Search.js";
import DisplayUniqueTicket from "./Components/DisplayUniqueTicket.js";
// import CalendarComponent from "./Components/Calendar.js";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import { tickets } from "./tickets.js";
const tickets = require("./tickets.js");
//tickets.default.Items
function App() {
  // console.log(tickets.default.Items, "the api");
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/search" component={Search} />
        <Route path={`/events/:id`} component={DisplayUniqueTicket} />
      </Switch>
    </div>
  );
}

export default App;
