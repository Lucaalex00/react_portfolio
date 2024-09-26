import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatarDefault from './img/avataaars.svg';
import avatarWink from './img/avataaars-2.svg';
import burgerMenu from './img/hamburger-menu.svg';
import openBurgerMenu from './img/burger.menu-vertical.svg';
import CarouselMenuComponent from '../global/navCarousel/CarouselMenuComponent';
import './header.css';

const HeaderComponent = () => {
  const [isHoverAvatar, setIsHoverAvatar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const generateRandomMessage = () => {
    const messages = [
      "Welcome! Explore my latest projects below.",
      "Need help? Check out 'Contact' to reach me.",
      "Scroll down to discover my story.",
      "Use the menu below to navigate in my portfolio.",
      'Have a great day!',
      "See my works. Click on 'Projects' for details.",
      "Start with 'About Me' to know more.",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    setIsHoverAvatar(true);
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      setIsHoverAvatar(false);
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateRandomMessage();
    }, Math.floor(Math.random() * 15000) + 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="flex fixed justify-between items-center w-[100vw] h-[120px] bg-gray-500 rounded-s-md rounded-e-md bg-opacity-50 p-5 z-50">
        <div
          className={`relative flex w-[100px] h-[100px] shadow-2xl bg-gray-500 bg-opacity-50 rounded-full transition-all   duration-500 ease-in-out avatar-container ps-1 ${
            isHoverAvatar
              ? 'border border-black bg-white bg-opacity-20'
              : 'border-gray-500 border'
          } ${showMessage ? 'clicked' : ''}`}
          onMouseEnter={() => setIsHoverAvatar(true)}
          onMouseLeave={() => (!showMessage ? setIsHoverAvatar(false) : '')}
        >
          <Link to="/">
            <img
              src={avatarDefault}
              alt="MY AVATAR"
              className={`top-0 left-0 w-full h-full transition-shadow duration-500 ease-linear ${
                isHoverAvatar ? 'hidden' : 'block'
              }`}
            />
            <img
              src={avatarWink}
              alt="MY AVATAR"
              className={`top-0 left-0 w-full h-full transition-shadow duration-500 ease-linear ${
                isHoverAvatar ? 'block' : 'hidden'
              }`}
            />
          </Link>

          <div className={`message-bubble ${showMessage ? 'appear' : 'disappear'}`}>
            {message}
          </div>
        </div>

        <div className="right_menu_h relative w-[50px] h-[50px] rounded-full transition-all duration-500 ease-linear">
          {isMenuOpen 
          ?
          <img
          src={openBurgerMenu}
          alt="Burger Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute cursor-pointer"
          />
          :
          <img
          src={burgerMenu}
          alt="Burger Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute cursor-pointer"
          />
      }
        </div>
      </header>

      {isMenuOpen && (
        <CarouselMenuComponent
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </>
  );
};

export default HeaderComponent;
