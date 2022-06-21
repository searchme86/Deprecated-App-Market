import React from 'react';
import { OffScreen } from '../../Assets/Styles/Basic.style';
import {
  PamphletContainer,
  PamphletImage,
  PamphletImageHolder,
  PamphletItem,
  PamphletList,
  PamphletTag,
  PamphletSectionTitle,
  PamphletWrapper,
  PamphletTitle,
  PamphletDes,
  PamphletCreatedAt,
  PamphletContent,
  PamphletInfo,
  PamphletInfoHref,
  TypeBPamphlet,
  TypeBPamphletContent,
  TypeBPamphletInfo,
} from './Pamphlet.style';

import Cat from '../../Assets/Image/cat01.jpeg';

function Pamphlet() {
  return (
    <>
      <PamphletWrapper>
        <PamphletSectionTitle>
          <OffScreen>대표 홍보자료</OffScreen>
        </PamphletSectionTitle>

        <PamphletContainer>
          <PamphletList>
            <PamphletItem>
              <PamphletInfoHref to={'/'}>
                <PamphletInfo>
                  <PamphletImageHolder>
                    <PamphletImage src={Cat} alt="고양이" />
                  </PamphletImageHolder>
                  <PamphletTag>Press Release</PamphletTag>
                </PamphletInfo>
              </PamphletInfoHref>
              <PamphletContent>
                <PamphletTitle>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </PamphletTitle>
                <PamphletDes>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos
                  maxime id vero nobis eos, qui necessitatibus excepturi, ad
                  eius. Quam, aut!Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Odio nostrum laboriosam ducimus quo rem nisi
                  a nemo, dignissimos maxime id vero nobis eos, qui
                  necessitatibus excepturi, ad eius. Quam, aut!Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Odio nostrum laboriosam
                  ducimus quo rem nisi a nemo, dignissimos maxime id vero nobis
                  eos, qui necessitatibus excepturi, ad eius. Quam, aut!
                </PamphletDes>
                <PamphletCreatedAt>June 22, 2022</PamphletCreatedAt>
              </PamphletContent>
            </PamphletItem>

            <PamphletItem>
              <TypeBPamphlet to={'/'}>
                <TypeBPamphletInfo>
                  <PamphletImageHolder>
                    <PamphletImage src={Cat} alt="고양이" />
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
                  nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos
                  maxime id vero nobis eos, qui necessitatibus excepturi, ad
                  eius. Quam, aut!Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Odio nostrum laboriosam ducimus quo rem nisi
                  a nemo, dignissimos maxime id vero nobis eos, qui
                  necessitatibus excepturi, ad eius. Quam, aut!Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Odio nostrum laboriosam
                  ducimus quo rem nisi a nemo, dignissimos maxime id vero nobis
                  eos, qui necessitatibus excepturi, ad eius. Quam, aut!
                </PamphletDes>
                <PamphletCreatedAt>June 22, 2022</PamphletCreatedAt>
              </TypeBPamphletContent>
            </PamphletItem>

            <PamphletItem>
              <PamphletInfoHref to={'/'}>
                <PamphletInfo>
                  <PamphletImageHolder>
                    <PamphletImage src={Cat} alt="고양이" />
                  </PamphletImageHolder>
                  <PamphletTag>Press Release</PamphletTag>
                </PamphletInfo>
              </PamphletInfoHref>
              <PamphletContent>
                <PamphletTitle>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </PamphletTitle>
                <PamphletDes>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos
                  maxime id vero nobis eos, qui necessitatibus excepturi, ad
                  eius. Quam, aut!Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Odio nostrum laboriosam ducimus quo rem nisi
                  a nemo, dignissimos maxime id vero nobis eos, qui
                  necessitatibus excepturi, ad eius. Quam, aut!Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Odio nostrum laboriosam
                  ducimus quo rem nisi a nemo, dignissimos maxime id vero nobis
                  eos, qui necessitatibus excepturi, ad eius. Quam, aut!
                </PamphletDes>
                <PamphletCreatedAt>June 22, 2022</PamphletCreatedAt>
              </PamphletContent>
            </PamphletItem>

            {/* TypeB */}
            <PamphletItem>
              <TypeBPamphlet to={'/'}>
                <TypeBPamphletInfo>
                  <PamphletImageHolder>
                    <PamphletImage src={Cat} alt="고양이" />
                  </PamphletImageHolder>
                  <PamphletTag>Press Release</PamphletTag>
                </TypeBPamphletInfo>
              </TypeBPamphlet>
              <TypeBPamphletContent>
                <PamphletTitle>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.{' '}
                </PamphletTitle>
                <PamphletDes>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  nostrum laboriosam ducimus quo rem nisi a nemo, dignissimos
                  maxime id vero nobis eos, qui necessitatibus excepturi, ad
                  eius. Quam, aut!Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Odio nostrum laboriosam ducimus quo rem nisi
                  a nemo, dignissimos maxime id vero nobis eos, qui
                  necessitatibus excepturi, ad eius. Quam, aut!Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Odio nostrum laboriosam
                  ducimus quo rem nisi a nemo, dignissimos maxime id vero nobis
                  eos, qui necessitatibus excepturi, ad eius. Quam, aut!
                </PamphletDes>
                <PamphletCreatedAt>June 22, 2022</PamphletCreatedAt>
              </TypeBPamphletContent>
            </PamphletItem>
            {/* TypeB */}
          </PamphletList>
        </PamphletContainer>
      </PamphletWrapper>
    </>
  );
}

export default Pamphlet;
