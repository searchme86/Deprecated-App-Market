import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterArea = styled.section`
  position: relative;
  background: #f4976c;
  height: 100vh;
`;

export const RegisterBackground = styled.div`
  background: #fbe8a6;
  height: 500px;
`;

export const RegisterBox = styled.div`
  position: absolute;
  width: 1280px;
  right: 0px;
  left: 50%;
  margin: 0 0 0 -640px;
  transform: translateY(-50%);
  z-index: 1;
`;

export const RegisterForm = styled.div`
  position: relative;
  width: 500px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 0 0 auto;
  border-radius: 14px;
  background: #d2fdff;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
`;

export const RegisterHeader = styled.div`
  margin: 0 0 27px 0;
`;
export const RegisterIntro = styled.p`
  margin: 0 0 10px 0;
  font-size: 19px;
`;

export const SiteBrandTitle = styled(Link)`
  display: inline-block;
  margin: 0 0 0 5px;
  font-size: 24px;
  color: rgb(96, 96, 128);
  font-weight: bold;
`;

export const RegisterTitle = styled.strong`
  display: block;
  font-size: 30px;
`;

export const RegisterInfo = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

export const FormLayout = styled.div`
  display: ${({ display }) => display};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  margin-bottom: ${({ mb }) => mb};
`;

export const FormEnclose = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const RegisterInput = styled.div`
  width: 100%;
  margin-bottom: ${({ mb }) => mb};
`;

export const RegisterAlert = styled.div`
  margin: 10px 0 10px 0;
`;

export const RegisterAlertMsg = styled.p`
  line-height: 1;
  text-align: center;
  padding: 0 0 5px 0;
`;

export const RegisterAction = styled.div``;

export const LoginSection = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  font-size: 18px;
`;
export const LoginTitle = styled.p`
  font-size: 17px;
  cursor: pointer;
`;
export const LinkLogin = styled(Link)``;
