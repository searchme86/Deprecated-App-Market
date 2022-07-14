import React, { useState, useCallback } from 'react';

import {
  RegisterArea,
  RegisterBox,
  RegisterBackground,
  RegisterInfo,
  RegisterInput,
  FormEnclose,
  FormLayout,
  RegisterHeader,
  RegisterIntro,
  RegisterTitle,
  RegisterForm,
  LoginSection,
  LoginTitle,
  LinkLogin,
  RegisterAction,
  RegisterAlert,
  RegisterAlertMsg,
  SiteBrandTitle,
} from './UserEnter.style';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PForm } from '../../Product/ProductUpload.style';

import {
  OffScreenSpan,
  OffScreenTitle,
} from '../../../../Assets/Styles/Basic.style';

import FileBase from 'react-file-base64';
import { useForm } from 'react-hook-form';
import { useDebounce } from '../../../../Components/useDebounce';
import { ImageHolder, Image } from '../../../../Assets/Styles/Image.style';

import defaultImg from '../../../../Assets/Image/default-product-upload.png';
import { RegisterButton } from '../../../../Config/Styles/Button.style';
import BgAnimation from '../../../../Components/BgAnimation';
import { useDispatch, useSelector } from 'react-redux';

import { UserRegister } from '../../../../Store/Features/AuthSlice.js';

