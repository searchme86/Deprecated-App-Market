import React from 'react';

import ManageCategory from './Manager/category/ManageCategory';
import SectionProduct from './SectionProduct';
import SectionAd from './SectionAd';
import SectionSlider from './SectionSlider';

function Home() {
  return (
    <>
      <SectionSlider />
      <ManageCategory />
      <SectionProduct />
      <SectionAd />
    </>
  );
}

export default Home;
