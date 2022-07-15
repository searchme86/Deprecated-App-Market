import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 690px;
  height: 500px;
  overflow: hidden;
`;

export const ButtonArrow = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;

  ${({ direction }) =>
    direction === 'right' &&
    css`
      right: 25px;
    `}

  ${({ direction }) =>
    direction === 'left' &&
    css`
      left: 25px;
    `}

  &:hover {
    transform: scale(1.1);
  }
`;

export const DotWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DotList = styled.ol`
  display: flex;
  margin: 0 15px 0 15px;
`;

export const DotLi = styled.li`
  display: flex;
  justify-content: 'center';
  align-items: center;
  margin: 0 10px 0 0;
  &:last-child {
    margin-right: 0;
  }
`;

export const Dot = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ active }) => (active ? '#3072ab' : '#c7bed9')};
`;

export const SContent = styled.ol`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 100%;
  width: ${({ width }) => width}px;
  display: flex;
`;

export const Sslide = styled.li`
  height: 100%;
  width: 100%;
`;

export const Play = styled.div`
  width: 20px;
  left: 50%;
  border-radius: 50%;
`;

export const Stop = styled.div`
  bottom: 10px;
  left: 30%;
`;
