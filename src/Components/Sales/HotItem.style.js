import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HotItemList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const HotItemLi = styled.li`
  position: relative;
  width: calc((100% - 40px) / 3);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HotItemhref = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
`;

export const HotItemTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 10px 0;
  color: #fff;
  word-break: keep-all;
`;

export const HotItemFunction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  padding: 16px;
  border: 1px solid #fff;
  border-radius: 20px;
`;
