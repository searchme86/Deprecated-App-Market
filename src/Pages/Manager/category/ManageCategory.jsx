import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getCategoryList } from '../../../Store/Features/CategorySlice.js';
import CategoryView from './CategoryView';

function ManageCategory() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    const listOfCategory = () => {
      dispatch(getCategoryList({ toast }));
    };

    listOfCategory();
  }, []);

  return <CategoryView categories={categories} />;
}

export default ManageCategory;
