import React from 'react';
import {
  SectionContent,
  SectionHeader,
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
          <SectionHeader>
            <OffScreenTitle>섹션 제목</OffScreenTitle>
          </SectionHeader>
          <SectionContent>
            <ProTypeA />
          </SectionContent>
        </SectionLayout>
      </SectionUnit>

      <SectionUnit color="#f2ead7">
        <SectionLayout>
          <SectionHeader>
            <OffScreenTitle>섹션 제목</OffScreenTitle>
          </SectionHeader>
          <SectionContent>
            <ProTypeB />
          </SectionContent>
        </SectionLayout>
      </SectionUnit>
    </>
  );
}

export default SectionAd;
