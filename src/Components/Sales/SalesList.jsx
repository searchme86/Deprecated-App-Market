import React from 'react';
import {
  SectionContainer,
  SectionDivier,
} from '../../Assets/Styles/Layout.style';
import { SectionTitle } from '../../Assets/Styles/Text.style';
import { OffScreen } from '../../Assets/Styles/Basic.style';
import HotItem from './HotItem';
import { HotItemList } from './HotItem.style';

import { categories } from '../../Config/Data.js';

function SalesList() {
  return (
    <SectionDivier>
      <SectionTitle>
        <OffScreen>이번달 세일상품</OffScreen>
      </SectionTitle>
      <SectionContainer>
        <HotItemList>
          {categories.map((item) => (
            <HotItem key={item.id} item={item} />
          ))}
        </HotItemList>
      </SectionContainer>
    </SectionDivier>
  );
}

export default SalesList;
