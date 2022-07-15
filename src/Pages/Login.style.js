import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LoginWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const LonginContainer = styled.div`
  padding: 15px;
  max-width: 450px;
`;

export const LoginBox = styled.div`
  position: relative;
  width: 390px;
  padding: 25px 15px 25px 15px;
  box-sizing: border-box;
  border-radius: 14px;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  background: #fff;
  z-index: 1;
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginImage = styled.div``;

export const LoginToHome = styled(Link)`
  display: block;
  width: 100%;
`;

export const LoginTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  line-height: 1;
  margin: 10px 0 15px 0;
`;

export const LoginContent = styled.div``;

export const LoginBtnArea = styled.div``;

export const LoginAlertArea = styled.div`
  text-align: center;
`;

export const LoginToSignUp = styled(Link)`
  display: block;
`;

export const LoginToSignUpMsg = styled.p`
  margin: 8px 0;
  font-size: 17px;
  cursor: pointer;
`;

export const LoginErrorArea = styled.div``;

export const LoginBgShapehape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background: #fbe8a6;
`;
