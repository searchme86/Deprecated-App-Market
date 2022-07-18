import styled from 'styled-components';

export const SProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0 0 0;
`;

export const SProductItem = styled.li`
  width: calc((100% - 78px) / 4);
  height: 500px;
  margin: 0 13px 20px 13px;
  &:first-child {
    margin-left: 0;
  }
  &:nth-child(4n) {
    margin-right: 0;
  }
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;
