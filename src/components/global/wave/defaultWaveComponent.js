import React from 'react';
import wave from '../img/wave.svg';

const DefaultWaveComponent = () => {
  return (
    <img className='w-[100vw] aspect-auto z-10 mb-[-1px] p-0' src={wave} alt="Wave" />
  );
};

export default DefaultWaveComponent;