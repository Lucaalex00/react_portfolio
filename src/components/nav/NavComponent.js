import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { MenuContext } from "../../stores/FooterMenuContext";
import "./nav.css"

const NavComponent = () => {

  
  const { isShow, toggleMenu } = useContext(MenuContext);
  
  return (
    <React.Fragment>
      {isShow 
      ?
      <nav className="left_menu flex gap-3 px-2 justify-center items-center">
        <Link to="/" className="link text-black bg-gray-400 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">Home</Link>
        <Link to="/aboutme" className="link text-black bg-gray-400 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">AboutMe</Link>
        <Link to="/projects" className="link text-black bg-gray-400 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">Projects</Link>
        <Link to="/contact" className="link text-black bg-gray-400 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">Contacts</Link>

        <h3 className='text-red-600 bg-gray-900 border border-gray-600 p-2 cursor-pointer' onClick={toggleMenu}>HIDE</h3>
      </nav>
      :
      <h3 className='text-green-600 bg-gray-900 border border-gray-600 p-2 cursor-pointer' onClick={toggleMenu}>MENU</h3>
      }

      </React.Fragment>
  )
}

export default NavComponent
