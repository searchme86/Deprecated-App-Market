import React from 'react';
import {
  CircleAnimation,
  RectAnimation,
  SquareAnimation,
  SquareAAnimation,
  HeartAnimation,
  HeartAAnimation,
  HeartAAAnimation,
  HeartAAAAnimation,
  HeartAAwAnimation,
} from './BgAnimation.style';

function BgAnimation() {
  return (
    <>
      <SquareAnimation />
      <SquareAAnimation />
      <CircleAnimation />
      <RectAnimation />
      <HeartAnimation />
      <HeartAAnimation />
      <HeartAAAnimation />
      <HeartAAAAnimation />
      <HeartAAwAnimation />
    </>
  );
}

export default BgAnimation;
