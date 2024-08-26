import React from 'react'
import { Link } from 'react-router-dom';
import BackEndCarouselComponent from '../../global/carousel/backEndCarouselComponent';

const BackEndComponent = () => {
  return (
    <div>
      <div className='p-5 flex flex-col gap-[2rem] items-end '>
        <h3 className='text-[3rem] p-2 mb-[1rem] font-sans font-semibold text-white text-shadow-lg'> BackEnd </h3>
        <p className='p-3 text-[1.5rem] text-end w-3/4 font-sans font-semibold text-gray-100 max-h-[400px] text-shadow-lg overflow-auto'> Backend refers to the server-side part of a web application or software that handles data processing, server logic, and database interactions. It operates behind the scenes, managing tasks such as authentication, data storage, and application functionality. Backend components include servers, databases, and APIs, which work together to ensure that the frontend (UI) operates smoothly and efficiently. <br/><br/>
        <strong className='text-orange-600'> BackEnd </strong> development using PHP, C#, Python, .NET and Databases MySQL & SQL Server <br/>
        
        <Link to="Backend" className='hover:text-orange-600 duration-500'>...Read more</Link>

        </p>
        <div className='my-10'>
          <BackEndCarouselComponent/>
        </div>
      </div>
    </div>
  )
}

export default BackEndComponent
