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
  font-size: 22px;
  color: rgb(96, 96, 128);
  font-weight: bold;
  padding: 20px 0 20px 0;
`;

export const HeaderFunction = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderOnNav = styled.nav`
  width: 310px;
`;

export const HeaderOffNav = styled.nav`
  width: 100;
`;

export const HeaderNavList = styled.ul`
  display: flex;
`;

export const HeaderNavLi = styled.li`
  &:last-child {
    margin-right: 10px;
  }
  text-align: center;
  padding: 0 10px 0 10px;
`;

export const HeaderLink = styled(Link)`
  display: block;
`;

export const NavText = styled.span`
  display: block;
  font-size: 17px;
  color: #606080;
  font-weight: bold;
  padding: 20px 0 20px 0;
`;
