import React from "react";
import { Carousel } from "react-responsive-carousel";
import elton1 from "../ASSETS/EltonJohnRedBackground.jpg";
import elton2 from "../ASSETS/elton_john_2.jpg";
import elton3 from "../ASSETS/elton_john_3.jpg";
import "./Carousel.css";

export default () => (
  <div className="mainContainerCarousel">
    <div className="slideshowBox">
      <Carousel
        showThumbs={false}
        axis="horizontal"
        useKeyboardArrows
        infiniteLoop
        autoPlay
        swipeable={true}
        transitionTime={500}
        centerSlidePercentage={65}
        emulateTouch
      >
        <div>
          <img src={elton1} alt="" />
        </div>

        <div>
          <img src={elton2} alt="" />
        </div>
        <div>
          <img src={elton3} alt="" />
        </div>
      </Carousel>
    </div>
  </div>
);
