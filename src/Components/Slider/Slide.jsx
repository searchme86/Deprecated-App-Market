import React from 'react';
import { Sslide } from './Slider.style.js';

function Slide(props) {
  const {
    content: { src },
  } = props;

  return <Sslide content={src} />;
}

export default Slide;
