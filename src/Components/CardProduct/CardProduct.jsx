/**
 * _id :  각 상품이 저장될때, 상품 하나의 해당하는 몽고Documents의 _id 값
 *
 *
 *
 *  */

import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardGroup,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { likeProduct } from '../../Store/Features/NProductSlice';
import { Image, ImageHolder } from '../../Assets/Styles/Image.style';

function CardProduct(item) {
  console.log('cardProduct 컴포넌트에서 item', item);
  const {
    _id,
    pdUploader,
    pdImage,
    pdPrice,
    pdDes,
    pdTitle,
    pdtags,
    pdlikes,
    pdAddress,
  } = item;
  console.log(
    'item',
    _id
    // pdUploader,
    // pdImage,
    // pdDes,
    // pdTitle,
    // pdtags,
    // pdlikes
  );
  const { user } = useSelector((state) => state.auth);
  const userId = user?.result?._id;

  const dispatch = useDispatch();
  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + ' ...';
    }
    return str;
  };

  const Likes = () => {
    if (pdlikes.length > 0) {
      return pdlikes.find((like) => like === userId) ? (
        <>
          <MDBIcon fas icon="thumbs-up" />
          &nbsp;
          {pdlikes.length > 2 ? (
            <MDBTooltip
              tag="a"
              title={`You and ${pdlikes.length - 1} other people likes`}
            >
              {pdlikes.length} Likes
            </MDBTooltip>
          ) : (
            `${pdlikes.length} Like${pdlikes.length > 1 ? 's' : ''}`
          )}
        </>
      ) : (
        <>
          <MDBIcon far icon="thumbs-up" />
          &nbsp;{pdlikes.length} {pdlikes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }
    return (
      <>
        <MDBIcon far icon="thumbs-up" />
        &nbsp;Like
      </>
    );
  };

  const handleLike = () => {
    dispatch(likeProduct({ _id }));
  };

  console.log('user', user);
  console.log('_id', _id);

  return (
    <>
      <li>
        <div className="">
          <div className="">
            <ImageHolder width={'200px'} height={'150px'}>
              <Image src={pdImage} alt={pdTitle} />
            </ImageHolder>
          </div>
          <div className="">
            <p>{pdTitle}</p>
            <p>{`${Number(pdPrice).toLocaleString('ko-KR')} 원`}</p>
            <p>{pdAddress}</p>
            <div className="">
              <ul>
                {pdtags.map((tag, index) => (
                  <li>
                    <Link to={`/products/tag/${tag}`}>#{tag}</Link>
                  </li>
                ))}
              </ul>
              <MDBBtn
                style={{ float: 'right' }}
                tag="a"
                color="none"
                onClick={!user?.result ? null : handleLike}
              >
                {!user?.result ? (
                  <MDBTooltip title="Please login to like tour" tag="a">
                    <Likes />
                  </MDBTooltip>
                ) : (
                  <Likes />
                )}
              </MDBBtn>
            </div>
            <div className="">
              <p>{pdDes}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardProduct;
