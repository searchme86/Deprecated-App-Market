import React from 'react';
import {
  ModalContent,
  ModalHeader,
  ModalTitle,
} from '../../../Components/Modal/Modal.style';
import ModalFrame from '../../../Components/Modal/ModalFrame';
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
  ReportHashTag,
  ReportUserImage,
} from './ProductReport.style';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import { OffScreenSpan } from '../../../Assets/Styles/Basic.style';
import { AlignList } from '../../../Assets/Styles/Layout.style';
import defaultImg from '../../../Assets/Image/default-product-upload.png';

function ProductReport({ prReport }) {
  const { handleClose, isOpen, newProduct } = prReport;

  const {
    pdUploaderNickname,
    pdUploaderImage,
    pdCategory,
    pdBrand,
    pdType,
    pdTitle,
    pdImage,
    pdPrice,
    pdDes,
    pdWish,
    pdtags,
    pdDegree,
    pdStatus,
    pdSizeInfo,
    pdColorInfo,
    inputAddressValue,
  } = newProduct;

  console.log('pdtags', pdtags);
  console.log('pdStatus', pdStatus);

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
            <ReportContent>
              <ReportHeader>
                <ReportIntro>
                  <ReportUserImage>
                    <ImageHolder br="100%">
                      <Image src={pdUploaderImage} alt={pdUploaderNickname} />
                    </ImageHolder>
                  </ReportUserImage>
                  <ReportUser>{pdUploaderNickname}</ReportUser>
                  님이 등록하시는 상품 요약입니다.
                </ReportIntro>
                {pdCategory && pdBrand && pdType && (
                  <Breadcrumb as="div" mt="15px" mb="10px">
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="#"
                        fontWeight="bold"
                        fontSize="18px"
                      >
                        {pdCategory}
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="#"
                        fontWeight="bold"
                        fontSize="18px"
                      >
                        {pdBrand}
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                      <BreadcrumbLink
                        href="#"
                        fontWeight="bold"
                        fontSize="18px"
                      >
                        {pdType}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                )}
                {/* {isBlank && (
                )} */}
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
                      <AlignList>
                        {/* 상품명 */}
                        <ReportInfoItem>
                          <ReportTitle>상품명</ReportTitle>
                          <ReportDTitle>{pdTitle}</ReportDTitle>
                        </ReportInfoItem>

                        {/* 상품가격 */}
                        <ReportInfoItem>
                          <ReportTitle>상품가격</ReportTitle>
                          <ReportDTitle>{`${Number(pdPrice).toLocaleString(
                            'ko-KR'
                          )} 원`}</ReportDTitle>
                        </ReportInfoItem>

                        {/* 상품단계 */}
                        <ReportInfoItem>
                          <ReportTitle>상품단계</ReportTitle>
                          <ReportDTitle>{pdDegree}</ReportDTitle>
                        </ReportInfoItem>
                      </AlignList>
                    </ReportInfoLi>

                    {/* 상품소개 */}
                    <ReportInfoLi>
                      <ReportTitle>상품소개</ReportTitle>
                      <ReportDOpinion>{pdDes}</ReportDOpinion>
                    </ReportInfoLi>
                  </ReportInfoList>
                </ReportInfo>
              </ReportMain>

              {/* 상품상태 설명 , 희망사항 */}
              <ReportMore>
                <AlignList>
                  {/* 상품거래 희망주소 */}
                  <ReportInfoLi>
                    <ReportTitle>상품거래 희망주소</ReportTitle>
                    <ReportDOpinion>{inputAddressValue}</ReportDOpinion>
                  </ReportInfoLi>
                  {/* 희망사항 */}
                  <ReportInfoLi>
                    <ReportTitle>상품상태 해쉬태그</ReportTitle>
                    <ReportOverflow>
                      <ReportOverflowList>
                        {pdtags.map((tag, index) => (
                          <ReportOverflowLi key={index}>
                            <ReportHashTag>#{tag}</ReportHashTag>
                          </ReportOverflowLi>
                        ))}
                      </ReportOverflowList>
                    </ReportOverflow>
                  </ReportInfoLi>
                </AlignList>
              </ReportMore>

              {/* 상품상태 설명 , 희망사항 */}
              <ReportMore>
                <AlignList>
                  {/* 상품상태 설명 */}
                  <ReportInfoLi>
                    <ReportTitle>상품상태 설명</ReportTitle>
                    <ReportOverflow>
                      <ReportOverflowList>
                        {pdStatus.map((status, index) => (
                          <ReportOverflowLi key={index}>
                            <ReportHashTag>#{status}</ReportHashTag>
                          </ReportOverflowLi>
                        ))}
                      </ReportOverflowList>
                    </ReportOverflow>
                  </ReportInfoLi>
                  {/* 희망사항 */}
                  <ReportInfoLi>
                    <ReportTitle>희망사항</ReportTitle>
                    <ReportOverflow>
                      <ReportDOpinion>{pdWish}</ReportDOpinion>
                    </ReportOverflow>
                  </ReportInfoLi>
                </AlignList>
              </ReportMore>

              {/* 사이즈별 가격, 색상별 가격 */}
              <ReportMore>
                <AlignList>
                  <ReportInfoLi>
                    {pdSizeInfo && (
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
                              {pdSizeInfo &&
                                pdSizeInfo.map(
                                  ({ pdSize, pdPriceBySize }, index) => (
                                    <tr key={index}>
                                      <RTableTh scope="row">{pdSize}</RTableTh>
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
                      {pdColorInfo && (
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
                                {pdColorInfo &&
                                  pdColorInfo.map(
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
              </ReportMore>
            </ReportContent>
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductReport;
