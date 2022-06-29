import React from 'react';
import {
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalTitle,
} from '../../../Components/Modal/Modal.style';
import ModalFrame from '../../../Components/Modal/ModalFrame';
import { useSelector } from 'react-redux';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';
import {
  ReportAlert,
  ReportAlertList,
  ReportAlertMessage,
  ReportContent,
  ReportDOpinion,
  ReportDTitle,
  ReportHeader,
  ReportImage,
  ReportInfo,
  ReportInfoItem,
  ReportInfoLi,
  ReportInfoList,
  ReportIntro,
  ReportMain,
  ReportMore,
  ReportOverflow,
  ReportOverflowLi,
  ReportOverflowList,
  ReportTitle,
  ReportUser,
  ReportBlank,
  RTable,
  RTableTd,
  RTableTh,
  RTableWrapper,
} from './ProductReport.style';
import { OffScreenSpan } from '../../../Assets/Styles/Basic.style';
import { AlignList } from '../../../Assets/Styles/Layout.style';
import defaultImg from '../../../Assets/Image/default-product-upload.png';

function ProductReport({ prReport }) {
  const { handleClose, isOpen, newProduct } = prReport;

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
    pdWish,
    pdDegree,
    pdStatus,
    pdSizeInfo,
    pdColorInfo,
  } = newProduct;

  const [{ pdSize, pdPriceBySize }] = pdSizeInfo;
  const [{ pdColor, pdPriceByColor }] = pdColorInfo;

  const isBlank = [
    pdCategory,
    pdTitle,
    pdImage,
    pdPrice,
    pdDes,
    pdWish,
    pdDegree,
    pdStatus,
  ].every(Boolean);

  console.log(
    'isBlank',
    pdCategory,
    pdTitle,
    // pdImage,
    pdPrice,
    pdDes,
    pdWish,
    pdDegree,
    pdStatus
  );

  console.log('isBlank', isBlank);

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
              <ReportContent>
                <ReportHeader>
                  {!isBlank && (
                    <ReportAlert>
                      <ReportAlertList>
                        <ReportAlertMessage>
                          * 상품 등록 후, 미리보기가 가능합니다
                        </ReportAlertMessage>
                        <ReportAlertMessage>
                          * 미 등록된 항목은 "공란" 이란 텍스트로 표현됩니다.
                        </ReportAlertMessage>
                      </ReportAlertList>
                    </ReportAlert>
                  )}
                  <ReportIntro>
                    <ReportUser>{nickname}</ReportUser>
                    님이 등록하시는 상품 요약입니다.
                  </ReportIntro>
                </ReportHeader>
                <ReportMain>
                  <ReportImage>
                    <ImageHolder>
                      <Image
                        src={pdImage ? pdImage : defaultImg}
                        alt={`${pdTitle} 이미지`}
                      />
                    </ImageHolder>
                  </ReportImage>
                  <ReportInfo>
                    <ReportInfoList>
                      <ReportInfoLi>
                        <ReportTitle>카테고리</ReportTitle>
                        <ReportDTitle>
                          {!isBlank ? (
                            <ReportBlank>공란</ReportBlank>
                          ) : (
                            pdCategory
                          )}
                        </ReportDTitle>
                      </ReportInfoLi>
                      <ReportInfoLi>
                        <AlignList>
                          <ReportInfoItem>
                            <ReportTitle>상품명</ReportTitle>
                            <ReportDTitle>
                              {!isBlank ? (
                                <ReportBlank>공란</ReportBlank>
                              ) : (
                                pdTitle
                              )}
                            </ReportDTitle>
                          </ReportInfoItem>
                          <ReportInfoItem>
                            <ReportTitle>상품가격</ReportTitle>
                            <ReportDTitle>{`${Number(pdPrice).toLocaleString(
                              'ko-KR'
                            )} 원`}</ReportDTitle>
                          </ReportInfoItem>
                          <ReportInfoItem>
                            <ReportTitle>상품단계</ReportTitle>
                            <ReportDTitle>
                              {!isBlank ? (
                                <ReportBlank>공란</ReportBlank>
                              ) : (
                                pdDegree
                              )}
                            </ReportDTitle>
                          </ReportInfoItem>
                        </AlignList>
                      </ReportInfoLi>
                      <ReportInfoLi>
                        <ReportTitle>상품소개</ReportTitle>
                        <ReportOverflow>
                          <ReportDOpinion>
                            {!isBlank ? <ReportBlank>공란</ReportBlank> : pdDes}
                          </ReportDOpinion>
                        </ReportOverflow>
                      </ReportInfoLi>
                      <ReportInfoLi>
                        <ReportTitle>상품상태 설명</ReportTitle>
                        <ReportOverflow>
                          <ReportOverflowList>
                            {pdStatus.map((status, index) => (
                              <ReportOverflowLi key={index}>
                                <ReportDOpinion>
                                  {!isBlank ? (
                                    <ReportBlank>공란</ReportBlank>
                                  ) : (
                                    status
                                  )}
                                </ReportDOpinion>
                              </ReportOverflowLi>
                            ))}
                          </ReportOverflowList>
                        </ReportOverflow>
                      </ReportInfoLi>
                      <ReportInfoLi>
                        <ReportTitle>희망사항</ReportTitle>
                        <ReportOverflow>
                          <ReportDOpinion>
                            {!isBlank ? (
                              <ReportBlank>공란</ReportBlank>
                            ) : (
                              pdWish
                            )}
                          </ReportDOpinion>
                        </ReportOverflow>
                      </ReportInfoLi>
                    </ReportInfoList>
                  </ReportInfo>
                </ReportMain>
                <ReportMore>
                  {!isBlank ? (
                    <AlignList>
                      <ReportInfoLi>
                        <ReportTitle>사이즈 별 가격</ReportTitle>
                        <ReportBlank>공란</ReportBlank>
                      </ReportInfoLi>
                      <ReportInfoLi>
                        <ReportTitle>색상 별 가격</ReportTitle>
                        <ReportBlank>공란</ReportBlank>
                      </ReportInfoLi>
                    </AlignList>
                  ) : (
                    <AlignList>
                      <ReportInfoLi>
                        {pdSize && pdPriceBySize && (
                          <>
                            <ReportTitle>사이즈 별 가격</ReportTitle>
                            <RTableWrapper>
                              <RTable>
                                <caption>
                                  <OffScreenSpan>
                                    사이즈 별 가격 테이블
                                  </OffScreenSpan>
                                </caption>
                                <colgroup>
                                  <col
                                    style={{
                                      width: '50%',
                                    }}
                                  />
                                  <col style={{ width: '50%' }} />
                                </colgroup>
                                <thead>
                                  <tr>
                                    <RTableTh scope="col">상품 사이즈</RTableTh>
                                    <RTableTh scope="col">가격</RTableTh>
                                  </tr>
                                </thead>
                                <tbody>
                                  {pdSizeInfo.map(
                                    ({ pdSize, pdPriceBySize }, index) => (
                                      <tr key={index}>
                                        <RTableTh scope="row">
                                          {pdSize}
                                        </RTableTh>
                                        <RTableTd>
                                          {`${Number(
                                            pdPriceBySize
                                          ).toLocaleString('ko-KR')} 원`}
                                        </RTableTd>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </RTable>
                            </RTableWrapper>
                          </>
                        )}
                      </ReportInfoLi>
                      <ReportInfoLi>
                        <>
                          {pdColor && pdPriceByColor && (
                            <ReportInfoLi>
                              <ReportTitle>색상 별 가격</ReportTitle>
                              <RTableWrapper>
                                <RTable>
                                  <caption>
                                    <OffScreenSpan>
                                      색상 별 가격 테이블
                                    </OffScreenSpan>
                                  </caption>
                                  <colgroup>
                                    <col
                                      style={{
                                        width: '50%',
                                      }}
                                    />
                                    <col style={{ width: '50%' }} />
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <RTableTh scope="col">상품 색상</RTableTh>
                                      <RTableTh scope="col">가격</RTableTh>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {pdColorInfo.map(
                                      ({ pdColor, pdPriceByColor }, index) => (
                                        <tr key={index}>
                                          <RTableTh scope="row">
                                            {pdColor}
                                          </RTableTh>
                                          <RTableTd>
                                            {`${Number(
                                              pdPriceByColor
                                            ).toLocaleString('ko-KR')} 원`}
                                          </RTableTd>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </RTable>
                              </RTableWrapper>
                            </ReportInfoLi>
                          )}
                        </>
                      </ReportInfoLi>
                    </AlignList>
                  )}
                </ReportMore>
              </ReportContent>
            </ModalForm>
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductReport;
