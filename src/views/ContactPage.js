import React, { useState } from "react";
import EmailJSComponent from "../components/global/emailJS/EmailJSComponent";

const ContactPage = () => {
  const [message, setMessage] = useState(''); //SUCCESS or ERROR

  // Success callback
  const handleSuccess = () => {
    setMessage("Email sent successfully!");
  };

  // Error callback
  const handleError = () => {
    setMessage("An error occurred while sending the email.");
  };

  return (
      <div className="min-h-screen w-2/3 bg-gray-100 flex flex-col md:flex-row my-[150px] p-8">
      <div className="md:w-2/3 flex flex-col space-y-4">

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/luca-cirio-453485283/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:opacity-90 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn logo"
            className="w-12 h-12 brightness-50 "
          />
          <div className="text-white">
            <h3 className="text-xl font-bold">LinkedIn</h3>
            <p>@Luca Cirio</p>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/Lucaalex00"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:opacity-90 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub logo"
            className="w-12 h-12"
          />
          <div className="text-white">
            <h3 className="text-xl font-bold">GitHub</h3>
            <p>@Lucaalex00</p>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://www.instagram.com/luca.alex_/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:opacity-90 transition duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram logo"
            className="w-12 h-12"
          />
          <div className="text-white">
            <h3 className="text-xl font-bold">Instagram</h3>
            <p>@Luca.alex_</p>
          </div>
        </a>

      </div>

      {/* Contact Form on the Right */}
      <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
        
        {/* Render EmailJSComponent and pass the success/error handlers */}
        <EmailJSComponent onSuccess={handleSuccess} onError={handleError} />
        
        {/* Display success or error message */}
        {message && (
          <p className={`mt-4 text-lg font-semibold ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default ContactPage
