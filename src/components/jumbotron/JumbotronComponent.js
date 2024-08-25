import React from 'react';
import profilePic from "./img/Profile_img.jpeg";
import "./jumbotron.css";
import { Link } from 'react-router-dom';
const Jumbotron = () => {
  return (
    <div className="jumbotron flex items-center justify-center h-[320px] my-[150px] hover:shadow-md ease-linear duration-500 w-1/2 mx-auto overflow-auto">
      <div className="jumbo_container flex items-center gap-5 w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
        <div className="img_side w-1/3 ms-5">
          <img
            src={profilePic} 
            alt="Jumbotron Logo"
            className="jumbo_img w-full min-w-[100px] h-full object-cover rounded border shadow-lg hover:rounded-full duration-[3s] ease-in-out"
          />
        </div>
        <div className="text_side w-2/3 py-2a">
          <h1 className="text-3xl text-gray-100 text-shadow-lg font-bold mb-5"><Link to="/aboutme" className='hover:text-red-100 duration-500'>Luca </Link>, 24 years old.</h1>
          <p className="text-white text-shadow-lg text-lg">
          For 7 years, I owned a small business in the metalworking sector.
          In 2024, I decided to take a leap into the unknown and completely change fields, thanks to an intensive 6-month course at "Boolean."
          <br/>

          I couldn't have made a better choice. <br/><br/>
          <strong>Welcome to my portfolio ❤️            
          </strong>                                                                                         
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
