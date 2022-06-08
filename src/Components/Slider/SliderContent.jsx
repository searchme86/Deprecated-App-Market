import React from 'react';
import styled from 'styled-components';

const SContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${({ width }) => width}px;
  display: flex;
`;

function SliderContent(props) {
  const { translate, transition, width, children } = props;

  return (
    <SContent width={width} translate={translate} transition={transition}>
      {children}
    </SContent>
  );
}

export default SliderContent;
