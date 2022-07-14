import React, { useCallback, useState, useRef, useEffect } from 'react';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';
import SliderPlay from './SliderPlay';
import SliderStop from './SliderStop';
import { Wrapper } from './Slider.style.js';
import { sliderItems } from './SsliderContent';

function Slider({ autoPlay }) {
  const autoPlayRef = useRef(null);
  let interval = useRef(null);

  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    return () => clearInterval(interval);
  });

  // useEffect(() => {
  //   const play = () => {
  //     autoPlayRef.current();
  //   };

  //   const interval = setInterval(play, autoPlay * 1000);

  //   return () => clearInterval(interval);
  // });

  const nextSlide = useCallback(() => {
    if (activeIndex === sliderItems.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      translate: (activeIndex + 1) * getWidth(),
      activeIndex: activeIndex + 1,
    });
  }, [activeIndex, state]);

  const prevSlide = useCallback(() => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (sliderItems.length - 1) * getWidth(),
        activeIndex: sliderItems.length - 1,
      });
    }

    setState({
      ...state,
      translate: (activeIndex - 1) * getWidth(),
      activeIndex: activeIndex - 1,
    });
  }, [activeIndex, state]);

  // const moveToDot = useCallback((e) => {
  //   e.preventDefault();
  // }, []);

  const sliderStart = useCallback(() => {
    console.log('start');
    const play = () => {
      autoPlayRef.current();
    };
    interval.current = setInterval(play, autoPlay * 1000);
  }, [autoPlay]);

  const sliderStop = useCallback((e) => {
    if (interval.current === null) {
      return;
    }
    console.log('stop');
    e.preventDefault();
    clearInterval(interval.current);
  }, []);

  return (
    <Wrapper>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * sliderItems.length}
      >
        {sliderItems.map((slide, index) => (
          <Slide key={slide.id + index} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <Dots slides={sliderItems} activeIndex={activeIndex} />
      <SliderPlay handlePlay={sliderStart} />
      <SliderStop handleStop={sliderStop} />
    </Wrapper>
  );
}

export default Slider;
