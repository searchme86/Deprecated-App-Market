import React from 'react';
import styled from 'styled-components';

const Sslide = styled.div`
  height: 100;
  width: 100%;
  background-image: url('${(props) => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function Slide(props) {
  const {
    content: { src },
  } = props;

  return <Sslide content={src} />;
}

export default Slide;
