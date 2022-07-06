import React, { useEffect } from 'react';

import {
  SectionHeader,
  SectionLayout,
  SectionTitle,
  SectionUnit,
  SectionContent,
} from './ProductUpload.style';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from '../../../Store/Features/AuthSlice';
import {
  deleteProduct,
  getProductsByUser,
  ProductSelector,
} from '../../../Store/Features/NProductSlice';
import { Spinner } from '@chakra-ui/react';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';

import './productOfUser.css';
import Masonry from 'react-masonry-css';

const Columns = {
  default: 3,
  1100: 2,
  700: 1,
};

function ProductOfUser() {
  const {
    auth: {
      user,
      user: {
        result: { _id: userId, imageFile, nickname },
      },
    },
  } = useSelector(AuthSelector);

  const {
    product: { loading, userUploaded },
  } = useSelector(ProductSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getProductsByUser(userId));
    }
  }, [dispatch, userId]);

  if (loading) {
    return <Spinner />;
  }

  console.log('user', user);
  console.log('userUploaded', userUploaded);

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <SectionTitle>내가 등록한 상품</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <div
            className=""
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div
              className=""
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
                marginTop: '10px',
                marginBottom: '30px',
              }}
            >
              <ImageHolder width="66px" br="100%">
                <Image src={imageFile} alt={`${nickname} 프로필 이미지`} />
              </ImageHolder>
              <div className="">
                <p style={{ marginLeft: '10px' }}>
                  <strong style={{ fontSize: '25px' }}>{nickname}</strong>님이
                  등록하신 상품입니다.
                </p>
              </div>
            </div>
            <Masonry
              breakpointCols={Columns}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {userUploaded &&
                userUploaded.map(
                  ({ _id, pdCategory, pdImage, pdTitle, pdPrice, pdlikes }) => (
                    <div
                      className=""
                      key={_id}
                      style={{ position: 'relative' }}
                    >
                      <strong
                        style={{
                          position: 'absolute',
                          top: '11px',
                          left: '11px',
                          display: 'inline-block',
                          background: '#fff',
                          fontSize: '20px',
                          fontStyle: 'italic',
                          paddingLeft: '5px',
                          paddingRight: '5px',
                        }}
                      >
                        #{pdCategory}
                      </strong>
                      <Link to={`/product/${_id}`}>
                        <ImageHolder br="15px">
                          <Image src={pdImage} alt={`${pdTitle} 이미지`} />
                        </ImageHolder>
                      </Link>

                      <div
                        className=""
                        style={{
                          position: 'absolute',
                          bottom: '0px',
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          background: '#ddd',
                          padding: '10px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <strong style={{ fontSize: '20px', lineHeight: '1' }}>
                          {pdTitle}
                        </strong>
                        <span style={{ marginTop: '5px' }}>{pdPrice}원</span>
                        <span
                          style={{
                            marginLeft: 'auto',
                            position: 'absolute',
                            top: '6px',
                            right: '16px',
                          }}
                        >
                          좋아요 {pdlikes?.length} 개
                        </span>
                      </div>
                    </div>
                  )
                )}
            </Masonry>
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default ProductOfUser;
