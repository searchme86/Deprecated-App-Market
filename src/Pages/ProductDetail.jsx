import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import ProductRelated from '../Components/ProductRelated/ProductRelated';

import {
  ngetRelatedProducts,
  ngetProduct,
  ProductSelector,
} from '../Store/Features/NProductSlice';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    product: { nproduct, nrelatedProducts },
  } = useSelector(ProductSelector);

  console.log('1');
  console.log('id', id);
  console.log('nproduct', nproduct);
  // console.log('pdBrand', pdBrand);
  // console.log('pdType', pdType);
  console.log('***nrelatedProducts', nrelatedProducts);

  useEffect(() => {
    if (id) {
      dispatch(ngetProduct(id));
    }
  }, [dispatch, id]);

  // useEffect(() => {
  //   if (!nproduct) return;
  //   nproduct && dispatch(ngetRelatedProducts({ Brand: pdBrand, Type: pdType }));
  // }, [dispatch, nproduct, pdBrand, pdType]);

  return (
    <div>
      <h1>상세페이지</h1>
      <ProductRelated />
    </div>
  );
}

export default ProductDetail;
