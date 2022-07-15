import React from 'react';
import {
  MainBlogContent,
  MainBlogCreated,
  MainBlogDes,
  MainBlogTitle,
} from './Text.style';

function Text() {
  return (
    <MainBlogContent>
      <MainBlogTitle>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
      </MainBlogTitle>
      <MainBlogDes>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nostrum
        laboriosam ducimus quo rem nisi a nemo, dignissimos maxime id vero nobis
        eos, qui necessitatibus excepturi, ad eius. Quam, aut!Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Odio nostrum laboriosam ducimus
        quo rem nisi a nemo, dignissimos maxime id vero nobis eos, qui
        necessitatibus excepturi, ad eius. Quam, aut!
      </MainBlogDes>
      <MainBlogCreated>June 22, 2022</MainBlogCreated>
    </MainBlogContent>
  );
}

export default Text;
