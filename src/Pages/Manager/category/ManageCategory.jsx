import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryView from './CategoryView';
import {
  getCategoryList,
  CategorySelector,
} from '../../../Store/Features/CategorySlice';
import { toast } from 'react-toastify';
import { SectionLayout, SectionUnit } from '../Product/ProductUpload.style';
import { OffScreenTitle } from '../../../Assets/Styles/Basic.style';

function ManageCategory() {
  const {
    category: { categories },
  } = useSelector(CategorySelector);
  console.log('현재categories ', categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList({ toast }));
  }, []);

  return (
    <SectionUnit>
      <SectionLayout>
        <OffScreenTitle>카테고리별 상품찾기</OffScreenTitle>
        <CategoryView categories={categories} />
      </SectionLayout>
    </SectionUnit>
  );
}

export default ManageCategory;
