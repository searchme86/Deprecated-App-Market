import React from 'react';

import {
  PamphletList,
  PamphletItem,
  PamphletImageHolder,
  PamphletImage,
  PamphletTag,
  PamphletTitle,
  PamphletDes,
  PamphletCreatedAt,
  TypeBPamphlet,
  TypeBPamphletInfo,
  TypeBPamphletContent,
} from './Promotion.style';

import defaultImg from '../../Assets/Image/cat01.jpeg';
import Text from '../Text';

function ProTypeB() {
  return (
    <PamphletList>
      <PamphletItem>
        <Text />
      </PamphletItem>
      <PamphletItem>
        <TypeBPamphlet to={'/'}>
          <TypeBPamphletInfo>
            <PamphletImageHolder>
              <PamphletImage src={defaultImg} alt="고양이" />
            </PamphletImageHolder>
            <PamphletTag>Press Release</PamphletTag>
          </TypeBPamphletInfo>
        </TypeBPamphlet>
        <TypeBPamphletContent>
          <PamphletTitle>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </PamphletTitle>
          <PamphletDes>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos maxime
            id vero nobis eos, qui necessitatibus excepturi, ad eius. Quam,
            aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos maxime
            id vero nobis eos, qui necessitatibus excepturi, ad eius. Quam,
            aut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos maxime
            id vero nobis eos, qui necessitatibus excepturi, ad eius. Quam, aut!
          </PamphletDes>
          <PamphletCreatedAt>June 22, 2022</PamphletCreatedAt>
        </TypeBPamphletContent>
      </PamphletItem>
    </PamphletList>
  );
}

export default ProTypeB;
