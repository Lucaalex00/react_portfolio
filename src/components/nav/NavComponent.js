import React from 'react'
import { Link } from 'react-router-dom';
import "./nav.css"

const NavComponent = () => {
  return (
      <nav className="left_menu flex gap-3 justify-center items-center">
        <Link to="/" className="text-gray-300 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border p-2">Home</Link>
        <Link to="/aboutme" className="text-gray-300 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border p-2">About Me</Link>
        <Link to="/projects" className="text-gray-300 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border p-2">Projects</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white hover:bg-black duration-500 hover:border-gray-400 border p-2">Contacts</Link>
      </nav>
  )
}

export default NavComponent
