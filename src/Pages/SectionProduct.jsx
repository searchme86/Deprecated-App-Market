import React, { useEffect } from 'react';
import {
  SectionContent,
  SectionHeader,
  SectionLayout,
  SectionUnit,
} from './Manager/Product/ProductUpload.style';

import { useDispatch, useSelector } from 'react-redux';

import {
  fetchAllProducts,
  ProductSelector,
} from '../Store/Features/NProductSlice';
import CardProduct from '../Components/CardProduct/CardProduct';
import { OffScreenTitle } from '../Assets/Styles/Basic.style';
import { Skeleton } from '@chakra-ui/react';

// const shuffle = (arr) => {
//   if (!arr && !arr.length > 0) return;
//   let currentIndex = arr.length;
//   while (0 !== currentIndex) {
//     let randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     let temporary = arr[currentIndex];
//     arr[currentIndex] = arr[randomIndex];
//     arr[randomIndex] = temporary;
//   }
//   return arr.splice(0, 8);
// };

function SectionProduct() {
  const {
    product: { savedProducts },
  } = useSelector(ProductSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts({}));
  }, []);

  // let shuffledItems = savedProducts && shuffle(Object.values(savedProducts));

  return (
    <SectionUnit color="#f2ead7">
      <SectionLayout>
        <SectionHeader>
          <OffScreenTitle>신규 등록 상품</OffScreenTitle>
        </SectionHeader>
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
              {/* {shuffledItems
                ? shuffledItems.map((item) => (
                    <CardProduct key={item._id} {...item} />
                  ))
                : savedProducts.map((item) => (
                    <CardProduct key={item._id} {...item} />
                  ))} */}
              {savedProducts.map((item) => (
                <CardProduct key={item._id} {...item} />
              ))}
            </ul>
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionProduct;
