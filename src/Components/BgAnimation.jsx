import React from 'react';
import {
  CircleAnimation,
  RectAnimation,
  SquareAnimation,
} from './BgAnimation.style';

function BgAnimation() {
  return (
    <>
      <SquareAnimation />
      <CircleAnimation />
      <RectAnimation />
    </>
  );
}

export default BgAnimation;
