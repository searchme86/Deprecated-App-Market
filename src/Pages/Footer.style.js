import styled from 'styled-components';
import Responsive from '../Assets/Styles/Responsive';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer``;

export const FooterContainer = styled.div`
  display: flex;
  ${Responsive({ flexDirection: 'column' })}
`;

export const FooterLogo = styled.h1``;

export const FooterDesc = styled.p`
  margin: 20px 0px;
`;

export const FooterContent = styled.div``;

export const FooterLeft = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FooterCenter = styled.div`
  flex: 1;
  padding: 20px;
  ${Responsive({ display: 'none' })}
`;

export const FooterRight = styled.div`
  flex: 1;
  padding: 20px;
  ${Responsive({ backgroundColor: '#fff8f8' })}
`;

export const FooterSocial = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const FooterSubTitle = styled.h3`
  margin-bottom: 30px;
`;

export const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const FooterListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const FooterItemhref = styled(Link)``;

export const FooterContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
