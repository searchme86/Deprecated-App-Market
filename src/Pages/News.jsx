import React from 'react';
import {
  SectionContainer,
  SectionDivier,
  SectionHeader,
} from '../Assets/Styles/Layout.style';
import { SectionTitle } from '../Assets/Styles/Text.style';
import MainBlog from '../Components/Blog/MainBlog';
import Pamphlet from '../Components/Blog/Pamphlet';

function News() {
  return (
    <SectionDivier>
      <SectionHeader>
        <SectionTitle>News</SectionTitle>
      </SectionHeader>
      <SectionContainer>
        <MainBlog />
        <Pamphlet />
      </SectionContainer>
    </SectionDivier>
  );
}

export default News;
