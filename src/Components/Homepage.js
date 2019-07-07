import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CSS/Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div className="homepageContainer">
        <div className="descriptionContainer">
          <span className="descriptionText">
            Come watch the legendary, Elton John perform at your choice of
            location for a great price.
          </span>
        </div>

        <Link to="/search">
          <button>Search Tickets</button>
        </Link>

        <Carousel />
        <div className="dividerForCarousel" />
      </div>
    );
  }
}

export default Homepage;

// <img className="eltonLandingPic" src={eltonLanding} alt="" />
