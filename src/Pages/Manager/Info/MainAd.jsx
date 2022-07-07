import React from 'react';
import bg from '../../../Assets/Image/cat01.jpeg';
import {
  AlignComponents,
  SectionHalf,
} from '../../../Assets/Styles/Layout.style';
import { SectionTitle } from '../../../Assets/Styles/Text.style.js';
import { OffScreen, OffScreenTitle } from '../../../Assets/Styles/Basic.style';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';
import {
  MainAdContainer,
  MainAdContent,
  MainAdDes,
  MainAdEditBtn,
  MainAdFunction,
  MainAdHeader,
  MainAdHeaderTitle,
} from './Ad.style';
import { ButtonLink } from '../../../Config/Styles/CommonStyle';

import { useDispatch, useSelector } from 'react-redux';
import { EditButton } from '../../../Config/Styles/Button.style';
import {
  SectionContent,
  SectionHeader,
  SectionLayout,
  SectionUnit,
} from '../Product/ProductUpload.style';

function MainAd() {
  const { user } = useSelector((state) => state.auth);

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionHeader>
          <OffScreenTitle>이번달 메인광고</OffScreenTitle>
        </SectionHeader>
        <SectionContent>
          <AlignComponents>
            <SectionHalf mr="32" padding={'10px'}>
              <ImageHolder width="880px">
                <Image src={bg} alt="고양이" radius="14px" />
              </ImageHolder>
            </SectionHalf>
            <SectionHalf>
              <MainAdContainer>
                <MainAdHeader>
                  <MainAdHeaderTitle>컨텐츠 타이틀</MainAdHeaderTitle>
                </MainAdHeader>
                <MainAdContent>
                  <MainAdDes role="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem qui nam ipsam dolore quam a adipisci eos repellat
                    maiores officia ratione corporis beatae, aliquam amet odit
                    natus cum. Velit, rerum? Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Voluptatem qui nam ipsam
                    dolore quam a adipisci eos repellat maiores officia ratione
                    corporis beatae, aliquam amet odit natus cum. Velit, rerum?
                  </MainAdDes>
                  <ButtonLink to={'/'}>더보기</ButtonLink>
                </MainAdContent>
                {user && (
                  <MainAdFunction>
                    <EditButton>글 수정하기</EditButton>
                  </MainAdFunction>
                )}
              </MainAdContainer>
            </SectionHalf>
          </AlignComponents>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default MainAd;
