import React from 'react'
import WaveComponent from '../global/wave/waveComponent';
import FrontEndComponent from './frontend/FrontEndComponent';
import FrontEndCarouselComponent from '../global/carousel/frontEndCarouselComponent';
import BackEndComponent from './backend/BackEndComponent';
import BackEndCarouselComponent from '../global/carousel/backEndCarouselComponent';
const MainComponent = () => {
  return (
    <React.Fragment>
      {/* MAIN COMPONENTS */}
      <WaveComponent/>

      {/* FRONTEND */}
      <FrontEndComponent/>
      <div className='my-10'>
        <FrontEndCarouselComponent/>
      </div>
      <WaveComponent/>
      <BackEndComponent/>
      <div className='my-10'>
        <BackEndCarouselComponent/>
      </div>

    </React.Fragment>
  )
}

export default MainComponent
