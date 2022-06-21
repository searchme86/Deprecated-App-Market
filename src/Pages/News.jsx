import React from 'react';
import {
  SectionContainer,
  SectionDivier,
  SectionHeader,
} from '../Assets/Styles/Layout.style';
import { SectionTitle } from '../Assets/Styles/Text.style';
import Blog from '../Components/Blog/Blog';

function News() {
  return (
    <SectionDivier>
      <SectionHeader>
        <SectionTitle>News</SectionTitle>
      </SectionHeader>
      <SectionContainer>
        <Blog />
      </SectionContainer>
    </SectionDivier>
  );
}

export default News;
