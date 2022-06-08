import styled from 'styled-components';

export const TextHidden = styled.p`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  z-index: -1;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
`;
