import React, { useEffect } from 'react';
import {
  SectionContent,
  SectionLayout,
  SectionUnit,
} from './Manager/Product/ProductUpload.style';

import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAllProducts,
  ProductSelector,
} from '../Store/Features/NProductSlice';
import CardProduct from '../Components/CardProduct/CardProduct';
import { OffScreenTitle } from '../Assets/Styles/Basic.style';
import { Skeleton } from '@chakra-ui/react';
import { ProductLayOut, ProductMore } from './SectionProduct.style';
import { SProductItem, SProductList } from '../Config/Styles/Skeleton.style';
import {
  PCardCategory,
  PCardItem,
  PCardPrice,
  PCardTitle,
  PCardUser,
  PUserAddress,
  PUserImage,
  PUserInfo,
  PUserNickname,
} from '../Components/CardProduct/CardProduct.style';
import { Image, ImageHolder } from '../Assets/Styles/Image.style';

import defaultImage from '../Assets/Image/cat01.jpeg';
import { RelatedInfo } from '../Components/ProductRelated/ProductRelated.style';

const shuffle = (arr) => {
  if (!arr && !arr.length > 0) return;
  // let currentIndex = arr.length;
  // while (0 !== currentIndex) {
  //   let randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex -= 1;
  //   let temporary = arr[currentIndex];
  //   arr[currentIndex] = arr[randomIndex];
  //   arr[randomIndex] = temporary;
  // }
  return arr.splice(0, 8);
};

function SectionProduct() {
  const {
    product: { savedProducts, loading },
  } = useSelector(ProductSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts({}));
  }, []);

  let shuffledItems = savedProducts && shuffle(Object.values(savedProducts));

  return (
    <SectionUnit color="#f2ead7">
      <SectionLayout>
        <OffScreenTitle>신규 등록 상품</OffScreenTitle>
        <SectionContent>
          {!loading ? (
            shuffledItems.length > 0 ? (
              <>
                <ProductLayOut>
                  {shuffledItems
                    ? shuffledItems.map((item) => (
                        <CardProduct key={item._id} {...item} />
                      ))
                    : savedProducts.map((item) => (
                        <CardProduct key={item._id} {...item} />
                      ))}
                </ProductLayOut>
                {shuffledItems.length > 0 && (
                  <ProductMore to={'/productList'}>더보기</ProductMore>
                )}
              </>
            ) : (
              <ProductLayOut>
                <PCardItem style={{ height: '400px', background: '#62a3d2' }}>
                  <ImageHolder>
                    <Image src={defaultImage} alt="기본 이미지" />
                  </ImageHolder>
                  <RelatedInfo>
                    <PCardCategory>카테고리</PCardCategory>
                    <PCardPrice>상품 가격</PCardPrice>
                    <PCardTitle>상품 타이틀</PCardTitle>
                    <PCardUser>
                      <PUserImage>
                        <ImageHolder br="100%">
                          <Image src={defaultImage} />
                        </ImageHolder>
                      </PUserImage>
                      <PUserInfo>
                        <PUserNickname>유저 닉네임</PUserNickname>
                        <PUserAddress>상품거래희망주소</PUserAddress>
                      </PUserInfo>
                    </PCardUser>
                  </RelatedInfo>
                </PCardItem>
                <PCardItem style={{ height: '400px', background: '#62a3d2' }}>
                  <ImageHolder>
                    <Image src={defaultImage} alt="기본 이미지" />
                  </ImageHolder>
                  <RelatedInfo>
                    <PCardCategory>카테고리</PCardCategory>
                    <PCardPrice>상품 가격</PCardPrice>
                    <PCardTitle>상품 타이틀</PCardTitle>
                    <PCardUser>
                      <PUserImage>
                        <ImageHolder br="100%">
                          <Image src={defaultImage} />
                        </ImageHolder>
                      </PUserImage>
                      <PUserInfo>
                        <PUserNickname>유저 닉네임</PUserNickname>
                        <PUserAddress>상품거래희망주소</PUserAddress>
                      </PUserInfo>
                    </PCardUser>
                  </RelatedInfo>
                </PCardItem>
                <PCardItem style={{ height: '400px', background: '#62a3d2' }}>
                  <ImageHolder>
                    <Image src={defaultImage} alt="기본 이미지" />
                  </ImageHolder>
                  <RelatedInfo>
                    <PCardCategory>카테고리</PCardCategory>
                    <PCardPrice>상품 가격</PCardPrice>
                    <PCardTitle>상품 타이틀</PCardTitle>
                    <PCardUser>
                      <PUserImage>
                        <ImageHolder br="100%">
                          <Image src={defaultImage} />
                        </ImageHolder>
                      </PUserImage>
                      <PUserInfo>
                        <PUserNickname>유저 닉네임</PUserNickname>
                        <PUserAddress>상품거래희망주소</PUserAddress>
                      </PUserInfo>
                    </PCardUser>
                  </RelatedInfo>
                </PCardItem>
                <PCardItem style={{ height: '400px', background: '#62a3d2' }}>
                  <ImageHolder>
                    <Image src={defaultImage} alt="기본 이미지" />
                  </ImageHolder>
                  <RelatedInfo>
                    <PCardCategory>카테고리</PCardCategory>
                    <PCardPrice>상품 가격</PCardPrice>
                    <PCardTitle>상품 타이틀</PCardTitle>
                    <PCardUser>
                      <PUserImage>
                        <ImageHolder br="100%">
                          <Image src={defaultImage} />
                        </ImageHolder>
                      </PUserImage>
                      <PUserInfo>
                        <PUserNickname>유저 닉네임</PUserNickname>
                        <PUserAddress>상품거래희망주소</PUserAddress>
                      </PUserInfo>
                    </PCardUser>
                  </RelatedInfo>
                </PCardItem>
              </ProductLayOut>
            )
          ) : (
            <div>스켈레톤</div>
          )}
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionProduct;
