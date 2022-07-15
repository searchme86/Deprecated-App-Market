import React from 'react';
import {
  PamphletList,
  PamphletItem,
  PamphletInfoHref,
  PamphletImageHolder,
  PamphletImage,
  PamphletTag,
  PamphletInfo,
  PamphletContent,
  PamphletTitle,
  PamphletDes,
  PamphletCreatedAt,
} from './Promotion.style';

import defaultImg from '../../Assets/Image/cat01.jpeg';
import Text from '../Text';

function ProTypeA() {
  return (
    <PamphletList>
      <PamphletItem>
        <PamphletInfoHref to={'/'}>
          <PamphletInfo>
            <PamphletImageHolder>
              <PamphletImage src={defaultImg} alt="고양이" />
            </PamphletImageHolder>
            <PamphletTag>Hot ISSUE</PamphletTag>
          </PamphletInfo>
        </PamphletInfoHref>
        <PamphletContent>
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
        </PamphletContent>
      </PamphletItem>
      <PamphletItem>
        <Text />
      </PamphletItem>
    </PamphletList>
  );
}

export default ProTypeA;
