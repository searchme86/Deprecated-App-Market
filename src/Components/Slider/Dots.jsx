import React from 'react';
import { DotWrapper, Dot } from './Slider.style.js';

function Dots(props) {
  const { slides, activeIndex } = props;
  return (
    <DotWrapper>
      {slides.map((slide, i) => (
        <Dot key={slide.id} active={activeIndex === i} />
      ))}
    </DotWrapper>
  );
}

export default Dots;
