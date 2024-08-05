import React from 'react'
import DefaultWaveComponent from './defaultWaveComponent';
import ReverseWaveComponent from './reverseWaveComponent.js';
const waveComponent = () => {
  return (
    <div className='relative overflow-y-hidden my-[150px]'>
      <DefaultWaveComponent/>
      <ReverseWaveComponent/>
    </div>
  )
}

export default waveComponent
