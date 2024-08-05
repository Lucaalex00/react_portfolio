import React from 'react';
import './carousel.css'; // Importa il file CSS
import HtmlLogo from "./img/Html.png.png"
import CssLogo from "./img/Css.png.png"
import JsLogo from "./img/Js.png.png"
import ReactLogo from "./img/React.png.png"
import VueLogo from "./img/Vue.png.png"
import TailwindLogo from "./img/Tailwind.png.png"
import BoostrapLogo from "./img/Boostrap.png.png"
import NodeLogo from "./img/Node.png.png"
import SassLogo from "./img/Sass.png.png"
import MUILogo from "./img/MUI.png.png"
const FrontEndCarouselComponent = () => {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        <div className="carousel-slide gap-[6rem]">
          {/* Immagini duplicate per uno scorrimento continuo */}
          <img src={HtmlLogo} className="carousel-image" alt="HTML Image" />
          <img src={CssLogo} className="carousel-image" alt="CSS Image" />
          <img src={JsLogo}className="carousel-image" alt="JS Image" />
          <img src={ReactLogo} className="carousel-image" alt="React Image" />
          <img src={VueLogo} className="carousel-image" alt="VueJS Image" />
          <img src={NodeLogo} className="carousel-image" alt="HTML Image" />
          <img src={TailwindLogo} className="carousel-image " alt="TailWind Image" />
          <img src={BoostrapLogo} className="carousel-image" alt="HTML Image" />
          <img src={MUILogo} className="carousel-image" alt="HTML Image" />
          <img src={SassLogo} className="carousel-image" alt="HTML Image" />
        </div>
        <div className="carousel-slide gap-[6rem]">
          {/* Immagini duplicate per uno scorrimento continuo */}
          <img src={HtmlLogo} className="carousel-image" alt="HTML Image" />
          <img src={CssLogo} className="carousel-image" alt="CSS Image" />
          <img src={JsLogo}className="carousel-image" alt="JS Image" />
          <img src={ReactLogo} className="carousel-image" alt="React Image" />
          <img src={VueLogo} className="carousel-image" alt="VueJS Image" />
          <img src={NodeLogo} className="carousel-image" alt="HTML Image" />
          <img src={TailwindLogo} className="carousel-image " alt="TailWind Image" />
          <img src={BoostrapLogo} className="carousel-image" alt="HTML Image" />
          <img src={MUILogo} className="carousel-image" alt="HTML Image" />
          <img src={SassLogo} className="carousel-image" alt="HTML Image" />
        </div>
      </div>
    </div>
  );
};

export default FrontEndCarouselComponent;
