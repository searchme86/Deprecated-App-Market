import {
  Name,
  Rating,
  SearchItem,
  SearchItemInfo,
  SearchItemLink,
} from './SearchBox.style';
import { ImageHolder, Image } from '../../Assets/Styles/Image.style';

function SearchResult(props) {
  const { thumbanilSrc, name, rating } = props;

  return (
    <SearchItem>
      <SearchItemLink to={'/'}>
        <ImageHolder width="100px" height="100px" mr="10px">
          <Image src={thumbanilSrc} alt={'썸네일'} />
        </ImageHolder>
        <SearchItemInfo>
          <Name>{name}</Name>
          <Rating>{rating || 'N/A'}</Rating>
        </SearchItemInfo>
      </SearchItemLink>
    </SearchItem>
  );
}

export default SearchResult;
