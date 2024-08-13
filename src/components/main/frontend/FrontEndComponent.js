import React from 'react'
import { Link } from 'react-router-dom';
import FrontEndCarouselComponent from '../../global/carousel/frontEndCarouselComponent';

const FrontEndComponent = () => {
  return (
    <div>
      <div className='p-5 flex flex-col gap-[2rem]'>
        <h3 className='text-[3rem] p-2 mb-[1rem]  font-sans font-semibold text-white text-shadow-lg'> FrontEnd </h3>
        <p className='p-3 text-[1.3rem] w-2/3 font-sans font-semibold text-gray-100 max-h-[300px] text-shadow-lg overflow-auto'>Frontend development focuses on the visual and interactive aspects of a website or app, using HTML, CSS, and JavaScript to create what users see and interact with in their web browsers. <br/><br/>
        <strong className='text-orange-600'> FrontEnd </strong> development using HTML5, CSS3, JavaScript, ReactJS, VueJS, NPM, Tailwind, Bootstrap, Material UI, SASS. <br/>
        
        <Link to="FrontEnd" className='hover:text-orange-600 duration-500'>...Read more</Link>
        </p>
        <div className='my-10'>
          <FrontEndCarouselComponent/>
        </div>
      </div>
    </div>
  )
}

export default FrontEndComponent
