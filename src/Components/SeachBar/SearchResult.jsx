// import { Link } from 'react-router-dom';
import { TvShowContainer, Thumbnail, Name, Rating } from './SearchBox.style';

function SearchResult(props) {
  const { thumbanilSrc, name, rating } = props;

  return (
    <TvShowContainer>
      <Thumbnail>
        <img src={thumbanilSrc} alt={'썸네일'} />
      </Thumbnail>
      <Name>{name}</Name>
      <Rating>{rating || 'N/A'}</Rating>
      {/* <Link to={}>
      </Link> */}
    </TvShowContainer>
  );
}

export default SearchResult;
