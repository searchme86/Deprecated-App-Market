import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductRelated from '../Components/ProductRelated/ProductRelated';
import {
  SectionLayout,
  SectionTitle,
  SectionUnit,
  SectionContent,
  PForm,
  SectionTitleDes,
} from './Manager/Product/ProductUpload.style';

import {
  ngetRelatedProducts,
  ngetProduct,
  ProductSelector,
} from '../Store/Features/NProductSlice';

import { Image, ImageHolder } from '../Assets/Styles/Image.style';
import {
  Input,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Skeleton,
  SkeletonCircle,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import SelectUnit from '../Components/Select/SelectUnit';
import {
  PdetailImage,
  PdetailContainer,
  PdetailInfo,
  PdetailUser,
  PdetailUserSection,
  PdetailUserNicName,
  PdetailUserAddress,
  PdetailTags,
  PdetailTagItems,
  PdetailTag,
  PdetailItemDes,
  PdetailItemTitle,
  PdetailItemPrice,
  PdetailItemPriceBold,
  PdetailInfoElse,
  PdCalcButton,
  PdCalcButtonContent,
  PdCalcButtonLayout,
  PdCalcLeftButton,
  PdCalcCount,
  PdCalcRightButton,
  PdCalcPrice,
  PdCalcPriceBold,
  PdCart,
  PdEdit,
  RelatedSection,
} from './ProductDetail.style';
import { OffScreenSpan } from '../Assets/Styles/Basic.style';

function ProductDetail() {
  const {
    product: {
      loading,
      nproduct,
      nproduct: {
        _id,
        pdUploaderImage,
        pdUploaderNickname,
        pdAddress,
        pdCategory,
        pdTitle,
        pdBrand,
        pdType,
        pdPrice,
        pdImage,
        pdStatus,
        pdDes,
        pdColorInfo,
        pdSizeInfo,
      },

      nrelatedProducts,
    },
  } = useSelector(ProductSelector);

  const { id } = useParams();
  const dispatch = useDispatch();

  const [orderCount, setOrderCount] = useState(1);
  const [orderTotal, setOrderTotal] = useState(0);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(ngetProduct(id));
    }

    if (!nproduct) {
      dispatch(ngetProduct(id));
    }
  }, []);

  useEffect(() => {
    if (!nproduct) return;
    nproduct && dispatch(ngetRelatedProducts({ Brand: pdBrand, Type: pdType }));
  }, [dispatch, nproduct, pdBrand, pdType]);

  const convertArray = (data) => {
    if (!data) return;
    let newArray = Object.values(data) || [];
    let result = data && newArray;
    return result;
  };

  const filterObject = (data) => {
    if (!data) return;
    for (let element in data) {
      if (data[element].hasOwnProperty('pdColor')) {
        let colorData = data.map((item) => {
          const { pdColor, pdPriceByColor } = item;
          let data = {
            cntShow: pdColor,
            cntValue: pdPriceByColor,
          };
          return data;
        });
        let dataNeeded = convertArray(colorData);
        return dataNeeded;
      } else if (data[element].hasOwnProperty('pdSize')) {
        let sizeData = data.map((item) => {
          const { pdSize, pdPriceBySize } = item;
          let data = {
            cntShow: pdSize,
            cntValue: pdPriceBySize,
          };
          return data;
        });
        let dataNeeded = convertArray(sizeData);
        return dataNeeded;
      }
    }
  };

  const increaseNum = (e) => {
    e.preventDefault();
    setOrderCount((value) => value + 1);
    setOrderTotal(orderCount * pdPrice);
  };

  const decreaseNum = (e) => {
    e.preventDefault();
    if (orderCount <= 0) return;
    setOrderCount((value) => value - 1);
    setOrderTotal(orderCount * pdPrice);
  };

  let relatedItems = nrelatedProducts && Object.values(nrelatedProducts);

  let pdColorItems = pdColorInfo && Object.values(pdColorInfo);
  let pdSizeItems = pdSizeInfo && Object.values(pdSizeInfo);

  // 셀렉트 컴포넌트에 전달하기 위해 정리된 데이터
  let colorData = pdColorInfo && filterObject(pdColorInfo);
  let sizeData = pdSizeInfo && filterObject(pdSizeInfo);

  return (
    <>
      <SectionUnit>
        <SectionLayout>
          <SectionTitle>상세 페이지</SectionTitle>
          <SectionTitleDes>
            상품의 상세정보를 확인할 수 있습니다.
          </SectionTitleDes>
          <SectionContent>
            <PForm>
              <PdetailContainer>
                {!loading ? (
                  <>
                    <PdetailImage>
                      <ImageHolder width="590px" br="14px">
                        <Image src={pdImage} alt={`${pdTitle} 이미지`} />
                      </ImageHolder>
                    </PdetailImage>

                    <PdetailInfo>
                      <PdetailUser>
                        <ImageHolder width="64px" br="100%">
                          <Image
                            src={pdUploaderImage}
                            alt={pdUploaderNickname}
                          />
                        </ImageHolder>
                        <PdetailUserSection>
                          <PdetailUserNicName>
                            {pdUploaderNickname}
                          </PdetailUserNicName>
                          <PdetailUserAddress>{pdAddress}</PdetailUserAddress>
                        </PdetailUserSection>
                      </PdetailUser>

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

                      <PdetailTags>
                        {pdStatus &&
                          pdStatus.map((status, index) => (
                            <PdetailTagItems key={index}>
                              <PdetailTag>#{status}</PdetailTag>
                            </PdetailTagItems>
                          ))}
                      </PdetailTags>
                      <PdetailItemDes>[ {pdDes} ]</PdetailItemDes>
                      <PdetailItemTitle>{pdTitle}</PdetailItemTitle>
                      <PdetailItemPrice>
                        <PdetailItemPriceBold>
                          {Number(pdPrice).toLocaleString('ko-KR')}
                        </PdetailItemPriceBold>
                        원
                      </PdetailItemPrice>
                      <PdetailInfoElse>
                        {pdSizeItems ? (
                          pdSizeItems.length > 0 ? (
                            <SelectUnit data={sizeData} handler={setSize} />
                          ) : (
                            ' '
                          )
                        ) : (
                          ''
                        )}

                        {pdColorItems ? (
                          pdColorItems.length > 0 ? (
                            <SelectUnit data={colorData} handler={setColor} />
                          ) : (
                            ''
                          )
                        ) : (
                          ''
                        )}
                      </PdetailInfoElse>

                      <PdCalcButton>
                        <PdCalcButtonContent>
                          <PdCalcButtonLayout>
                            <PdCalcLeftButton
                              type="button"
                              onClick={increaseNum}
                            >
                              <OffScreenSpan>수량 증가 버튼</OffScreenSpan>
                              <FontAwesomeIcon icon={faPlus} />
                            </PdCalcLeftButton>
                            <PdCalcCount>
                              <Input
                                type="number"
                                display="block"
                                width="100%"
                                height="100%"
                                value={orderCount}
                                borderRadius="0"
                                border="0px"
                                textAlign="center"
                                disabled
                              />
                            </PdCalcCount>
                            <PdCalcRightButton
                              type="button"
                              onClick={orderCount > 1 ? decreaseNum : ''}
                            >
                              <OffScreenSpan>수량 감소 버튼</OffScreenSpan>
                              <FontAwesomeIcon icon={faMinus} />
                            </PdCalcRightButton>
                          </PdCalcButtonLayout>

                          <PdCalcPrice>
                            <PdCalcPriceBold>
                              {!orderTotal
                                ? Number(pdPrice).toLocaleString('ko-KR')
                                : Number(pdPrice * orderCount).toLocaleString(
                                    'ko-KR'
                                  )}
                            </PdCalcPriceBold>{' '}
                            원
                          </PdCalcPrice>
                        </PdCalcButtonContent>
                      </PdCalcButton>

                      <PdCart type="button">장바구니 담기</PdCart>
                      <PdEdit
                        to={`/edit/${_id}`}
                        role="button"
                        style={{
                          position: 'absolute',
                          right: '0px',
                          bottom: '0px',
                        }}
                      >
                        <OffScreenSpan>상품 업데이트 버튼</OffScreenSpan>
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          style={{
                            fontSize: '40px',
                            color: '#62a3d2',
                          }}
                        />
                      </PdEdit>
                    </PdetailInfo>
                  </>
                ) : (
                  <>
                    <PdetailImage>
                      <Skeleton width="100%" height="100%" />
                    </PdetailImage>
                    <PdetailInfo>
                      <PdetailUser>
                        <ImageHolder width="64px" br="100%">
                          <SkeletonCircle width="100%" height="100%" />
                        </ImageHolder>
                        <PdetailUserSection>
                          <Skeleton
                            marginTop="5px"
                            marginBottom="5px"
                            height="30px"
                          />
                          <Skeleton marginBottom="5px" height="30px" />
                        </PdetailUserSection>
                        <Skeleton marginBottom="5px" height="27px" />
                        <Skeleton marginBottom="5px" height="34px" />
                        <Skeleton marginBottom="5px" height="29px" />
                        <Skeleton marginBottom="5px" height="37px" />
                        <Skeleton marginBottom="5px" height="47px" />
                        <Skeleton marginBottom="5px" height="115px" />
                        <Skeleton marginBottom="5px" height="72px" />
                        <Skeleton marginBottom="5px" height="54px" />
                      </PdetailUser>
                    </PdetailInfo>
                  </>
                )}
              </PdetailContainer>
            </PForm>
          </SectionContent>
        </SectionLayout>
      </SectionUnit>

      {/* 관련상품 보기 */}
      {relatedItems.length > 0 && (
        <SectionUnit>
          <SectionLayout>
            <SectionTitle>관련상품 보기</SectionTitle>
            <SectionTitleDes>
              등록한 상품과 연관상품을 확인할 수 있습니다.
            </SectionTitleDes>
            <SectionContent>
              <RelatedSection>
                {relatedItems &&
                  relatedItems.map((related, index) => (
                    <ProductRelated key={index} {...related} />
                  ))}
              </RelatedSection>
            </SectionContent>
          </SectionLayout>
        </SectionUnit>
      )}
    </>
  );
}

export default ProductDetail;
