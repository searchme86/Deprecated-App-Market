import React from 'react';
import { SContent } from '../sources/Slider.style.js';

function SliderContent(props) {
  const { translate, transition, width, children } = props;

  return (
    <SContent width={width} translate={translate} transition={transition}>
      {children}
    </SContent>
  );
}

export default SliderContent;