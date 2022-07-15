import React from 'react';
import {
  SectionContent,
  SectionHeader,
  SectionLayout,
  SectionTitle,
  SectionUnit,
} from './Manager/Product/ProductUpload.style';

import {
  PamphletContainer,
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
  TypeBPamphlet,
  TypeBPamphletInfo,
  TypeBPamphletContent,
} from '../Components/Blog/Pamphlet.style';

import defaultImg from '../Assets/Image/cat01.jpeg';

import { OffScreenTitle } from '../Assets/Styles/Basic.style';

function SectionAd() {
  return (
    <>
      <SectionUnit color="#f2ead7">
        <SectionLayout>
          <SectionHeader>
            <OffScreenTitle>섹션 제목</OffScreenTitle>
          </SectionHeader>
          <SectionContent>
            <PamphletList>
              <PamphletItem>
                <PamphletInfoHref to={'/'}>
                  <PamphletInfo>
                    <PamphletImageHolder>
                      <PamphletImage src={defaultImg} alt="고양이" />
                    </PamphletImageHolder>
                    <PamphletTag>Press Release</PamphletTag>
                  </PamphletInfo>
                </PamphletInfoHref>
                <PamphletContent>
                  <PamphletTitle>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                  </PamphletTitle>
                  <PamphletDes>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio nostrum laboriosam ducimus quo rem nisi a nemo,
                    dignissimos maxime id vero nobis eos, qui necessitatibus
                    excepturi, ad eius. Quam, aut!Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Odio nostrum laboriosam
                    ducimus quo rem nisi a nemo, dignissimos maxime id vero
                    nobis eos, qui necessitatibus excepturi, ad eius. Quam,
                    aut!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio nostrum laboriosam ducimus quo rem nisi a nemo,
                    dignissimos maxime id vero nobis eos, qui necessitatibus
                    excepturi, ad eius. Quam, aut!
                  </PamphletDes>
                  <PamphletCreatedAt>June 22, 2022</PamphletCreatedAt>
                </PamphletContent>
              </PamphletItem>
              <PamphletItem>ddddd</PamphletItem>
            </PamphletList>
          </SectionContent>
        </SectionLayout>
      </SectionUnit>

      <SectionUnit>
        <SectionLayout>
          <SectionHeader>
            <OffScreenTitle>섹션 제목</OffScreenTitle>
          </SectionHeader>
          <SectionContent>
            <PamphletList>
              <PamphletItem>dddd</PamphletItem>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio nostrum laboriosam ducimus quo rem nisi a nemo,
                    dignissimos maxime id vero nobis eos, qui necessitatibus
                    excepturi, ad eius. Quam, aut!Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Odio nostrum laboriosam
                    ducimus quo rem nisi a nemo, dignissimos maxime id vero
                    nobis eos, qui necessitatibus excepturi, ad eius. Quam,
                    aut!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio nostrum laboriosam ducimus quo rem nisi a nemo,
                    dignissimos maxime id vero nobis eos, qui necessitatibus
                    excepturi, ad eius. Quam, aut!
                  </PamphletDes>
                  <PamphletCreatedAt>June 22, 2022</PamphletCreatedAt>
                </TypeBPamphletContent>
              </PamphletItem>
            </PamphletList>
          </SectionContent>
        </SectionLayout>
      </SectionUnit>
    </>
  );
}

export default SectionAd;
