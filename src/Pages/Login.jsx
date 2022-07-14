/**
 *
 *
 * 어려웠던 점 : 로그인 구현시 에러가 계속 초기화 되지 않음, 결국 리덕스 툴킷에서 초기화 시킴
 */
import React, { useState, useEffect, useCallback } from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, AuthSelector } from '../Store/Features/AuthSlice';
import {
  LoginTitle,
  LoginBgShapehape,
  LoginHeader,
  LoginImage,
  LoginToSignUp,
  LoginToSignUpMsg,
  LoginWrapper,
  LonginContainer,
  LoginContent,
  LoginBtnArea,
  LoginErrorArea,
  LoginBox,
  LoginAlertArea,
} from './Login.style';
import { OffScreenSpan } from '../Assets/Styles/Basic.style.js';
import { PForm } from '../Pages/Manager/Product/ProductUpload.style.js';
import {
  FormEnclose,
  RegisterInput,
} from '../Pages/Manager/User/Enter/UserEnter.style.js';
import BgAnimation from '../Components/BgAnimation';
import { useDebounce } from '../Components/useDebounce';
import { LoginBtn } from '../Config/Styles/Button.style';
import { useForm } from 'react-hook-form';

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const {
    auth: { loading, error },
  } = useSelector(AuthSelector);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState(initialState);
  const [show, setShow] = useState(false);
  const [errMsg, setErrorMsg] = useState(false);

  const { email, password } = formValue;
  const canSubmit = email && password;

  useEffect(() => {
    if (error) {
      setErrorMsg(false);
    }
  }, []);

  useEffect(() => {
    if (canSubmit) {
      setErrorMsg(true);
    }
  }, [canSubmit]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDelayIn = useCallback(
    useDebounce((value) => setFormValue(value), 500),
    []
  );

  const onInputChange = useCallback(
    (e) => {
      const {
        target: { name, value },
      } = e;

      onDelayIn({ ...formValue, [name]: value });
    },
    [formValue, onDelayIn]
  );

  const handleClick = () => {
    setShow((value) => !value);
  };

  const registerForm = () => {
    if (email && password) {
      dispatch(login({ formValue, navigate }));
    }
  };

  console.log('error', error);
  console.log('errorMsg', errMsg);
  return (
    <LoginWrapper>
      <LonginContainer>
        <LoginBox>
          <LoginHeader>
            <LoginImage>
              <FontAwesomeIcon
                icon={faHouseChimneyWindow}
                style={{ fontSize: '30px', color: '#303C6C' }}
              />
            </LoginImage>
            <LoginTitle>LogIn</LoginTitle>
          </LoginHeader>
          <LoginContent>
            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <RegisterInput mb="20px">
                  <FormLabel htmlFor="email" mb="0px">
                    <OffScreenSpan>이메일 입력폼</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="50px">
                    <Input
                      id="email"
                      name="email"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      autoComplete="off"
                      placeholder="이메일을 입력해주세요"
                      {...register('email', {
                        required: '이메일을 입력해주세요',
                        onChange: onInputChange,
                      })}
                    />
                  </FormEnclose>
                </RegisterInput>
                <RegisterInput mb="30px">
                  <FormLabel htmlFor="password" mb="0px">
                    <OffScreenSpan>비밀번호 입력폼</OffScreenSpan>
                  </FormLabel>
                  <InputGroup width="100%" height="50px">
                    <Input
                      type={show ? 'text' : 'password'}
                      id="password"
                      name="password"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      autoComplete="off"
                      placeholder="비밀번호를 입력해주세요"
                      {...register('password', {
                        required: '비밀번호를 입력해주세요',
                        onChange: onInputChange,
                      })}
                    />
                    <InputRightElement
                      width="4.5rem"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </RegisterInput>
                <LoginBtnArea>
                  <LoginBtn
                    type="submit"
                    background="#303c6c"
                    disabled={!errMsg}
                    canSubmit={canSubmit}
                  >
                    Login
                  </LoginBtn>
                </LoginBtnArea>
                {/*  */}
              </FormControl>
            </PForm>
          </LoginContent>
          <LoginAlertArea>
            <LoginToSignUp to="/register">
              <LoginToSignUpMsg>아직 계정이 없나요? SignUp</LoginToSignUpMsg>
            </LoginToSignUp>
          </LoginAlertArea>
          {/*  */}

          {error ? (
            errMsg ? (
              <Alert status="error" mt="10px">
                <AlertIcon />
                {error}
              </Alert>
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </LoginBox>
        <LoginBgShapehape />
        <BgAnimation />
      </LonginContainer>
    </LoginWrapper>
  );
}

export default Login;
