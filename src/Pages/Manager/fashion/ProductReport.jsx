import React from 'react';
import {
  ModalAction,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
  ModalTitle,
} from '../../../Components/Modal/Modal.style';
import ModalFrame from '../../../Components/Modal/ModalFrame';
import { FormControl } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';
import { ReportTitle } from './ProductReport.style';

function ProductReport({ prReport }) {
  const { handleClose, isOpen, upload } = prReport;

  const dispatch = useDispatch();
  const {
    user: {
      result: { nickname },
    },
  } = useSelector((state) => state.auth);
  const {
    pdCategory,
    pdTitle,
    pdImage,
    pdPrice,
    pdDes,
    pdStatus,
    pdSizeInfo,
    pdColorInfo,
  } = upload;

  // console.log(
  //   'upload',
  //   // pdCategory,
  //   // pdTitle,
  //   // pdImage,
  //   pdPrice,
  //   // pdDes,
  //   pdStatus,
  //   pdSizeInfo,
  //   pdColorInfo
  // );

  return (
    <div>
      <ModalFrame
        handleClose={handleClose}
        isOpen={isOpen}
        domId="product-report-modal"
      >
        <>
          <ModalHeader>
            <ModalTitle>등록상품 미리보기</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <ModalForm>
              <FormControl>
                <div>
                  <div className="">
                    {/* 헤더 */}
                    <div className="">
                      <p>
                        <strong>{nickname}</strong>님이 등록하시는 상품
                        요약입니다.
                      </p>
                    </div>
                    {/* 컨텐츠 */}
                    <div className="" style={{ display: 'flex' }}>
                      {/* 왼쪽 */}
                      <div
                        className=""
                        style={{ width: '30%', marginRight: '10px' }}
                      >
                        <ImageHolder>
                          <Image src={pdImage} alt={`${pdTitle} 이미지`} />
                        </ImageHolder>
                      </div>
                      {/* 오른쪽 */}
                      <div className="">
                        {/* 오른쪽 컨텐츠 */}
                        <div className="">
                          <div className="">
                            <ul>
                              <li>
                                <div className="">
                                  <ReportTitle>카테고리</ReportTitle>
                                  <strong
                                    style={{
                                      marginLeft: '10px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    {pdCategory}
                                  </strong>
                                </div>
                              </li>
                              <li style={{ marginTop: '5px' }}>
                                <ul style={{ display: 'flex' }}>
                                  <li>
                                    <div className="">
                                      <ReportTitle>상품명</ReportTitle>
                                      <strong
                                        style={{
                                          marginLeft: '10px',
                                          fontWeight: '500',
                                        }}
                                      >
                                        {pdTitle}
                                      </strong>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="">
                                      <ReportTitle>상품가격</ReportTitle>
                                      <strong
                                        style={{
                                          marginLeft: '10px',
                                          fontWeight: '500',
                                        }}
                                      >
                                        {pdPrice}
                                      </strong>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                              <li style={{ marginTop: '5px' }}>
                                <div className="">
                                  <ReportTitle>상품소개</ReportTitle>
                                  <strong
                                    style={{
                                      marginLeft: '10px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    {pdDes}
                                  </strong>
                                </div>
                              </li>
                              <li style={{ marginTop: '5px' }}>
                                <div className="">
                                  <ReportTitle>상품상태</ReportTitle>
                                  <strong
                                    style={{
                                      marginLeft: '10px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    {pdStatus}
                                  </strong>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ModalAction>
                    <ModalSeconDaryBtn
                      type="button"
                      role="button"
                      onClick={handleClose}
                    >
                      취소
                    </ModalSeconDaryBtn>
                    <ModalPrimaryBtn
                      type="submit"
                      // disabled={!canTrigger}
                      role="button"
                    >
                      등록
                    </ModalPrimaryBtn>
                  </ModalAction>
                </div>
              </FormControl>
            </ModalForm>
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductReport;
