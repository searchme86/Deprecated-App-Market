import React from 'react';
import {
  SectionContent,
  SectionLayout,
  SectionUnit,
} from './Manager/Product/ProductUpload.style';

import ProTypeA from '../Components/Promotion/ProTypeA';
import ProTypeB from '../Components/Promotion/ProTypeB';
import Text from '../Components/Text';

import { OffScreenTitle } from '../Assets/Styles/Basic.style';

function SectionAd() {
  return (
    <>
      <SectionUnit>
        <SectionLayout>
          <OffScreenTitle>상품 홍보</OffScreenTitle>
          <SectionContent>
            <ProTypeA />
          </SectionContent>
        </SectionLayout>
      </SectionUnit>

      <SectionUnit color="#f2ead7">
        <SectionLayout>
          <OffScreenTitle>상품 홍보</OffScreenTitle>
          <SectionContent>
            <ProTypeB />
          </SectionContent>
        </SectionLayout>
      </SectionUnit>
    </>
  );
}

export default SectionAd;
