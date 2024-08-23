import React from 'react'
import "./F_B.css"
import { Link } from 'react-router-dom'
const FrontEndPage = () => {
  return (
   <React.Fragment>
    <div className="flex w-full items-center justify-center px-10">
      <div className="card w-full my-[150px] max-w-2xl p-5 bg-gray-400 bg-opacity-80 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-auto">
        <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">FRONT-END</h2>
        <p className="text-gray-600 text-center text-[1rem]">
          In the Front-end, I use Markup and Stylesheet languages such as <strong>HTML</strong> & <strong>CSS</strong>. <br />
          Thanks to them, I discovered the effective interaction of a clean DOM, which helps create Web Applications with excellent responsiveness and make the entire User Interface <strong>(UI)</strong> clear and useful for the user. <br />
          As for programming languages, I gained excellent skills in <strong>Javascript</strong> at the beginning of 2022, through which I have developed several <Link to="/projects" className="hover:text-red-800 duration-200 font-bold">PROJECTS</Link> over the years.
        </p>
        <br />

        <p>
          <ul className="p-3 list-disc text-gray-800">
            <li>
            <strong>June 2022:</strong> I found a course on the <strong>Udemy</strong> platform to learn the basics of computer science.
              <br />
              Here, I took my first steps in programming and unlocked the right awareness to understand what is commonly used every day.
            </li>
            <br />
            <li>
            <strong>January 2024:</strong> I decided to start the 6-month intensive course <Link to="/certificates"><strong>"BOOLEAN"</strong></Link>, where I updated my skills in all Front-End development. <br />
              I got my hands on <strong>VueJS</strong> for the first time, one of the most widely used JavaScript frameworks, entering the world of SPAs <strong>(Single-Page Applications)</strong> and <strong>REST APIs</strong>. <br />
            </li>
            <br />
            <li>
            <strong>May 2024:</strong> I started working for a consultancy company called ALTEN IT, based in GENOVA (GE), Liguria.
              <br />
              Here, I discovered <strong>React.js</strong>, a highly used JavaScript library for creating dynamic applications without the need to reload the page, thus allowing for greater speed, flexibility, and efficiency.
            </li>
            <br></br>
            {/* ADD ANGULAR */}
          </ul>
        </p>
      </div>
    </div>
   </React.Fragment>
  )
}

export default FrontEndPage
