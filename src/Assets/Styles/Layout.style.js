import styled from 'styled-components';

export const SectionDivier = styled.section`
  margin: 20px 0;
`;

export const ContentDivider = styled.div`
  padding: 10px;
`;

export const AlignComponents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlignList = styled.ul`
  display: flex;
`;

export const ListContainer = styled.ul`
  display: ${({ display }) => display};
`;
