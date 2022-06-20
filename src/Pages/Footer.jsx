import React from 'react';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material';
import {
  FooterCenter,
  FooterContactItem,
  FooterContainer,
  FooterContent,
  FooterDesc,
  FooterItemhref,
  FooterLeft,
  FooterList,
  FooterListItem,
  FooterLogo,
  FooterRight,
  FooterSocial,
  FooterSubTitle,
  FooterWrapper,
  SocialIcon,
} from './Footer.style';
import { Image, ImageHolder } from '../Assets/Styles/Image.style';

function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLeft>
          <FooterLogo>Logo</FooterLogo>
          <FooterContent>
            <FooterDesc>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don’t look even
              slightly believable.
            </FooterDesc>
            <FooterSocial>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
              <SocialIcon color="E60023">
                <Pinterest />
              </SocialIcon>
            </FooterSocial>
          </FooterContent>
        </FooterLeft>
        <FooterCenter>
          <FooterSubTitle>Useful Links</FooterSubTitle>
          <FooterList>
            <FooterListItem>
              <FooterItemhref to={'/'}>Home</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>Cart</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>Home</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>Man Fashion</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>Accessories</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>My Account</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>Order Tracking</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>Wishlist</FooterItemhref>
            </FooterListItem>
            <FooterListItem>
              <FooterItemhref to={'/'}>Terms</FooterItemhref>
            </FooterListItem>
          </FooterList>
        </FooterCenter>
        <FooterRight>
          <FooterSubTitle>Contact</FooterSubTitle>
          <FooterContent>
            <FooterList>
              <FooterListItem>
                <FooterContactItem>
                  <Room style={{ marginRight: '10px' }} /> 622 Dixie Path ,
                  South Tobinchester 98336
                </FooterContactItem>
              </FooterListItem>
              <FooterContactItem>
                <Phone style={{ marginRight: '10px' }} /> +1 234 56 78
              </FooterContactItem>
              <FooterContactItem>
                <MailOutline style={{ marginRight: '10px' }} /> contact@lama.dev
              </FooterContactItem>
              <ImageHolder width="50%">
                <Image src="https://i.ibb.co/Qfvn4z6/payment.png" />
              </ImageHolder>
            </FooterList>
          </FooterContent>
        </FooterRight>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;
