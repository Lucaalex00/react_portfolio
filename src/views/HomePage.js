import React from 'react'
import Jumbotron from '../components/jumbotron/JumbotronComponent';
import WaveComponent from '../components/global/wave/waveComponent';
import FrontEndCarouselComponent from '../components/global/carousel/frontEndCarouselComponent';
import MainComponent from '../components/main/MainComponent';

const HomePage = () => {
  return (
    <div>
      <Jumbotron/>
        <WaveComponent/>
        <MainComponent/>
        <div className='my-10'>
          <FrontEndCarouselComponent/>
        </div>
    </div>
  )
}

export default HomePage
