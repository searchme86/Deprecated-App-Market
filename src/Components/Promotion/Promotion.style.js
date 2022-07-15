import { Link } from 'react-router-dom';
import styled from 'styled-components';

//공통
export const PamphletWrapper = styled.section`
  width: 1300px;
  margin: 0 auto;
  padding: 60px 0 0 0;
`;
export const PamphletSectionTitle = styled.h1``;

export const PamphletContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin-left: auto;
  padding: 60px;
  box-sizing: border-box;
  background: #7aa25d;
`;
export const PamphletList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -60px -10px 0 -10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const PamphletItem = styled.li`
  display: flex;
  flex: 0 1 50%;
  max-width: 50%;
  flex-direction: column;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  margin: 60px 0 0 0;
`;

export const PamphletContainer = styled.div``;

export const PamphletInfoHref = styled(Link)`
  display: block;
  width: 100%;
`;

export const PamphletImageHolder = styled.div``;

export const PamphletImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const PamphletTag = styled.span`
  position: absolute;
  bottom: 0;
  display: inline-block;
  vertical-align: top;
  background: #62a3d2;
  color: #fff;
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  text-transform: uppercase;
  word-break: keep-all;
  -webkit-transition: background-color 0.3s ease;
  -moz-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
`;

export const PamphletTitle = styled.strong`
  display: block;
  font-size: 21px;
  color: #181e22;
  line-height: 1.2;
`;

export const PamphletDes = styled.p`
  font-size: 1.2;
  margin: 16px 0 16px 0;
`;

export const PamphletCreatedAt = styled.span``;

export const PamphletInfo = styled.div`
  position: relative;
  width: calc(100% - 50px);
  margin: 0 auto 0 0;
  &:after {
    position: absolute;
    bottom: 0;
    right: -50px;
    content: '';
    display: block;
    width: 50px;
    height: calc(100% - 180px);
    background: #7aa25d;
  }
`;

export const TypeBPamphlet = styled(Link)`
  display: block;
  width: 100%;
  margin: 118px 0 0 40px;
`;

export const TypeBPamphletInfo = styled.div`
  position: relative;
  width: calc(100% - 50px);
  margin: 0 auto 0 0;
  &:after {
    position: absolute;
    bottom: 0;
    left: -40px;
    content: '';
    display: block;
    width: 40px;
    height: calc(100% - 180px);
    background: #7aa25d;
  }
`;

export const TypeBPamphletContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin-right: auto;
  padding: 60px;
  box-sizing: border-box;
  background: #7aa25d;
`;
