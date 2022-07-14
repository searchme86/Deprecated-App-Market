import React from 'react';
import { Stop } from './Slider.style.js';

function SliderStop({ handleStop }) {
  return <Stop onClick={handleStop}>Stop</Stop>;
}

export default SliderStop;
