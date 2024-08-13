import React from 'react';
import './carousel.css';
import HtmlLogo from "./img/Html.png.png";
import CssLogo from "./img/Css.png.png";
import JsLogo from "./img/Js.png.png";
import ReactLogo from "./img/React.png.png";
import VueLogo from "./img/Vue.png.png";
import TailwindLogo from "./img/Tailwind.png.png";
import BoostrapLogo from "./img/Boostrap.png.png";
import NodeLogo from "./img/Node.png.png";
import SassLogo from "./img/Sass.png.png";
import MUILogo from "./img/MUI.png.png";

const FrontEndCarouselComponent = () => {
  const images = [
    HtmlLogo,
    CssLogo,
    JsLogo,
    ReactLogo,
    VueLogo,
    NodeLogo,
    TailwindLogo,
    BoostrapLogo,
    MUILogo,
    SassLogo
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        <div className="carousel-slide">
          {images.map((src, index) => (
            <img key={index} src={src} className="carousel-image" alt={`Logo ${index}`} />
          ))}
        </div>
        <div className="carousel-slide">
          {images.map((src, index) => (
            <img key={index} src={src} className="carousel-image" alt={`Logo ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontEndCarouselComponent;
