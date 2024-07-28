import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatarDefault from './img/avataaars.svg';
import avatarWink from './img/avataaars-2.svg';
import burgerMenu from './img/hamburger-menu.svg';
import burgerMenuVertical from './img/burger.menu-vertical.svg'

const HeaderComponent = () => {
  //STATES
  const [isHoverAvatar, setIsHoverAvatar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex fixed justify-between items-center w-[100vw] h-[120px] p-5 bg-white ">
        <div
        className=
        /* overflow-hidden make avatar rounded like its container */
        {`relative flex w-[100px] h-[100px] bg-gray-100 rounded-full transition-all duration-500 ease-in-out
          ${
          isHoverAvatar 
          ? ' border-2 border-black bg-gray-200' 
          : 'border-white border-2'
          }
        `}
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
       
      </div>
      <div className="right_menu relative w-[50px] h-[50px] rounded-full transition-all duration-500 ease-linear">
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
          className={`absolute flex items-center top-full right-0 p-1 mt-2 w-[20vw] h-[30vh] shadow-lg border rounded transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <ul className='w-[100%]'>
            <Link to="/">
              <li className="px-4 py-3 ease-in-out duration-200 hover:bg-gray-300 cursor-pointer">Home</li>
            </Link>
            <Link to="/contact">
              <li className="px-4 py-3 ease-in-out duration-200 hover:bg-gray-300 cursor-pointer">Contact</li>
            </Link>
            <Link to="/aboutme">
              <li className="px-4 py-3 ease-in-out duration-200 hover:bg-gray-300 cursor-pointer">About Me</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
