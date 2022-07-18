import React, { useState, useEffect } from 'react';
import {
  SectionContent,
  SectionLayout,
  SectionTitle,
  SectionUnit,
} from './Manager/Product/ProductUpload.style';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ngetProducts,
  setCurrentPage,
  ProductSelector,
} from '../Store/Features/NProductSlice.js';

import Pagination from '../Components/Pagination';
import CardProduct from '../Components/CardProduct/CardProduct';
import { ProductLayOut } from './SectionProduct.style';
import { NoProduct, NoProductText } from './ProductList.style';
import { Image, ImageHolder } from '../Assets/Styles/Image.style';
import defaultImamge from '../Assets/Image/cat01.jpeg';

function ProductList() {
  const {
    product: { savedProducts, loading, currentPage, numberOfPages },
  } = useSelector(ProductSelector);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchQuery = query.get('searchQuery');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ngetProducts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>신규 상품 둘러보기</SectionTitle>
        <SectionContent>
          {savedProducts.length > 0 ? (
            <ProductLayOut>
              {savedProducts &&
                savedProducts.map((item) => (
                  <CardProduct key={item._id} {...item} />
                ))}
            </ProductLayOut>
          ) : (
            <NoProduct>
              <ImageHolder width="570px">
                <Image src={defaultImamge} alt="기본이미지" />
              </ImageHolder>
              <NoProductText>현재 등록된 상품이 없습니다.</NoProductText>
            </NoProduct>
          )}

          {savedProducts?.length > 0 && !searchQuery && (
            <Pagination
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              dispatch={dispatch}
            />
          )}
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default ProductList;
