import styled from 'styled-components';

export const CommonBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const BasicButton = styled(CommonBtn)`
  width: 100%;
  color: #fff;
  background: #000;
  height: 48px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  padding: 11px 16px;
  box-sizing: border-box;
  margin: 0 10px 0 0;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const PrimaryButton = styled(BasicButton)``;

export const SeconDaryButton = styled(BasicButton)`
  color: #767676;
  border: 1px solid #bcbcbc;
  background: #fff;
`;

export const BasicIconBtn = styled(CommonBtn)`
  z-index: 1;
  background: #fff;
  padding: 5px;
`;
