import styled from 'styled-components';

export const ReportTitle = styled.strong`
  position: relative;
  display: block;
  font-size: 15px;
  font-weight: bold;
  padding: 0 0 0 10px;
  transition: 0.2s;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 3px;
    height: 100%;
    background: #767676;
  }
`;
