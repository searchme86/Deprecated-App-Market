import React from 'react';
import { OffScreenTitle } from '../Assets/Styles/Basic.style';
import {
  SectionHeader,
  SectionLayout,
  SectionUnit,
  SectionContent,
} from './Manager/Product/ProductUpload.style';

import {
  MainBlogContent,
  MainBlogCreated,
  MainBlogDes,
  MainBlogHref,
  MainBlogImg,
  MainBlogImgHolder,
  MainBlogTitle,
} from '../Components/Blog/MainBlog.style';

import MainImg from '../Assets/Image/cat01.jpeg';
function SectionMain() {
  return (
    <SectionUnit color="#FBE8A6">
      <SectionLayout>
        <SectionHeader>
          <OffScreenTitle>메인 홈</OffScreenTitle>
        </SectionHeader>
        <SectionContent>
          <MainBlogHref to={'/'}>
            <MainBlogImgHolder>
              <MainBlogImg src={MainImg} />
            </MainBlogImgHolder>
            <MainBlogContent>
              <MainBlogTitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              </MainBlogTitle>
              <MainBlogDes>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                optio, tempora nostrum dolor eveniet ratione deleniti obcaecati
                sunt, soluta, dolores eligendi illum natus eos eaque iusto
                tenetur delectus facere labore?
              </MainBlogDes>
              <MainBlogCreated>June 22, 2022</MainBlogCreated>
            </MainBlogContent>
          </MainBlogHref>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionMain;
