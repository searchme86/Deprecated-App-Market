import styled, { css } from 'styled-components';
import leftArrow from '../../Assets/Slider/left-arrow.png';
import rightArrow from '../../Assets/Slider/right-arrow.png';

const ButtonArrow = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  height: 50px;
  width: 50px;
  background: white;
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
  img {
    transform: translateX(
      ${({ direction }) => (direction === 'left' ? '-2' : '2')}px
    );
    &:focus {
      outline: 0;
    }
  }
`;

function Arrow(props) {
  const { direction, handleClick } = props;
  return (
    <ButtonArrow direction={direction} onClick={handleClick}>
      {direction === 'right' ? (
        <img src={rightArrow} alt={'오른쪽 화살표'} />
      ) : (
        <img src={leftArrow} alt={'왼쪽 화살표'} />
      )}
    </ButtonArrow>
  );
}

export default Arrow;
