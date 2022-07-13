import React, { useState } from 'react';
import {
  HeaderCenter,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  HeaderNavLi,
  HeaderNavList,
  HeaderSection,
  HeaderFunction,
  HeaderText,
  NavText,
} from './Hheader.style';

import SearchBox from './SeachBar/SearchBox';
function Hheader() {
  return (
    <HeaderSection>
      <HeaderCenter>
        <HeaderLogo>
          <HeaderLink to={'/'}>
            <HeaderText>Agora</HeaderText>
          </HeaderLink>
        </HeaderLogo>
        <HeaderFunction>
          <HeaderNav role="navigation">
            {/* 유저가 있을 경우 */}
            <HeaderNavList>
              <HeaderNavLi>
                <HeaderLink to={'/'}>
                  <NavText>Home</NavText>
                </HeaderLink>
              </HeaderNavLi>
              <HeaderNavLi>
                <HeaderLink to={'/'}>
                  <NavText>제품등록</NavText>
                </HeaderLink>
              </HeaderNavLi>
              <HeaderNavLi>
                <HeaderLink to={'/'}>
                  <NavText>LogOut</NavText>
                </HeaderLink>
              </HeaderNavLi>
            </HeaderNavList>
          </HeaderNav>
          <SearchBox />
        </HeaderFunction>
      </HeaderCenter>
    </HeaderSection>
  );
}

export default Hheader;
