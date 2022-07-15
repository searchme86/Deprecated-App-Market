import { OffScreenStrong } from '../../../Assets/Styles/Basic.style';
import leftArrow from '../sources/left-arrow.png';
import rightArrow from '../sources/right-arrow.png';
import { ButtonArrow } from '../sources/Slider.style';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';

function Arrow({ direction, handleClick }) {
  return (
    <ButtonArrow direction={direction} onClick={handleClick}>
      {direction === 'right' ? (
        <>
          <OffScreenStrong>오른쪽 화살표</OffScreenStrong>
          <ImageHolder>
            <Image src={rightArrow} alt={'오른쪽 화살표'} />
          </ImageHolder>
        </>
      ) : (
        <>
          <OffScreenStrong>왼쪽 화살표</OffScreenStrong>
          <ImageHolder>
            <Image src={leftArrow} alt={'왼쪽 화살표'} />
          </ImageHolder>
        </>
      )}
    </ButtonArrow>
  );
}

export default Arrow;
