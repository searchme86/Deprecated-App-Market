import React from 'react';
import { Sslide } from '../sources/Slider.style.js';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';

function Slide(props) {
  const {
    content: { src, alt },
  } = props;

  return (
    <Sslide>
      <ImageHolder width="100%" height="100%">
        <Image src={src} alt={alt} />
      </ImageHolder>
    </Sslide>
  );
}

export default Slide;
