import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageHolder = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin-right: ${({ mr }) => mr};
  border-radius: ${({ br }) => br};
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ radius }) => radius};
`;

export const ImageLink = styled(Link)`
  display: block;
`;