function UserEnter() {
  const initialState = {
    nickname: '',
    email: '',
    password: '',
    passwordCheck: '',
    imageFile: '',
  };
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState(initialState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelChange = () => {
    setShow((value) => !value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const UseInput = useCallback(
    useDebounce((value) => setFormValue(value), 500),
    []
  );

  const onInputChange = useCallback(
    (e) => {
      const {
        target: { value, name },
      } = e;
      UseInput({ ...formValue, [name]: value });
    },
    [UseInput, formValue]
  );

  const { nickname, email, password, passwordCheck, imageFile } = formValue;

  // 폼에 모두 값이 있다.
  const isValueAll = [
    nickname,
    email,
    password,
    passwordCheck,
    imageFile,
  ].every(Boolean);

  // *비밀번호
  // 패스워드 폼에 값이 둘다 있다.
  // 비밀번호 폼에 값이 있는지 확인(공백, 널값도 있는 것으로 인식하기 때문)
  let isPwdhas = [password, passwordCheck].every((item) => item.length > 0);
  // 패스워드 폼의 값이 서로 일치하다
  let pwdMatch = password === passwordCheck;

  // 패스워드의 값이 있고, 패스워드가 서로 일치하다
  let isPwd = isPwdhas && pwdMatch;

  // 버튼의 disabled 되는 조건,
  // 폼의 모든 값이 있으면서, isPwd가 false일 경우
  let disabled = isValueAll && !isPwd;

  // 버튼을 실제 submit 할 수 있는지를 체크함
  let canSubmit = isValueAll && isPwd;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = () => {
    isValueAll && dispatch(UserRegister({ formValue, navigate, toast }));
  };

  return (
    <RegisterArea>
      <OffScreenTitle>회원 등록하기</OffScreenTitle>
      <RegisterBackground />
      <RegisterBox>
        <RegisterForm>
          <RegisterHeader>
            <RegisterIntro>
              Welcome to
              <SiteBrandTitle to={'/'}>Agora</SiteBrandTitle>
            </RegisterIntro>
            <RegisterTitle>회원 등록하기</RegisterTitle>
          </RegisterHeader>
          <RegisterInfo>
            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <RegisterInput mb="35px">
                  <FormLabel htmlFor="nickname">
                    <OffScreenSpan>닉네임 입력폼</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="40px">
                    <Input
                      id="nickname"
                      name="nickname"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      placeholder="닉네임을 입력해주세요"
                      pl="20px"
                      autoComplete="off"
                      {...register('nickname', {
                        required: '영어와 숫자만 입력가능합니다.',
                        min: {
                          value: 3,
                          message: '아이디는 최소 3자 입니다.',
                        },
                        maxLength: {
                          value: 20,
                          message: '아이디는 최대 20자 까지 작성가능합니다.',
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]*$/,
                          message: '영어와 숫자만 입력가능합니다.',
                        },
                        onChange: onInputChange,
                      })}
                    />
                    <FormErrorMessage as="p">
                      {errors?.nickname && errors?.nickname?.message}
                    </FormErrorMessage>
                  </FormEnclose>
                </RegisterInput>
                <FormLayout display="flex" align="center" mb="20px">
                  <ImageHolder width="140px" height="150px" mr="20px">
                    <Image
                      src={imageFile ? imageFile : defaultImg}
                      alt="default"
                    />
                  </ImageHolder>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setFormValue({ ...formValue, imageFile: base64 })
                    }
                  />
                </FormLayout>

                <RegisterInput mb="20px">
                  <FormLabel htmlFor="email">
                    <OffScreenSpan>유저 이메일</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="40px">
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      placeholder="이메일을 입력해주세요"
                      autoComplete="off"
                      pl="20px"
                      {...register('email', {
                        required: '이메일을 입력해주세요.',
                        onChange: onInputChange,
                      })}
                    />
                  </FormEnclose>
                  <FormErrorMessage as="p">
                    {errors?.email && errors?.email?.message}
                  </FormErrorMessage>
                </RegisterInput>

                <RegisterInput mb="20px">
                  <FormLabel htmlFor="password">
                    <OffScreenSpan>비밀번호 입력</OffScreenSpan>
                  </FormLabel>
                  <InputGroup>
                    <FormEnclose width="100%" height="40px">
                      <Input
                        type={show ? 'text' : 'password'}
                        id="password"
                        name="password"
                        width="100%"
                        height="100%"
                        fontSize="18px"
                        placeholder="비밀번호를 입력해주세요"
                        pl="20px"
                        autoComplete="off"
                        {...register('password', {
                          required: '비밀번호를 입력해주세요',
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                            message:
                              '최소 8자리에서 24자로 대문자 혹은 소문자의 문자로 시작해야합니다. 숫자와 특수문자(!@#$%)를 포함해야합니다.',
                          },
                          onChange: onInputChange,
                        })}
                      />
                    </FormEnclose>
                    <InputRightElement
                      width="4.5rem"
                      style={{ transform: 'translateY(-50%)', top: '50%' }}
                    >
                      <Button
                        w="10rem"
                        h="1.75rem"
                        mr="5px"
                        size="sm"
                        onClick={handelChange}
                      >
                        {show ? '숨기기' : '보이기'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage as="p">
                    {errors?.password && errors?.password?.message}
                  </FormErrorMessage>
                </RegisterInput>

                <RegisterInput mb="20px">
                  <FormLabel htmlFor="passwordCheck">
                    <OffScreenSpan>비밀번호 확인</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="40px">
                    <Input
                      type="password"
                      id="passwordCheck"
                      name="passwordCheck"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      placeholder="비밀번호을 다시 입력해주세요"
                      autoComplete="off"
                      pl="20px"
                      {...register('passwordCheck', {
                        required: '비밀번호를 입력해주세요',
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                          message:
                            '최소 8자리에서 24자로 대문자 혹은 소문자의 문자로 시작해야합니다. 숫자와 특수문자(!@#$%)를 포함해야합니다.',
                        },
                        onChange: onInputChange,
                      })}
                    />
                  </FormEnclose>
                  <FormErrorMessage as="p">
                    {errors?.passwordCheck && errors?.passwordCheck?.message}
                  </FormErrorMessage>
                </RegisterInput>

                {isPwdhas ? (
                  isPwd ? (
                    <RegisterAlert>
                      <RegisterAlertMsg>
                        입력한 비밀번호가 일치합니다.
                      </RegisterAlertMsg>
                    </RegisterAlert>
                  ) : (
                    <RegisterAlert>
                      <RegisterAlertMsg>
                        입력한 비밀번호가 다릅니다.
                      </RegisterAlertMsg>
                    </RegisterAlert>
                  )
                ) : (
                  ''
                )}

                <RegisterAction>
                  <RegisterButton
                    type="submit"
                    // 버튼 disabled
                    disabled={disabled}
                    // 버튼 실제 유효성
                    canSubmit={canSubmit}
                    background="#303C6C"
                  >
                    {isValueAll && isPwd ? '등록하기' : ' 입력하기'}
                  </RegisterButton>
                </RegisterAction>
              </FormControl>
            </PForm>
          </RegisterInfo>
          <LoginSection>
            <LinkLogin to={'/login'}>
              <LoginTitle>
                이미 계정이 있으신가요?
                <br /> 로그인
              </LoginTitle>
            </LinkLogin>
          </LoginSection>
        </RegisterForm>
      </RegisterBox>
      <BgAnimation />
    </RegisterArea>
  );
}

export default UserEnter;
