import React from 'react'

const ContactPage = () => {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-8">
        {/* Menu Card Dinamico a Sinistra */}
        <div className="md:w-1/3 flex flex-col space-y-4">
          {/* Card per LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:opacity-90 transition duration-300"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn logo"
              className="w-12 h-12"
            />
            <div className="text-white">
              <h3 className="text-xl font-bold">LinkedIn</h3>
              <p>INSERISCI USERNAME</p>
            </div>
          </a>
          {/* Card per GitHub */}
          <a
            href="https://github.com/"
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
              <p>INSERISCI USERNAME</p>
            </div>
          </a>
          {/* Card per Instagram */}
          <a
            href="https://www.instagram.com/"
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
              <p>INSERISCI USERNAME</p>
            </div>
          </a>
        </div>
  
        {/* Form di Contatto a Destra */}
        <div className="md:w-2/3 bg-white p-8 rounded-lg shadow-lg mt-8 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 text-center">
            <a
              href="mailto:lu.al.cirio00@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Or email me directly: lu.al.cirio00@gmail.com
            </a>
          </div>
        </div>
      </div>
  )
}

export default ContactPage
