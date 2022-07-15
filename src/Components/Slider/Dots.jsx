import React from 'react';
import { DotWrapper, Dot } from './Slider.style.js';
import SliderStop from './SliderStop';
import SliderPlay from './SliderPlay';

function Dots(props) {
  const { slides, activeIndex, handlePlay, handleStop } = props;
  return (
    <DotWrapper>
      <SliderStop handleStop={handleStop} />
      <ol>
        {slides.map((slide, i) => (
          <li key={i}>
            <Dot key={slide.id} active={activeIndex === i} />
          </li>
        ))}
      </ol>
      <SliderPlay handlePlay={handlePlay} />
    </DotWrapper>
  );
}

export default Dots;
