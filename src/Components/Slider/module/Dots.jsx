import React from 'react';
import { DotWrapper, Dot, DotLi, DotList } from '../sources/Slider.style.js';
import SliderStop from '../play/SliderStop';
import SliderPlay from '../play/SliderPlay';

function Dots(props) {
  const { slides, activeIndex, handlePlay, handleStop } = props;
  return (
    <DotWrapper>
      <SliderStop handleStop={handleStop} />
      <DotList>
        {slides.map((slide, i) => (
          <DotLi key={slide.id}>
            <Dot key={slide.id} active={activeIndex === i} />
          </DotLi>
        ))}
      </DotList>
      <SliderPlay handlePlay={handlePlay} />
    </DotWrapper>
  );
}

export default Dots;
