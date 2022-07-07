import React, { useEffect } from 'react';
import {
  SectionContent,
  SectionHeader,
  SectionLayout,
  SectionTitle,
  SectionUnit,
} from './Manager/Product/ProductUpload.style';

import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAllProducts,
  ProductSelector,
} from '../Store/Features/NProductSlice';
import CardProduct from '../Components/CardProduct/CardProduct';

function SectionProduct() {
  const {
    product: { savedProducts },
  } = useSelector(ProductSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  console.log('savedProducts', savedProducts);

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <SectionTitle>신규 등록 상품</SectionTitle>
        </SectionHeader>
        <SectionContent></SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionProduct;
