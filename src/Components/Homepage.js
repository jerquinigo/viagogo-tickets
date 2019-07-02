import React, { Component } from "react";
import eltonLanding from "../ASSETS/EltonJohnRedBackground.jpg";
import "../CSS/Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <p>Homepage</p>
        <img className="eltonLandingPic" src={eltonLanding} alt="" />
      </div>
    );
  }
}

export default Homepage;
