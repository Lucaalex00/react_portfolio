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
        <Link to="/" className="text-gray-800 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">Home</Link>
        <Link to="/aboutme" className="text-gray-800 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">About Me</Link>
        <Link to="/projects" className="text-gray-800 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">Projects</Link>
        <Link to="/contact" className="text-gray-800 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border border-gray-600 p-2">Contacts</Link>

        <h3 className='text-red-800' onClick={toggleMenu}>HIDE</h3>
      </nav>
      :
      <h3 className='text-green-400 p-2' onClick={toggleMenu}>MENU</h3>
      }

      </React.Fragment>
  )
}

export default NavComponent
