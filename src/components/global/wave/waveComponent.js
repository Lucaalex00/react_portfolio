import React from 'react'
import DefaultWaveComponent from './defaultWaveComponent';
import ReverseWaveComponent from './reverseWaveComponent.js';
const waveComponent = () => {
  return (
    <div className='w-full relative overflow-y-hidden my-[150px] block'>
      <DefaultWaveComponent/>
      <ReverseWaveComponent/>
    </div>
  )
}

export default waveComponent
