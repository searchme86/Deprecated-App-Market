import React from 'react';
import { Stop } from './Slider.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { OffScreenSpan } from '../../Assets/Styles/Basic.style.js';

function SliderStop({ handleStop }) {
  return (
    <Stop onClick={handleStop}>
      <OffScreenSpan>슬라이드 자동재생 중지</OffScreenSpan>
      <FontAwesomeIcon
        icon={faCirclePause}
        style={{ fontSize: '30px', color: '#d6de00' }}
      />
    </Stop>
  );
}

export default SliderStop;
