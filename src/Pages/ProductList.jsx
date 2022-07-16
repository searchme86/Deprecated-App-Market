import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  SectionContent,
  SectionLayout,
  SectionTitle,
  SectionUnit,
} from './Manager/Product/ProductUpload.style';

import { Select, FormLabel } from '@chakra-ui/react';

import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ngetProducts,
  setCurrentPage,
  ProductSelector,
} from '../Store/Features/NProductSlice.js';

import Pagination from '../Components/Pagination';
import CardProduct from '../Components/CardProduct/CardProduct';

function ProductList() {
  const [change, setChange] = useState('');
  const {
    product: { nproducts, loading, currentPage, numberOfPages },
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

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const changeCategory = (e) => {
    setChange(e.target.value);
  };

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>신규 상품 둘러보기</SectionTitle>
        <SectionContent>
          <div className="">
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                marginTop: '10px',
              }}
            >
              {nproducts &&
                nproducts.map((item) => (
                  <CardProduct key={item._id} {...item} />
                ))}
            </ul>
          </div>
          <div className="">
            {nproducts?.length > 0 && !searchQuery && (
              <Pagination
                setCurrentPage={setCurrentPage}
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                dispatch={dispatch}
              />
            )}
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default ProductList;
