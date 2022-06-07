import React from 'react';
import styled from 'styled-components';

const DotWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ active }) => (active ? 'black' : 'white')};
`;

function Dots(props) {
  const { slides, activeIndex } = props;

  return (
    <DotWrapper>
      {slides.map((slide, i) => (
        <Dot key={slide.id} active={activeIndex === i} />
      ))}
    </DotWrapper>
  );
}

export default Dots;
