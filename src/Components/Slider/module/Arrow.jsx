import leftArrow from '../sources/left-arrow.png';
import rightArrow from '../sources/right-arrow.png';
import { ButtonArrow } from '../sources/Slider.style';

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
