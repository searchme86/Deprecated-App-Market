import styled from 'styled-components';

export const BasicStrong = styled.strong`
  display: inline-block;
  vertical-align: top;
  line-height: 1;
`;

export const SectionTitle = styled.h1`
  position: relative;
  font-size: 32px;
  font-weight: bold;
  padding: 0 0 30px 0;
  margin: 0 0 0 30px 0;
  transition: 0.2s;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 24px;
    height: 3px;
    background: #f7991c;
  }
`;
