import React from 'react';
import './carousel.css';
import PHP from './img/PHP.png.png';
import cSharp from './img/Csharp.png.png';
import dotNET from './img/.NET.png.svg';
import Laravel from './img/Laravel.png.svg';
import Python from './img/Python.png.svg';
import MySQL from './img/MySQL.png.svg';
import SQLserver from './img/SQLserver.png.svg';
import RestAPI from './img/RestAPI.png.png';

const BackEndCarouselComponent = () => {
  const images = [
    PHP,
    cSharp,
    Python,
    dotNET,
    Laravel,
    MySQL,
    SQLserver,
    RestAPI,
  ];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        <div className="carousel-slide gap-10">
          {images.map((src, index) => (
            <img key={index} src={src} className="carousel-image" alt={`Logo ${index}`} />
          ))}
        </div>
        <div className="carousel-slide gap-10">
          {images.map((src, index) => (
            <img key={index} src={src} className="carousel-image" alt={`Logo ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackEndCarouselComponent;
