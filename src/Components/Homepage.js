import React, { Component } from "react";
import { Link } from "react-router-dom";
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

        <Link to="/search">
          <button>Search Tickets</button>
        </Link>

        <Carousel />
      </div>
    );
  }
}

export default Homepage;

// <img className="eltonLandingPic" src={eltonLanding} alt="" />
