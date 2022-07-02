import styled from 'styled-components';

export const PCardItem = styled.li`
  width: calc((100% - 78px) / 4);
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
  background: red;
`;

export const PCardIspace = styled.span`
  display: inline-block;
  padding: 0;
  padding-top: 56.25%;
`;
