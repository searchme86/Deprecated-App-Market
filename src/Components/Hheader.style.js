import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSection = styled.header`
  width: 100%;
  background: #d2fdff;
`;

export const HeaderCenter = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-itmes: center;
  width: 1280px;

  margin: 0 auto;
`;

export const HeaderLogo = styled.h1`
  width: 200px;
`;

export const HeaderText = styled.span`
  display: block;
  font-size: 32px;
  color: rgb(96, 96, 128);
  font-weight: bold;
  padding: 20px 0 20px 0;
`;

export const HeaderFunction = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderOnNav = styled.nav`
  width: 350px;
`;

export const HeaderOffNav = styled.nav`
  width: 300px;
`;

export const HeaderNavList = styled.ul`
  display: flex;
`;

export const HeaderNavLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
  &:last-child {
    margin-right: 0px;
  }
  text-align: center;
`;

export const HeaderLink = styled(Link)`
  display: block;
  width: 88px;
`;

export const NavText = styled.span`
  display: block;
  font-size: 16px;
  color: rgb(38, 38, 39);
  font-weight: bold;
  padding: 8px 16px;
  border-color: rgb(38, 38, 39);
  cursor: pointer;
  border-radius: 4px;
`;

export const HeaderTextHome = styled(NavText)`
  background: #b4dfe5;
  color: #fff;
`;
export const HeaderTextLogin = styled(NavText)`
  background: #f4976c;
  color: #fff;
`;
export const HeaderTextSignup = styled(NavText)`
  background: #303c6c;
  color: #fff;
`;
