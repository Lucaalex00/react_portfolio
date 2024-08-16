import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatarDefault from './img/avataaars.svg';
import avatarWink from './img/avataaars-2.svg';
import burgerMenu from './img/hamburger-menu.svg';
import burgerMenuVertical from './img/burger.menu-vertical.svg';
import './header.css';

const HeaderComponent = () => {
  // STATES
  const [isHoverAvatar, setIsHoverAvatar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // Function to generate a random message
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
    setShowMessage(true);

    // Hide the message after 5 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  useEffect(() => {
    // Interval to show the message every 15-20 seconds
    const interval = setInterval(() => {
      generateRandomMessage();
    }, Math.floor(Math.random() * 15000) + 5000); // Random between 15 and 20 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex fixed justify-between items-center w-[100vw] h-[120px] bg-gray-500 rounded-s-md rounded-e-md bg-opacity-50 p-5 z-50">
      <div
        className={`relative flex w-[100px] h-[100px] shadow-lg bg-gray-500 bg-opacity-50 rounded-full transition-all duration-500 ease-in-out avatar-container ${
          isHoverAvatar 
            ? 'border-2 border-black bg-gray-300' 
            : 'border-gray-600 border-1'
        } ${showMessage ? 'clicked' : ''}`}
        onMouseEnter={() => setIsHoverAvatar(true)}
        onMouseLeave={() => setIsHoverAvatar(false)}
      >
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

        {/* Message Bubble */}
        <div className={`message-bubble ${showMessage ? 'appear' : 'disappear'}`}>
          {message}
        </div>
      </div>

      <div className="right_menu_h relative w-[50px] h-[50px] rounded-full transition-all duration-500 ease-linear">
        <img
          src={burgerMenu}
          alt="Burger Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`absolute cursor-pointer transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={burgerMenuVertical}
          alt="Burger Menu Vertical"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`absolute cursor-pointer transition-opacity duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />
        <div
          className={`absolute flex items-center top-full right-0 p-3 mt-2 w-[10vw] shadow-lg border rounded transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className='hidden_menu'>
            <Link to="/">
              <li className="hidden_menu_item px-4 py-3 ease-in-out duration-200 hover:text-gray-500 cursor-pointer">Home</li>
            </Link>
            <Link to="/aboutme">
              <li className="hidden_menu_item px-4 py-3 ease-in-out duration-200 hover:text-gray-500 cursor-pointer">About Me</li>
            </Link>
            <Link to="/projects">
              <li className="hidden_menu_item px-4 py-3 ease-in-out duration-200 hover:text-gray-500 cursor-pointer">Projects</li>
            </Link>
            <Link to="/contact">
              <li className="hidden_menu_item px-4 py-3 ease-in-out duration-200 hover:text-gray-500 cursor-pointer">Contacts</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
