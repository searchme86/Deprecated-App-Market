import { Link } from 'react-router-dom';
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

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  margin: 60px 0 0 0;
  padding: 10px 40px;
  font-size: 18px;
  border-radius: 80px;
  border: 2px solid red;
  transition: opacity 0.1s ease-in;
  word-break: keep-all;
`;
