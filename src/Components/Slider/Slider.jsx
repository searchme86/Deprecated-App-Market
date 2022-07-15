import React, { useCallback, useState, useRef, useEffect } from 'react';
import SliderContent from './module/SliderContent';
import { Wrapper } from './sources/Slider.style.js';
import { sliderItems } from './sources/SsliderContent';
import Slide from './module/Slide';
import Arrow from './module/Arrow';
import Dots from './module/Dots';
import { OffScreenStrong } from '../../Assets/Styles/Basic.style';

function Slider({ autoPlay }) {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const autoPlayRef = useRef(null);
  let interval = useRef(null);

  const getWidth = () => window.innerWidth;

  const { translate, transition, activeIndex } = state;

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

  const clickDot = useCallback((index) => {
    setState({
      ...state,

      translate:
        sliderItems.length * activeIndex - sliderItems.length * getWidth(),
      activeIndex: index,
    });
  }, []);

  const sliderStart = useCallback(() => {
    const play = () => {
      autoPlayRef.current();
    };
    interval.current = setInterval(play, autoPlay * 1000);
  }, [autoPlay]);

  const sliderStop = useCallback(() => {
    if (interval.current === null) {
      return;
    }
    clearInterval(interval.current);
  }, []);

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    return () => clearInterval(autoPlayRef);
  });

  return (
    <Wrapper>
      <OffScreenStrong>이미지 슬라이드</OffScreenStrong>
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

      <Dots
        slides={sliderItems}
        activeIndex={activeIndex}
        handlePlay={sliderStart}
        handleStop={sliderStop}
        clickDot={clickDot}
      />
    </Wrapper>
  );
}

export default Slider;
