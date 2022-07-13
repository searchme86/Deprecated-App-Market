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
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import decode from 'jwt-decode';

import SearchBox from './SeachBar/SearchBox';
import { AuthSelector, setLogout } from '../Store/Features/AuthSlice';
import { Image, ImageHolder } from '../Assets/Styles/Image.style';

function Hheader() {
  const {
    auth: {
      user: {
        newUser,
        newUser: { imageFile, nickname },
        token,
      },
    },
  } = useSelector(AuthSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (token) {
    const decodedToken = decode(token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      //토큰이 만료된다면,
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
  };

  console.log('newUser', newUser);
  console.log('token', token);

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
                <HeaderLink to={'/create'}>
                  <NavText>제품등록</NavText>
                </HeaderLink>
              </HeaderNavLi>
              <HeaderNavLi>
                <NavText onClick={() => handleLogout()}>LogOut</NavText>
              </HeaderNavLi>
              {imageFile ? (
                <HeaderNavLi>
                  <HeaderLink to={`/profile/${nickname}`}>
                    <ImageHolder
                      width="50px"
                      height="50px"
                      mt="10px"
                      mb="10px"
                      br="100%"
                    >
                      <Image
                        src={imageFile}
                        alt={`${nickname}님 프로필 이미지 `}
                      />
                    </ImageHolder>
                  </HeaderLink>
                </HeaderNavLi>
              ) : (
                '..'
              )}
            </HeaderNavList>
          </HeaderNav>
          <SearchBox />
        </HeaderFunction>
      </HeaderCenter>
    </HeaderSection>
  );
}

export default Hheader;
