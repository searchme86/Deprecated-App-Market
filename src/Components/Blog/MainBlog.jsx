import React from 'react';
import {
  MainBlogContainer,
  MainBlogContent,
  MainBlogCreated,
  MainBlogDes,
  MainBlogHref,
  MainBlogImg,
  MainBlogImgHolder,
  MainBlogTitle,
  MainBlogWrapper,
} from './MainBlog.style';

import Cat from '../../Assets/Image/cat01.jpeg';

function MainBlog() {
  return (
    <MainBlogWrapper>
      <MainBlogContainer>
        <MainBlogHref to={'/'}>
          <MainBlogImgHolder>
            <MainBlogImg src={Cat} />
          </MainBlogImgHolder>
          <MainBlogContent>
            <MainBlogTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              voluptatibus
            </MainBlogTitle>
            <MainBlogDes>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              optio, tempora nostrum dolor eveniet ratione deleniti obcaecati
              sunt, soluta, dolores eligendi illum natus eos eaque iusto tenetur
              delectus facere labore?
            </MainBlogDes>
            <MainBlogCreated>June 22, 2022</MainBlogCreated>
          </MainBlogContent>
        </MainBlogHref>
      </MainBlogContainer>
    </MainBlogWrapper>
  );
}

export default MainBlog;
