import React from 'react';
import styled from 'styled-components';

const Play = styled.div`
  position: absolute;
  bottom: 10px;
  width: 20px;
  height: 20px;
  left: 50%;
  border-radius: 50%;
`;

const Stop = styled.div`
  position: absolute;
  bottom: 10px;
  width: 20px;
  height: 20px;
  left: 30%;
  border-radius: 50%;
`;

function SliderPlay({ handlePlay, handleStop }) {
  return (
    <>
      <Play onClick={handlePlay}>play</Play>
      {/* <Stop onClick={handleStop}>stop</Stop> */}
    </>
  );
}

export default SliderPlay;
