import React from 'react';
import { MDBBtn, MDBIcon, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { likeProduct } from '../../Store/Features/NProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AuthSelector } from '../../Store/Features/AuthSlice';
import {
  PCardCategory,
  PCardIspace,
  PCardItem,
  PCardPrice,
  PCardTitle,
  PCardUser,
  PUserAddress,
  PUserImage,
  PUserInfo,
  PCardTags,
  PCardTag,
  PCardTagText,
  PCardLike,
  PCardDgree,
} from '../CardProduct/CardProduct.style';
import { Image, ImageHolder } from '../../Assets/Styles/Image.style';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { RelatedImage, RelatedHref, RelatedInfo } from './ProductRelated.style';

function ProductRelated(related) {
  const {
    _id,
    pdUploaderNickname,
    pdUploaderImage,
    pdCategory,
    pdBrand,
    pdType,
    pdImage,
    pdPrice,
    pdTitle,
    pdlikes,
    pdAddress,
    pdStatus,
    pdDegree,
  } = related;

  const {
    auth: { user },
  } = useSelector(AuthSelector);
  const userId = user?.result?._id;

  const dispatch = useDispatch();
  // const excerpt = (str) => {
  //   if (str.length > 45) {
  //     str = str.substring(0, 45) + ' ...';
  //   }
  //   return str;
  // };

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
            `${pdlikes.length} Like ${pdlikes.length > 1 ? 's' : ''}`
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
        <Breadcrumb as="div" mt="5px">
          <BreadcrumbItem>
            <BreadcrumbLink fontWeight="bold" fontSize="18px">
              {pdCategory}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink fontWeight="bold" fontSize="18px">
              {pdBrand}
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight="bold" fontSize="18px">
              {pdType}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <PCardPrice>{`${Number(pdPrice).toLocaleString('ko-KR')}`}</PCardPrice>
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
          <PCardDgree>{pdDegree}</PCardDgree>
        </PCardLike>
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
      </RelatedInfo>
    </PCardItem>
  );
}

export default ProductRelated;
