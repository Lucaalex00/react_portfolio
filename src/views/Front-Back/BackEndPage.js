import React from 'react'
import "./F_B.css"
import { Link } from 'react-router-dom'

const BackEndPage = () => {
  return (
      <React.Fragment>
      <div className="flex w-full items-center justify-center px-10">
  <div className="card w-full my-[150px] max-w-2xl my-5 p-5 bg-gray-400 bg-opacity-80 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-auto">
    <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">BACK-END</h2>
    <p className="text-gray-600 text-center text-[1rem]">
      I began my journey into Backend development with PHP, where I first encountered the world of server-side programming. <br />
      Through <strong>PHP</strong>, I was introduced to Object-Oriented Programming <strong>(OOP)</strong>, which allowed me to build more structured and scalable applications. <br />
      Mastering OOP concepts like encapsulation, inheritance, and polymorphism helped me write cleaner, reusable code, making my backend solutions more maintainable and efficient.
    </p>
    <br />

    <p>
      <ul className="p-3 list-disc text-gray-800">
        <li>
          <strong>April 2024:</strong> I learned how to connect my backend with databases, working extensively with <strong>MySQL</strong>. <br />
          This enabled me to manage and manipulate data effectively, bringing dynamic content to life within my web applications.
        </li>
        <br />
        <li>
        <strong>June 2024:</strong> I delved deeper into modern backend practices, such as using MVC <strong>(Model-View-Controller) </strong>architecture and implementing <strong>RESTful APIs</strong>. <br />
          This experience allowed me to create more robust applications, separating concerns and ensuring better maintainability.
        </li>
        <br />
        <li>
        <strong>August 2024:</strong> I also explored <strong>C#</strong> and <strong>.NET</strong>, which opened up new possibilities in enterprise-level development and object-oriented design. <br />
        This allowed me to broaden my skill set beyond PHP, giving me the ability to work with different frameworks and languages, including the robust .NET ecosystem, making me a more versatile backend developer.

        </li>
      </ul>
    </p>
  </div>
</div>

   </React.Fragment>
  )
}

export default BackEndPage
