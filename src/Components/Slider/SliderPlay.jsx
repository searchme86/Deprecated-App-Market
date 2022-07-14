import React from 'react';
import { Play } from './Slider.style.js';

function SliderPlay({ handlePlay, handleStop }) {
  return (
    <>
      <Play onClick={handlePlay}>play</Play>
      {/* <Stop onClick={handleStop}>stop</Stop> */}
    </>
  );
}

export default SliderPlay;
