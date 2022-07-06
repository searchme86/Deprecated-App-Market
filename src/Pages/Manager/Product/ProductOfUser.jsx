/**
 * 역할 :  페이지(page)
 *
 *
 *
 *
 *
 */

import React, { useState, useEffect, useCallback } from 'react';
import {
  SectionHeader,
  SectionLayout,
  SectionTitle,
  SectionUnit,
  SectionContent,
} from './ProductUpload.style';
import { CenterLayout } from '../../../Assets/Styles/Layout.style';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';
import { OffScreenSpan } from '../../../Assets/Styles/Basic.style';
import { Spinner } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from '../../../Store/Features/AuthSlice';
import {
  getProductsByUser,
  ProductSelector,
} from '../../../Store/Features/NProductSlice';

import Masonry from 'react-masonry-css';
import './productOfUser.css';
import { Link } from 'react-router-dom';

import ProductDelete from './ProductDelete';

const Columns = {
  default: 3,
  1100: 2,
  700: 1,
};

function ProductOfUser() {
  const [itemInfo, setItemInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    auth: {
      user,
      user: {
        result: { _id: userId, imageFile, nickname },
      },
    },
  } = useSelector(AuthSelector);
  const dispatch = useDispatch();

  const {
    product: { loading, userUploaded },
  } = useSelector(ProductSelector);

  useEffect(() => {
    if (userId) {
      dispatch(getProductsByUser(userId));
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDeleteModal = useCallback((name) => {
    setIsOpen((value) => !value);
    setIsModalOpen(true);
    setItemInfo({ ...name });
  }, []);

  if (loading) {
    return (
      <CenterLayout>
        <Spinner />
      </CenterLayout>
    );
  }

  const modalProps = { handleClose, isOpen, itemInfo };

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
                          padding: '15px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <strong
                          style={{
                            fontSize: '20px',
                            lineHeight: '1',
                            width: '200px',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                          }}
                        >
                          {pdTitle}
                        </strong>
                        <span style={{ marginTop: '15px' }}>
                          <strong style={{ fontSize: '20px' }}>
                            {Number(pdPrice).toLocaleString('ko-KR')}
                          </strong>
                          원
                        </span>
                        <span
                          style={{
                            marginLeft: 'auto',
                            position: 'absolute',
                            top: '11px',
                            right: '16px',
                            fontSize: '17px',
                          }}
                        >
                          좋아요 {pdlikes?.length} 개
                        </span>
                        <button
                          type="button"
                          style={{
                            position: 'absolute',
                            bottom: '14px',
                            right: '16px',
                            display: 'inline-block',
                            verticalAlign: 'top',
                          }}
                          onClick={() =>
                            handleDeleteModal({ name: pdTitle, id: _id })
                          }
                        >
                          <OffScreenSpan>상품삭제 버튼</OffScreenSpan>
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ fontSize: '28px', color: 'red' }}
                          />
                        </button>
                      </div>
                    </div>
                  )
                )}
            </Masonry>
            {isModalOpen && <ProductDelete deleteModal={modalProps} />}
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default ProductOfUser;
