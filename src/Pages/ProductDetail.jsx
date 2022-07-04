import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ProductRelated from '../Components/ProductRelated/ProductRelated';
import {
  SectionHeader,
  SectionLayout,
  SectionTitle,
  SectionUnit,
  SectionContent,
} from './Manager/Product/ProductUpload.style';

import {
  ngetRelatedProducts,
  ngetProduct,
  ProductSelector,
} from '../Store/Features/NProductSlice';

import { Image, ImageHolder } from '../Assets/Styles/Image.style';
import {
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

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    product: {
      nproduct,
      nproduct: {
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
      },

      nrelatedProducts,
    },
  } = useSelector(ProductSelector);

  console.log('1');
  console.log('id', id);
  console.log('nproduct', nproduct);
  console.log('***nrelatedProducts', nrelatedProducts);
  console.log('***nrelatedProducts.length', [nrelatedProducts].length);

  console.log('pdStatus', pdStatus);

  let relatedItems = Object.values(nrelatedProducts);
  // console.log('relatedItems', relatedItems);
  // console.log('relatedItems.length', relatedItems.length);

  useEffect(() => {
    if (id) {
      dispatch(ngetProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (!nproduct) return;
    nproduct && dispatch(ngetRelatedProducts({ Brand: pdBrand, Type: pdType }));
  }, [dispatch, nproduct, pdBrand, pdType]);

  return (
    <>
      <SectionUnit>
        <SectionLayout>
          <SectionHeader>
            <SectionTitle>상세 페이지</SectionTitle>
          </SectionHeader>
          <SectionContent>
            <div className="" style={{ display: 'flex' }}>
              {/* 상품이미지 */}
              <div className="" style={{ width: '50%' }}>
                <ImageHolder width="590px">
                  <Image src={pdImage} alt={`${pdTitle} 이미지`} />
                </ImageHolder>
              </div>

              {/* 레이아웃 오른쪽 */}
              <div className="" style={{ width: '50%' }}>
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
                <div className="">
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
                </div>

                {/* 상품상태 */}
                <div className="" style={{ borderBottom: '1px solid red' }}>
                  <ul style={{ display: 'flex' }}>
                    {pdStatus &&
                      pdStatus.map((status, index) => (
                        <li key={index}>
                          <span>{status}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                {/* 상품정보 */}
                <div className="">
                  <p style={{ fontSize: '28px', wordBreak: 'break-all' }}>
                    [ {pdDes} ]
                  </p>
                  <strong
                    style={{
                      display: 'block',
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                  >
                    {pdTitle}
                  </strong>
                  <div className=""></div>
                  <span style={{ fontSize: '22px', display: 'block' }}>
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
                <div className="">
                  <Tabs variant="enclosed">
                    <TabList>
                      <Tab>거래 희망사항</Tab>
                      <Tab>색상 별 가격표</Tab>
                      <Tab>사이즈 별 가격표</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <div className="">
                          <TableContainer>
                            <p>{pdWish}</p>
                          </TableContainer>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="">
                          <TableContainer>
                            <Table variant="simple">
                              <TableCaption>
                                Imperial to metric conversion factors
                              </TableCaption>
                              <Thead>
                                <Tr>
                                  <Th>To convert</Th>
                                  <Th>into</Th>
                                  <Th isNumeric>multiply by</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td>inches</Td>
                                  <Td>millimetres (mm)</Td>
                                  <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                  <Td>feet</Td>
                                  <Td>centimetres (cm)</Td>
                                  <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                  <Td>yards</Td>
                                  <Td>metres (m)</Td>
                                  <Td isNumeric>0.91444</Td>
                                </Tr>
                              </Tbody>
                              <Tfoot>
                                <Tr>
                                  <Th>To convert</Th>
                                  <Th>into</Th>
                                  <Th isNumeric>multiply by</Th>
                                </Tr>
                              </Tfoot>
                            </Table>
                          </TableContainer>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="">
                          <TableContainer>
                            <Table variant="simple">
                              <TableCaption>
                                Imperial to metric conversion factors
                              </TableCaption>
                              <Thead>
                                <Tr>
                                  <Th>To convert</Th>
                                  <Th>into</Th>
                                  <Th isNumeric>multiply by</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td>inches</Td>
                                  <Td>millimetres (mm)</Td>
                                  <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                  <Td>feet</Td>
                                  <Td>centimetres (cm)</Td>
                                  <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                  <Td>yards</Td>
                                  <Td>metres (m)</Td>
                                  <Td isNumeric>0.91444</Td>
                                </Tr>
                              </Tbody>
                              <Tfoot>
                                <Tr>
                                  <Th>To convert</Th>
                                  <Th>into</Th>
                                  <Th isNumeric>multiply by</Th>
                                </Tr>
                              </Tfoot>
                            </Table>
                          </TableContainer>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="">
                          <TableContainer>
                            <Table variant="simple">
                              <TableCaption>
                                Imperial to metric conversion factors
                              </TableCaption>
                              <Thead>
                                <Tr>
                                  <Th>To convert</Th>
                                  <Th>into</Th>
                                  <Th isNumeric>multiply by</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                <Tr>
                                  <Td>inches</Td>
                                  <Td>millimetres (mm)</Td>
                                  <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                  <Td>feet</Td>
                                  <Td>centimetres (cm)</Td>
                                  <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                  <Td>yards</Td>
                                  <Td>metres (m)</Td>
                                  <Td isNumeric>0.91444</Td>
                                </Tr>
                              </Tbody>
                              <Tfoot>
                                <Tr>
                                  <Th>To convert</Th>
                                  <Th>into</Th>
                                  <Th isNumeric>multiply by</Th>
                                </Tr>
                              </Tfoot>
                            </Table>
                          </TableContainer>
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </div>
                <div className="">
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <button>장바구니 담기</button>
              </div>
            </div>
          </SectionContent>
        </SectionLayout>
      </SectionUnit>

      {/* 관련상품 보기 */}
      {relatedItems.length > 0 && (
        <SectionUnit>
          <SectionLayout>
            <SectionHeader>
              <SectionTitle>관련상품 보기</SectionTitle>
            </SectionHeader>
          </SectionLayout>
          <SectionContent>
            <div className="">
              <ul>
                {relatedItems &&
                  relatedItems.map((related, index) => (
                    <ProductRelated key={index} {...related} />
                  ))}
              </ul>
            </div>
          </SectionContent>
        </SectionUnit>
      )}
    </>
  );
}

export default ProductDetail;
