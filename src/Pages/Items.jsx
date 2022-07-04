import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  SectionContent,
  SectionHeader,
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
} from '../Store/Features/NProductSlice.js';

import Pagination from '../Components/Pagination';
import CardProduct from '../Components/CardProduct/CardProduct';
import Test from '../Components/PostCode/Test';

function Items() {
  const [change, setChange] = useState('');

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchQuery = query.get('searchQuery');

  const dispatch = useDispatch();
  const { nproducts, loading, currentPage, numberOfPages } = useSelector(
    (state) => ({
      ...state.nproduct,
    })
  );

  console.log('currentPage', currentPage);

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

  console.log('n', nproducts);
  // console.log('user', user);

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <SectionTitle>신규 상품 둘러보기</SectionTitle>
        </SectionHeader>
        <SectionContent>
          <div className="" style={{ padding: '0 30px' }}>
            <form onSubmit={handleSubmit()}>
              <FormLabel htmlFor="category" fontWeight="bold">
                상품 카테고리
              </FormLabel>
              <Select
                id="category"
                name="category"
                placeholder="상품의 카테고리를 입력해주세요"
                {...register('category', {
                  required: '상품의 카테고리를 선택해 주세요',
                  onChange: changeCategory,
                })}
              >
                <option value="1">1</option>
              </Select>
            </form>
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

export default Items;
