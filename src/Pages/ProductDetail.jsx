import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { OffScreenSpan } from '../Assets/Styles/Basic.style';
import SelectUnit from '../Components/Select/SelectUnit';

function ProductDetail() {
  const {
    product: {
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
        pdWish,
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

  // console.log('nproduct', nproduct);
  // console.log('orderCount', orderCount);
  // console.log('orderTotal', Number(orderCount * pdPrice));

  // console.log('pdColorItems', pdColorItems);
  // console.log('pdSizeItems', pdSizeItems);

  // console.log('색상 데이터를 가공한 데이터', sizeData);
  // console.log('사이즈 데이터를 가동한 데이터', colorData);
  // console.log(
  //   '셀렉트박스에서 선택된, detail 컴포넌트에서 확인되는 color 값',
  //   color
  // );
  // console.log(
  //   '셀렉트박스에서 선택된, detail 컴포넌트에서 확인되는 size 값',
  //   size
  // );

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
              <div className="" style={{ display: 'flex' }}>
                {/* 상품이미지 */}
                <div className="" style={{ width: '50%' }}>
                  <ImageHolder width="590px" br="14px">
                    <Image src={pdImage} alt={`${pdTitle} 이미지`} />
                  </ImageHolder>
                </div>

                {/* 레이아웃 오른쪽 */}
                <div
                  className=""
                  style={{ width: '50%', position: 'relative' }}
                >
                  {/* 유저 설명 */}
                  <div
                    className=""
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <ImageHolder width="64px" br="100%">
                      <Image src={pdUploaderImage} alt={pdUploaderNickname} />
                    </ImageHolder>
                    <div className="">
                      <strong style={{ fontSize: '20px', marginLeft: '12px' }}>
                        {pdUploaderNickname}
                      </strong>
                      <p style={{ fontSize: '20px', marginLeft: '12px' }}>
                        {pdAddress}
                      </p>
                    </div>
                  </div>
                  {/* 범주 */}
                  <Breadcrumb as="div" mt="5px">
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
                  {/* 상품상태 */}
                  <ul style={{ display: 'flex', padding: '5px 0' }}>
                    {pdStatus &&
                      pdStatus.map((status, index) => (
                        <li key={index} style={{ marginRight: '10px' }}>
                          <span>#{status}</span>
                        </li>
                      ))}
                  </ul>
                  {/* 상품정보 */}
                  <div
                    className=""
                    style={{ marginTop: '5px', marginBottom: '5px' }}
                  >
                    <p
                      style={{
                        fontSize: '19px',
                        wordBreak: 'break-all',
                      }}
                    >
                      [ {pdDes} ]
                    </p>
                    <strong
                      style={{
                        display: 'block',
                        marginTop: '10px',
                        marginBottom: '10px',
                        fontSize: '25px',
                      }}
                    >
                      {pdTitle}
                    </strong>
                    <span
                      style={{
                        fontSize: '22px',
                        display: 'block',
                      }}
                    >
                      <strong
                        style={{
                          display: 'inline-block',
                          fontSize: '28px',
                          marginRight: '2px',
                        }}
                      >
                        {Number(pdPrice).toLocaleString('ko-KR')}
                      </strong>
                      원
                    </span>
                  </div>
                  {/* 색상별 사이즈별 셀렉트 박스 */}
                  <div>
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
                  </div>

                  {/* 가격 계산, 클릭버튼 */}
                  <div
                    className=""
                    style={{
                      padding: '20px',
                      boxSizing: 'border-box',
                      borderRadius: '6px',
                      background: '#f8f8f8',
                      marginTop: '20px',
                      marginBottom: '20px',
                    }}
                  >
                    <div className="" style={{ display: 'flex' }}>
                      <div
                        className=""
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          height: '32px',
                          background: '#fff',
                        }}
                      >
                        <button
                          type="button"
                          onClick={increaseNum}
                          style={{
                            width: '37px',
                            height: '30px',
                            background: '#fff',
                            cursor: 'pointer',
                          }}
                        >
                          <OffScreenSpan>수량 증가 버튼</OffScreenSpan>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <div
                          className=""
                          style={{
                            width: '62px',
                            fontSize: '13px',
                            borderLeft: '1px solid #333',
                            borderRight: '1px solid #333',
                            textAlign: 'center',
                            lineHeight: '30px',
                          }}
                        >
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
                        </div>
                        <button
                          type="button"
                          style={{
                            width: '37px',
                            height: '30px',
                            background: '#fff',
                            cursor: 'pointer',
                          }}
                          onClick={orderCount > 1 ? decreaseNum : ''}
                        >
                          <OffScreenSpan>수량 감소 버튼</OffScreenSpan>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>

                      <span style={{ marginLeft: 'auto', fontSize: '15px' }}>
                        <strong
                          style={{
                            fontSize: '22px',
                            fontWeight: '700',
                            lineHeight: '22px',
                            letterSpacing: '0px',
                            wordBreak: 'keep-all',
                            wordWrap: 'nowrap',
                          }}
                        >
                          {!orderTotal
                            ? Number(pdPrice).toLocaleString('ko-KR')
                            : Number(orderCount * pdPrice).toLocaleString(
                                'ko-KR'
                              )}
                        </strong>{' '}
                        원
                      </span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '130px',
                      height: '54px',
                      lineHeight: '51px',
                      border: '1px solid #ff3c50',
                      fontSize: '16px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      background: '#ff3c50',
                      color: '#fff',
                    }}
                  >
                    장바구니 담기
                  </button>
                  <Link
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
                        fontSize: 50,
                        color: '#000',
                      }}
                    />
                  </Link>
                </div>
              </div>
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
              <div className="">
                <ul
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    marginTop: '10px',
                  }}
                >
                  {relatedItems &&
                    relatedItems.map((related, index) => (
                      <ProductRelated key={index} {...related} />
                    ))}
                </ul>
              </div>
            </SectionContent>
          </SectionLayout>
        </SectionUnit>
      )}
    </>
  );
}

export default ProductDetail;
