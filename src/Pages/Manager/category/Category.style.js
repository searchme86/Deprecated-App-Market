import styled from 'styled-components';
import { BasicLi, BasicStrong } from '../../../Assets/Styles/Basic.style';

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
`;

export const CategoryWrapper = styled.div`
  background-color: #f5fbfd;
`;

export const CategoryItem = styled(BasicLi)`
  width: 170px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  border: 1px solid red;
`;

export const CategoryTitle = styled(BasicStrong)`
  text-align: center;
  color: #424242;
  font-size: 19px;
`;
