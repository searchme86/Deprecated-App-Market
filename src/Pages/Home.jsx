import React from 'react';

import ManageCategory from './Manager/category/ManageCategory';
import SectionProduct from './SectionProduct';
import SectionMain from './SectionMain';
import SectionAd from './SectionAd';
import SectionSlider from './SectionSlider';

function Home() {
  return (
    <>
      <SectionSlider />
      <SectionMain />
      <ManageCategory />
      <SectionProduct />
      <SectionAd />
    </>
  );
}

export default Home;
