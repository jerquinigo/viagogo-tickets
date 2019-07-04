import React, { Component } from "react";
import eltonLanding from "../ASSETS/EltonJohnRedBackground.jpg";
import Carousel from "./Carousel.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <p>
          Come watch the Legendary Elton John perform at your choice of location
          for a great price.
        </p>
        <Carousel />
      </div>
    );
  }
}

export default Homepage;

// <img className="eltonLandingPic" src={eltonLanding} alt="" />
