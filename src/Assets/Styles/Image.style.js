import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageHolder = styled.div`
  width: ${({ width }) => width};
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: ${(props) => props.radius};
`;

export const ImageLink = styled(Link)`
  display: block;
`;
