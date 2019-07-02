import React, { Component } from "react";
import "../CSS/NavBar.css";
class NavBar extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="navbarContainer">
        <div className="navbarInnerContainer">
          <h1 className="logo">ViaEltonGo</h1>
        </div>
      </div>
    );
  }
}

export default NavBar;
