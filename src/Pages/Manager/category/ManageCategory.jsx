import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getCategoryList } from '../../../Store/Features/CategorySlice.js';

function ManageCategory() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    const listOfCategory = () => {
      dispatch(getCategoryList({ toast }));
    };

    listOfCategory();
  }, [dispatch]);

  return (
    <div className="">
      <h1>ManageCategory</h1>
      {console.log('categories', categories)}
    </div>
  );
}

export default ManageCategory;
