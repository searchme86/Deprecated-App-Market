import React from 'react';
import { useSelector } from 'react-redux';
import CategoryView from './CategoryView';
import { SectionTitle } from '../../../Assets/Styles/Text.style.js';
import { SectionDivier } from '../../../Assets/Styles/Layout.style.js';

function ManageCategory() {
  const { categories } = useSelector((state) => state.category);
  return (
    <SectionDivier>
      <SectionTitle>카테고리별 상품찾기</SectionTitle>
      <CategoryView categories={categories} />
    </SectionDivier>
  );
}

export default ManageCategory;
