import styled from 'styled-components';

export const SectionDivier = styled.section`
  margin: 20px 0;
`;

export const SectionContainer = styled.div`
  margin: 10px 0 0 0;
`;

export const SectionHalf = styled.div`
  margin-right: ${({ mr }) => mr}px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const ContentDivider = styled.div`
  padding: 10px;
`;

export const AlignComponents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ mb }) => mb}px;
  background: ${({ bg }) => bg};
`;

export const AlignList = styled.ul`
  display: flex;
`;

export const ListContainer = styled.ul`
  display: ${({ display }) => display};
`;
