import React from 'react';
import {
  HeaderCenter,
  HeaderLink,
  HeaderLogo,
  HeaderOnNav,
  HeaderOffNav,
  HeaderNavLi,
  HeaderNavList,
  HeaderSection,
  HeaderFunction,
  HeaderText,
  HeaderTextHome,
  HeaderTextLogin,
  HeaderTextSignup,
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
    auth: { user },
  } = useSelector(AuthSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (user?.newUser?.token) {
    const decodedToken = decode(user?.newUser?.token);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      //토큰이 만료된다면,
      dispatch(setLogout());
    }
  }

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <HeaderSection>
      <HeaderCenter>
        <HeaderLogo>
          <HeaderLink to={'/'}>
            <HeaderText>Agora</HeaderText>
          </HeaderLink>
        </HeaderLogo>
        <HeaderFunction>
          {user?.newUser?._id ? (
            <HeaderOnNav role="navigation">
              <HeaderNavList>
                <HeaderNavLi>
                  <HeaderLink to={'/'}>
                    <HeaderTextHome>Home</HeaderTextHome>
                  </HeaderLink>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderLink to={'/create'}>
                    <HeaderTextLogin>Upload</HeaderTextLogin>
                  </HeaderLink>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderTextSignup onClick={() => handleLogout()}>
                    LogOut
                  </HeaderTextSignup>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderLink to={`/profile/${user?.newUser?.nickname}`}>
                    <ImageHolder
                      width="50px"
                      height="50px"
                      mt="10px"
                      mb="10px"
                      br="100%"
                    >
                      <Image
                        src={user?.newUser?.imageFile}
                        alt={`${user?.newUser?.nickname}님 프로필 이미지 `}
                      />
                    </ImageHolder>
                  </HeaderLink>
                </HeaderNavLi>
              </HeaderNavList>
            </HeaderOnNav>
          ) : (
            <HeaderOffNav role="navigation">
              <HeaderNavList>
                <HeaderNavLi>
                  <HeaderLink to={'/'}>
                    <HeaderTextHome>Home</HeaderTextHome>
                  </HeaderLink>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderLink to={'/login'}>
                    <HeaderTextLogin>Login</HeaderTextLogin>
                  </HeaderLink>
                </HeaderNavLi>
                <HeaderNavLi>
                  <HeaderLink to={'/register'}>
                    <HeaderTextSignup>SignUp</HeaderTextSignup>
                  </HeaderLink>
                </HeaderNavLi>
              </HeaderNavList>
            </HeaderOffNav>
          )}
          <SearchBox />
        </HeaderFunction>
      </HeaderCenter>
    </HeaderSection>
  );
}

export default Hheader;
