import Slider from "../../images/jumia_images/Holiday-savings-slider-1.jpg";
import Slider2 from "../../images/jumia_images/Holiday-savings-slider-4.jpg";
import Slider3 from "../../images/jumia_images/Jumia-Prime-3-Slider.jpg";
import React from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = () => {
  return (
    <ResponsiveCarousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img
          src={Slider}
          alt="Banner 1"
          className="w-1/16 h-auto mx-auto"
        />
      </div>
      <div>
        <img
          src={Slider2}
          alt="Banner 2"
          className="w-1/16 h-auto mx-auto"
        />
      </div>
      <div>
        <img
          src={Slider3}
          alt="Banner 3"
          className="w-1/16 h-auto mx-auto"
        />
      </div>
    </ResponsiveCarousel>
  );
};

export default Carousel;