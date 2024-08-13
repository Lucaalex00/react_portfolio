import React from 'react';
import profilePic from "./img/Profile_img.jpeg"
const Jumbotron = () => {
  return (
    <div className="jumbotron_container flex items-center justify-center h-[500px] my-[150px] hover:shadow-md ease-linear duration-500 w-1/2 mx-auto overflow-auto">
      <div className="flex items-center w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
        <div className="w-1/3 ms-5">
          <img
            src={profilePic} 
            alt="Jumbotron Image"
            className="w-3/4 h-full object-cover rounded border shadow-lg hover:rounded-full duration-[3s] ease-in-out"
          />
        </div>
        <div className="w-2/3 p-4">
          <h1 className="text-3xl text-gray-100 text-shadow-lg font-bold mb-5">Luca, 24 years old.</h1>
          <p className="text-white text-shadow-lg text-lg">
          For 7 years, I owned a small business in the metalworking sector.
          In 2024, I decided to take a leap into the unknown and completely change fields, thanks to an intensive 6-month course at "Boolean."

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
