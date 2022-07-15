import React from 'react';
import { Play } from './Slider.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { OffScreenSpan } from '../../Assets/Styles/Basic.style.js';

function SliderPlay({ handlePlay }) {
  return (
    <Play onClick={handlePlay}>
      <OffScreenSpan>슬라이드 자동재생</OffScreenSpan>
      <FontAwesomeIcon
        icon={faCirclePlay}
        style={{ fontSize: '30px', color: '#d6de00' }}
      />
    </Play>
  );
}

export default SliderPlay;
