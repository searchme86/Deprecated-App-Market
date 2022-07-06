/**
 * [1]. 타입 : 페이지(page)
 * [2]. 내용 : 로그인한 유저가 자신이 등록한 상품들을 확인하는 페이지
 * [3]. 기능 :
 *   1. 상품을 클릭해 개별 상품 상세 페이지로 이동할 수 있음
 *   2. 상품 삭제를 묻는 모달(커스텀)을 실행 할 수 있음
 * [4]. 구조 : 부모 컴포넌트(ProductOfUser.jsx) - 자식컴포넌트(ProductDelete.jsx)
 * 사용 외부 컴포넌트 :
 *  fortawesome, react-masonry-css
 * [4]. 특징 :
 *   1. 상수(변수명 Columns)는 새로 생성되지 않도록 컴포넌트 외부에 정의함
 *   2. imageFile, nickname과 같은 데이터가 null일 경우, 방어코드로  삼항연산자를 통해 기본값을 설정함
 *   3. AuthSelector와 같이, useSelector로 state를 가져오는 경우,  객체변경을 막기 위해 createSelector로 만든 값을 사용함
 *   4. Props로 전달되는 이벤트 핸들러 handleClose, handleDeleteModal는 useCallback을, 모달에 전달되는 Props, modalProps는 useMemo를 적용해, 이전 객체와 참조주소가 유지되도록 처리함
 *
 * [5].변수명/함수명/state
 *   itemInfo(obj) : 상품의 정보를 포함(_id:상품아이디, pdTitle:상품 타이틀)
 *   isOpen(boolean) : 모달이 보이는 상태저장
 *   isModalOpen(boolean) : 모달이 열리는 조건값을 저장
 *   userId(string): 유저의 아이디
 *   imageFile(string) : 유저의 프로필 이미지
 *   nickname(string) : 유저의 닉네임
 *   AuthSelector : 유저 auth state를 createSelector로 감싼 값
 *   ProductSelector : 유저 상품 state를 createSelector로 감싼 값
 *   loading(boolean) : 유저 상품 state를 fetching 상태를 알려주는 로딩 state
 *   userUploaded(array): 유저 별, 개별 유저가 올린 상품 state가 저장됨
 *   handleClose (func) : 모달을 켜고 끄는 기본 핸들러
 *   handleDeleteModal(func) : 모달 컴포넌트를 켜고 끄는 핸들러
 *   modalProps(object) : 자식컴포넌트(ProductDelete)에 전달하는 props 객체
 *   getProductsByUser(Redux Thunk) : 유저아이디(userId)를 받아 해당 유저가 등록한 상품 데이터(userUploaded)를 fetching 하는 비동기 썽크
 *
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  SectionHeader,
  SectionLayout,
  SectionUnit,
  SectionContent,
} from './ProductUpload.style';
import { CenterLayout } from '../../../Assets/Styles/Layout.style';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';
import {
  OffScreenSpan,
  OffScreenTitle,
} from '../../../Assets/Styles/Basic.style';
import { Spinner } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import defautImage from '../../../Assets/Image/default-product-upload.png';

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

  const modalProps = useMemo(() => {
    return {
      handleClose,
      isOpen,
      itemInfo,
    };
  }, [handleClose, isOpen, itemInfo]);

  if (loading) {
    return (
      <CenterLayout>
        <Spinner />
      </CenterLayout>
    );
  }

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <OffScreenTitle>
            {nickname ? (
              <>
                <strong>{nickname}</strong>님의 상품
              </>
            ) : (
              '유저의 등록 상품'
            )}
          </OffScreenTitle>
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
                <Image
                  src={imageFile ? imageFile : defautImage}
                  alt={nickname ? `${nickname} 프로필 이미지` : '디폴트 이미지'}
                />
              </ImageHolder>
              <div className="">
                <p style={{ marginLeft: '10px' }}>
                  <strong style={{ fontSize: '25px', marginRight: '5px' }}>
                    {nickname ? nickname : '유저'}
                  </strong>
                  님이 등록하신 상품입니다.
                </p>
              </div>
            </div>
            {userUploaded && (
              <>
                <Masonry
                  breakpointCols={Columns}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {userUploaded &&
                    userUploaded.map(
                      ({
                        _id,
                        pdCategory,
                        pdImage,
                        pdTitle,
                        pdPrice,
                        pdlikes,
                      }) => (
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
              </>
            )}
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default ProductOfUser;
