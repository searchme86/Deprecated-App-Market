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
import { PCardIspace, PCardItem } from './CardProduct.style';

function CardProduct(item) {
  console.log('cardProduct 컴포넌트에서 item', item);
  const {
    _id,
    pdUploaderNickname,
    pdUploaderImage,
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
    _id,
    pdUploaderNickname,
    pdUploaderImage
    // pdUploader,
    // pdImage,
    // pdDes,
    // pdTitle,
    // pdtags,
    // pdlikes
  );
  const {
    user: {
      result: { nickname, imageFile },
    },
  } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const userId = user?.result?._id;
  // const userId = _id;

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
      <PCardItem>
        <ImageHolder
          height="150px"
          style={{
            position: 'relative',
            width: 'initial',
            height: 'initial',
            boxSizing: 'border-box',
            padding: '0',
            margin: '0',
          }}
        >
          <PCardIspace />
          <Image
            src={pdImage}
            alt={pdTitle}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '0',
            }}
          />
        </ImageHolder>
        <div className="" style={{ position: 'relative' }}>
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
            <div className="">
              <div className="">
                <img src={pdUploaderImage} alt={pdUploaderNickname} />
              </div>
              <span>{pdUploaderNickname}</span>
            </div>
          </div>
        </div>
      </PCardItem>
    </>
  );
}

export default CardProduct;
