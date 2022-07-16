import React from 'react';
import { OffScreenTitle } from '../Assets/Styles/Basic.style';
import {
  SectionLayout,
  SectionUnit,
  SectionContent,
} from './Manager/Product/ProductUpload.style';
import Slider from '../Components/Slider/Slider';
import Text from '../Components/Text';

function SectionSlider() {
  return (
    <SectionUnit color="#f2ead7">
      <SectionLayout>
        <OffScreenTitle>메인 슬라이더</OffScreenTitle>
        <SectionContent>
          <div style={{ display: 'flex' }}>
            <Slider autoPlay={2} />
            <Text />
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionSlider;
