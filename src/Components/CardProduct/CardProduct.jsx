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
  PCardTags,
  PCardTag,
  PCardTagText,
  PCardLike,
  PcardIconBox,
  PCardDgree,
  PcardIcon,
} from './CardProduct.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';

import { AuthSelector } from '../../Store/Features/AuthSlice.js';

import {
  RelatedImage,
  RelatedHref,
  RelatedInfo,
} from '../ProductRelated/ProductRelated.style.js';

function CardProduct(item) {
  const {
    _id,
    pdUploaderNickname,
    pdUploaderImage,
    pdCategory,
    pdImage,
    pdPrice,
    pdTitle,
    pdlikes,
    pdAddress,
    pdStatus,
    pdDegree,
    pdtags,
  } = item;

  console.log('pdtags', pdtags);
  const {
    auth: { user },
  } = useSelector(AuthSelector);

  let userId = user?.newUser?._id;

  const dispatch = useDispatch();

  const Likes = () => {
    if (pdlikes.length > 0) {
      return pdlikes.find((like) => like === userId) ? (
        <>
          <MDBIcon fas icon="thumbs-up" />

          {pdlikes.length > 2 ? (
            <MDBTooltip
              tag="p"
              title={`You and ${pdlikes.length - 1} other people likes`}
            >
              {pdlikes.length} Likes
            </MDBTooltip>
          ) : (
            `${pdlikes.length} Like ${pdlikes.length > 1 ? 's' : ''}`
          )}
        </>
      ) : (
        <>
          <MDBIcon far icon="thumbs-up" />
          {pdlikes.length} {pdlikes.length === 1 ? 'Like' : 'Likes'}
        </>
      );
    }

    return (
      <>
        <MDBIcon far icon="thumbs-up" />
        Like
      </>
    );
  };

  const handleLike = () => {
    dispatch(likeProduct({ _id }));
  };

  return (
    <>
      <PCardItem>
        <RelatedImage>
          <RelatedHref to={`/product/${_id}`}>
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
          </RelatedHref>
        </RelatedImage>

        <RelatedInfo>
          <PCardCategory>{pdCategory}</PCardCategory>
          <PCardTags>
            {pdtags.map((tags, index) => (
              <PCardTag key={index}>
                <PCardTagText>#{tags}</PCardTagText>
              </PCardTag>
            ))}
          </PCardTags>
          <PCardPrice>
            {`${Number(pdPrice).toLocaleString('ko-KR')}`}
          </PCardPrice>
          <PCardTitle>
            <Link to={`/product/${_id}`}>{pdTitle}</Link>
          </PCardTitle>
          <PCardTags>
            {pdStatus.map((status, index) => (
              <PCardTag key={index}>
                <PCardTagText>#{status}</PCardTagText>
              </PCardTag>
            ))}
          </PCardTags>
          <PCardLike>
            <MDBBtn
              style={{ float: 'right' }}
              tag="div"
              color="none"
              onClick={!user?.newUser ? null : handleLike}
            >
              {!user?.newUser ? (
                <MDBTooltip title="좋아요는 로그인 후에 가능합니다." tag="p">
                  <Likes />
                </MDBTooltip>
              ) : (
                <Likes />
              )}
            </MDBBtn>
            <PcardIconBox>
              <PCardDgree>{pdDegree}</PCardDgree>
              <PcardIcon>
                <FontAwesomeIcon
                  icon={faFaceSmileWink}
                  style={{
                    fontSize: '20px',
                    color: '#303C6C',
                    marginLeft: '2px',
                  }}
                />
              </PcardIcon>
            </PcardIconBox>
          </PCardLike>

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
        </RelatedInfo>
      </PCardItem>
    </>
  );
}

export default CardProduct;
