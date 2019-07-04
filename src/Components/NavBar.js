import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../CSS/NavBar.css";
class NavBar extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="navbarContainer">
        <div className="navbarInnerContainer">
          <h1 className="logo">
            <Link className="links" to="/">
              ViaEltonGo
            </Link>
          </h1>
        </div>
      </div>
    );
  }
}

export default NavBar;
