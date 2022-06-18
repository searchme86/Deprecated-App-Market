import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoryView from './CategoryView';
import { SectionTitle } from '../../../Assets/Styles/Text.style.js';
import { SectionDivier } from '../../../Assets/Styles/Layout.style.js';
import { getCategoryList } from '../../../Store/Features/CategorySlice';
import { toast } from 'react-toastify';

function ManageCategory() {
  const { categories } = useSelector((state) => state.category);
  console.log('현재categories ', categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList({ toast }));
  }, []);

  return (
    <SectionDivier>
      <SectionTitle>카테고리별 상품찾기</SectionTitle>
      <CategoryView categories={categories} />
    </SectionDivier>
  );
}

export default ManageCategory;
