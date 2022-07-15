import React from 'react';
import { Stop } from '../sources/Slider.style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause } from '@fortawesome/free-solid-svg-icons';
import { OffScreenStrong } from '../../../Assets/Styles/Basic.style.js';

function SliderStop({ handleStop }) {
  return (
    <Stop onClick={handleStop}>
      <OffScreenStrong>슬라이드 자동재생 버튼</OffScreenStrong>
      <FontAwesomeIcon
        icon={faCirclePause}
        style={{ fontSize: '30px', color: '#d6de00' }}
      />
    </Stop>
  );
}

export default SliderStop;
