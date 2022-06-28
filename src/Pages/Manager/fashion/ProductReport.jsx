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
import {
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
  RTable,
  RTableTd,
  RTableTh,
  RTableWrapper,
} from './ProductReport.style';
import { OffScreenSpan } from '../../../Assets/Styles/Basic.style';
import { AlignList } from '../../../Assets/Styles/Layout.style';

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
    pdWish,
    prdDegree,
    pdStatus,
    pdSizeInfo,
    pdColorInfo,
  } = upload;

  const [{ pdSize, pdPriceBySize }] = pdSizeInfo;
  const [{ pdColor, pdPriceByColor }] = pdColorInfo;

  console.log(
    'pdSizeInfo',
    // pdCategory,
    // pdTitle,
    // pdImage,
    // pdPrice,
    // pdDes,
    // pdStatus,
    pdSizeInfo
    // pdSize,
    // pdPriceBySize
    // pdColorInfo
  );

  console.log('pdSize', pdSize);
  console.log('pdPriceBySize', pdPriceBySize);

  const insertCommas = (n) => {
    let s1 = n.toString();
    let d = s1.indexOf('.');
    let s2 = d === -1 ? s1 : s1.slice(0, d);

    for (let i = s2.length - 3; i > 0; i -= 3)
      s2 = s2.slice(0, i) + ',' + s2.slice(i);

    if (d !== -1) s2 += s1.slice(d);

    return `${s2}원`;
  };

  let itemPrice = insertCommas(pdPrice);
  console.log('price', itemPrice);

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
                <ReportContent>
                  <ReportHeader>
                    <ReportIntro>
                      <ReportUser>{nickname}</ReportUser>
                      님이 등록하시는 상품 요약입니다.
                    </ReportIntro>
                  </ReportHeader>
                  <ReportMain>
                    <ReportImage>
                      <ImageHolder>
                        <Image src={pdImage} alt={`${pdTitle} 이미지`} />
                      </ImageHolder>
                    </ReportImage>
                    <ReportInfo>
                      <ReportInfoList>
                        <ReportInfoLi>
                          <ReportTitle>카테고리</ReportTitle>
                          <ReportDTitle>{pdCategory}</ReportDTitle>
                        </ReportInfoLi>
                        <ReportInfoLi>
                          <AlignList>
                            <ReportInfoItem>
                              <ReportTitle>상품명</ReportTitle>
                              <ReportDTitle>{pdTitle}</ReportDTitle>
                            </ReportInfoItem>
                            <ReportInfoItem>
                              <ReportTitle>상품가격</ReportTitle>
                              <ReportDTitle>{itemPrice}원</ReportDTitle>
                            </ReportInfoItem>
                            <ReportInfoItem>
                              <ReportTitle>상품단계</ReportTitle>
                              <ReportDTitle>{prdDegree}</ReportDTitle>
                            </ReportInfoItem>
                          </AlignList>
                        </ReportInfoLi>
                        <ReportInfoLi>
                          <ReportTitle>상품소개</ReportTitle>
                          <ReportOverflow>
                            <ReportDOpinion>{pdDes}</ReportDOpinion>
                          </ReportOverflow>
                        </ReportInfoLi>
                        <ReportInfoLi>
                          <ReportTitle>상품상태 설명</ReportTitle>
                          <ReportOverflow>
                            <ReportOverflowList>
                              {pdStatus.map((status, index) => (
                                <ReportOverflowLi key={index}>
                                  <ReportDOpinion>
                                    {' '}
                                    &lowast; {status}
                                  </ReportDOpinion>
                                </ReportOverflowLi>
                              ))}
                            </ReportOverflowList>
                          </ReportOverflow>
                        </ReportInfoLi>
                        <ReportInfoLi>
                          <ReportTitle>희망사항</ReportTitle>
                          <ReportOverflow>
                            <ReportDOpinion>{pdWish}</ReportDOpinion>
                          </ReportOverflow>
                        </ReportInfoLi>
                      </ReportInfoList>
                    </ReportInfo>
                  </ReportMain>
                  <ReportMore>
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
                                        <RTableTd>{pdPriceBySize}</RTableTd>
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
                                          <RTableTd>{pdPriceByColor}</RTableTd>
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
              </FormControl>
            </ModalForm>
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductReport;
