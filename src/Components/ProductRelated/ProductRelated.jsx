import React, { useState, useCallback, useEffect, useRef } from 'react';
import { MDBBtn, MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { likeProduct } from '../../Store/Features/NProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AuthSelector } from '../../Store/Features/AuthSlice';
import {
  PCardCategory,
  PCardDes,
  PCardIspace,
  PCardItem,
  PCardPrice,
  PCardTitle,
  PCardUser,
  PUserAddress,
  PUserImage,
  PUserInfo,
} from '../CardProduct/CardProduct.style';
import { Image, ImageHolder } from '../../Assets/Styles/Image.style';

function ProductRelated(related) {
  // console.log('ProductRelated', related);
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
  } = related;

  // console.log(
  //   'item',
  //   _id,
  //   pdUploaderNickname,
  //   pdUploaderImage,
  //   pdCategory,
  //   pdImage,
  //   pdPrice,
  //   pdDes,
  //   pdTitle,
  //   pdtags,
  //   pdlikes,
  //   pdAddress,
  //   pdStatus,
  //   pdDegree
  // );

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
    <PCardItem>
      <div className="">
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
        <div className="" style={{ padding: '20px', boxSizing: 'border-box' }}>
          <PCardCategory>{pdCategory}</PCardCategory>
          <PCardPrice>{`${Number(pdPrice).toLocaleString(
            'ko-KR'
          )}`}</PCardPrice>

          <PCardTitle>
            <Link to={`/product/${_id}`}>{pdTitle}</Link>
          </PCardTitle>
          <PCardDes>{pdDes}</PCardDes>
          <div className="">
            <ul style={{}}>
              {pdStatus.map((status, index) => (
                <li
                  key={index}
                  style={{
                    display: 'inline-block',
                    border: '1px solid red',
                    borderRadius: '15px',
                    marginBottom: '10px',
                    marginRight: '5px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '15px',
                      padding: '10px',
                      boxSizing: 'border-box',
                    }}
                  >
                    #{status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
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
              <span>{pdDegree}</span>
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
            <PUserAddress>{pdUploaderNickname}</PUserAddress>
            <PUserAddress>{pdAddress}</PUserAddress>
          </PUserInfo>
        </PCardUser>
      </div>
    </PCardItem>
  );
}

export default ProductRelated;
