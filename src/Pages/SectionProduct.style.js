import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductLayOut = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const ProductMore = styled(Link)`
  position: absolute;
  bottom: -25px;
  right: 0;
  width: inline-block;
  margin: 5px;
  text-decoration: underline;
  font-size: 18px;
  color: #3072ab;
  cursor: pointer;
`;
