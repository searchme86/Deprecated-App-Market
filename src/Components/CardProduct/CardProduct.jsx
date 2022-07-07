/**
 * _id :  각 상품이 저장될때, 상품 하나의 해당하는 몽고Documents의 _id 값
 *
 *
 *
 *  */

import React from 'react';
import { MDBBtn, MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { likeProduct } from '../../Store/Features/NProductSlice';
import { Image, ImageHolder } from '../../Assets/Styles/Image.style';
import {
  PCardIspace,
  PCardItem,
  PCardUser,
  PCardCategory,
  PUserAddress,
  PUserImage,
  PUserInfo,
  PCardPrice,
  PCardDes,
  PCardTitle,
  PUserNickname,
} from './CardProduct.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';

import { AuthSelector } from '../../Store/Features/AuthSlice.js';

function CardProduct(item) {
  const {
    _id,
    pdUploaderNickname,
    pdUploaderImage,
    pdCategory,
    pdImage,
    pdPrice,
    pdDes,
    pdTitle,
    pdtags,
    pdlikes,
    pdAddress,
    pdStatus,
    pdDegree,
  } = item;

  const {
    auth: { user },
  } = useSelector(AuthSelector);

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

  return (
    <>
      <PCardItem>
        <div className="">
          <Link to={`/product/${_id}`}>
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
          </Link>
        </div>
        <div className="" style={{ padding: '5px', boxSizing: 'border-box' }}>
          <div className="">
            <PCardCategory>{pdCategory}</PCardCategory>
            <PCardPrice>
              {`${Number(pdPrice).toLocaleString('ko-KR')}`}
            </PCardPrice>
            <PCardTitle>
              <Link to={`/product/${_id}`}>{pdTitle}</Link>
            </PCardTitle>
            <div
              className=""
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
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
              <div
                className=""
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    marginRight: '2px',
                    lineHeight: '1',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                >
                  {pdDegree}
                </span>
                <span
                  style={{
                    lineHeight: '1',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                >
                  <FontAwesomeIcon
                    icon={faFaceSmileWink}
                    style={{ fontSize: '20px', color: '#303C6C' }}
                  />
                </span>
              </div>
            </div>
          </div>

          <PCardUser>
            <PUserImage>
              <ImageHolder br="100%">
                <Image src={pdUploaderImage} alt={pdUploaderNickname} />
              </ImageHolder>
            </PUserImage>
            <PUserInfo>
              <PUserNickname>{pdUploaderNickname}</PUserNickname>
              <PUserAddress>{pdAddress}</PUserAddress>
            </PUserInfo>
          </PCardUser>
        </div>
      </PCardItem>
    </>
  );
}

export default CardProduct;
