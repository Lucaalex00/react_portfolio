import React from 'react'
import WaveComponent from '../global/wave/waveComponent';
import FrontEndComponent from './frontend/FrontEndComponent';
import BackEndComponent from './backend/BackEndComponent';
import "./main.css"
const MainComponent = () => {
  return (
    <React.Fragment>
      {/* MAIN COMPONENTS */}
      <WaveComponent/>

      {/* FRONTEND */}
      <FrontEndComponent/>
      <WaveComponent/>

      {/* BACKEND */}
      <BackEndComponent/>
      
      <div className='final_section w-full h-[200px] '></div>

    </React.Fragment>
  )
}

export default MainComponent
