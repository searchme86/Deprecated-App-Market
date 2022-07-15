import React from 'react';
import { DotWrapper, Dot, DotLi, DotList } from './Slider.style.js';
import SliderStop from './SliderStop';
import SliderPlay from './SliderPlay';

function Dots(props) {
  const { slides, activeIndex, handlePlay, handleStop, clickDot } = props;
  return (
    <DotWrapper>
      <SliderStop handleStop={handleStop} />
      <DotList>
        {slides.map((slide, i) => (
          <DotLi key={slide.id}>
            <Dot
              key={slide.id}
              active={activeIndex === i}
              onClick={() => clickDot(i)}
            />
          </DotLi>
        ))}
      </DotList>
      <SliderPlay handlePlay={handlePlay} />
    </DotWrapper>
  );
}

export default Dots;
