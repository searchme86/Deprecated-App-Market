import styled from 'styled-components';
import {
  BasicLi,
  BasicStrong,
  BasicButton,
} from '../../../Assets/Styles/Basic.style';
import { NavLink } from 'react-router-dom';

export const CategoryWrapper = styled.div`
  ${'' /* background-color: #f5fbfd; */}
`;

export const CategoryItem = styled(BasicLi)`
  width: 200px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  border-radius: 14px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

export const CategoryTitle = styled(BasicStrong)`
  text-align: center;
  color: #424242;
  font-size: 19px;
`;

export const CreateCategoryBtn = styled(NavLink)`
  margin: 0 10px 0 10px;
`;

export const DeleteCategoryBtn = styled(BasicButton)`
  width: 20px;
`;

export const FunctionList = styled.li`
  flex: 1;
  cursor: pointer;
`;
