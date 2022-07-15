import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainBlogWrapper = styled.div`
  background: #f0efee;
`;

export const MainBlogContainer = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding: 0 0 60px 0;
  background: #f0efee;
`;

export const MainBlogHref = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  cursor: pointer;
`;

export const MainBlogImgHolder = styled.div`
 flex: 0 1 54.5454545455%;
  max-width: 54.5454545455%; */


  margin-right: auto;
  padding: 0;
  box-sizing: border-box;
  object-fit: cover;
  -webkit-box-shadow: 0 27px 54px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 27px 54px 0 rgb(0 0 0 / 20%);
`;

export const MainBlogImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const MainBlogContent = styled.div`
  flex: 0 1 40.3636363636%;
  padding: 0 80px;
  align-self: center;
`;

export const MainBlogTitle = styled.strong`
  position: relative;
  display: block;
  font-size: 28px;
  font-weight: bold;
  padding: 0 0 30px 0;
  margin: 0 0 0 30px 0;
  transition: color 0.3s ease;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 24px;
    height: 3px;
    background: #f7991c;
  }
`;

export const MainBlogDes = styled.p`
  margin: 19px 0 19px 0;
  line-height: 1.2;
`;

export const MainBlogCreated = styled.span``;
