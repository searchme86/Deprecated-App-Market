import React from 'react';

import styled from 'styled-components';

const Stop = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100px;
  height: 100px;
  left: 30%;
  border-radius: 50%;
`;

function SliderStop({ handleStop }) {
  return <Stop onClick={handleStop}>Stop</Stop>;
}

export default SliderStop;
