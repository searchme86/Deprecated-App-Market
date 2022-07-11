import React, { useState, useCallback, useMemo } from 'react';

import {
  RegisterArea,
  RegisterBox,
  RegisterBackground,
  RegisterInfo,
  RegisterInput,
  FormEnclose,
  FormLayout,
  FormDivided,
  RegisterHeader,
  RegisterIntro,
  RegisterTitle,
  RegisterForm,
  LoginSection,
  LoginTitle,
  LinkLogin,
  RegisterAction,
} from './UserEnter.style';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
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
    emailId: '',
    emailCompany: '',
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

  const {
    nickname,
    emailId,
    emailCompany,
    password,
    passwordCheck,
    imageFile,
  } = formValue;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  console.log('nickname', nickname);
  console.log('emailId', emailId);
  console.log('emailCompany', emailCompany);
  console.log('password', password);
  console.log('passwordCheck', passwordCheck);
  console.log('imageFile', imageFile);

  const canSubmit = [
    nickname,
    emailId,
    emailCompany,
    password,
    passwordCheck,
    imageFile,
  ].every(Boolean);

  console.log('canSubmit', canSubmit);
  const registerForm = () => {
    canSubmit && dispatch(UserRegister({ formValue, navigate, toast }));
  };

  console.log('formValue', formValue);

  return (
    <RegisterArea>
      <OffScreenTitle>회원등록하기</OffScreenTitle>
      <RegisterBackground />
      <RegisterBox>
        <RegisterForm>
          <RegisterHeader>
            <RegisterIntro>
              Welcome to <strong style={{ fontSize: '18px' }}>멍미마켓</strong>
            </RegisterIntro>
            <RegisterTitle>회원 등록하기</RegisterTitle>
          </RegisterHeader>
          <RegisterInfo>
            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <RegisterInput mb="20px">
                  <FormLabel htmlFor="nickname">
                    <OffScreenSpan>닉네임 입력폼</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="50px">
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
                          value: '/[a-zA-Z0-9]/g',
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
                  <ImageHolder width="140px" mr="20px">
                    <Image src={defaultImg} alt="default" />
                  </ImageHolder>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setFormValue({ ...formValue, imageFile: base64 })
                    }
                  />
                </FormLayout>

                <FormLayout display="flex" align="center" mb="20px">
                  <FormDivided>
                    <FormEnclose>
                      <RegisterInput>
                        <FormLabel htmlFor="emailId">
                          <OffScreenSpan>이메일 아이디</OffScreenSpan>
                        </FormLabel>
                        <FormEnclose width="100%" height="50px">
                          <Input
                            type="text"
                            id="emailId"
                            name="emailId"
                            width="100%"
                            height="100%"
                            fontSize="18px"
                            placeholder="이메일 아이디"
                            autoComplete="off"
                            pl="20px"
                            {...register('emailId', {
                              required: '이메일 아이디를 입력해주세요',
                              onChange: onInputChange,
                            })}
                          />
                        </FormEnclose>
                        <FormErrorMessage as="p">
                          {errors?.emailId && errors?.emailId?.message}
                        </FormErrorMessage>
                      </RegisterInput>
                    </FormEnclose>
                  </FormDivided>
                  <AtSignIcon w={4} h={4} ml="5px" mr="5px" />
                  <FormDivided>
                    <FormEnclose>
                      <RegisterInput>
                        <FormLabel htmlFor="emailCompany">
                          <OffScreenSpan>이메일 회사</OffScreenSpan>
                        </FormLabel>
                        <FormEnclose width="100%" height="50px">
                          <Input
                            type="text"
                            id="emailCompany"
                            name="emailCompany"
                            width="100%"
                            height="100%"
                            fontSize="18px"
                            placeholder="이메일 도메인"
                            autoComplete="off"
                            pl="20px"
                            {...register('emailCompany', {
                              required: '이메일 아이디를 입력해주세요',
                              onChange: onInputChange,
                            })}
                          />
                        </FormEnclose>
                        <FormErrorMessage as="p">
                          {errors?.emailCompany &&
                            errors?.emailCompany?.message}
                        </FormErrorMessage>
                      </RegisterInput>
                    </FormEnclose>
                  </FormDivided>
                </FormLayout>

                <RegisterInput mb="20px">
                  <FormLabel htmlFor="password">
                    <OffScreenSpan>비밀번호 입력</OffScreenSpan>
                  </FormLabel>
                  <InputGroup>
                    <FormEnclose width="100%" height="50px">
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
                              ' /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/ ',
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
                  <FormEnclose width="100%" height="50px">
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
                            ' /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/ ',
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
                <RegisterAction>
                  <RegisterButton type="submit" background="#303C6C">
                    등록하기
                  </RegisterButton>
                </RegisterAction>
              </FormControl>
            </PForm>
          </RegisterInfo>
          <LoginSection>
            <LoginTitle>이미 계정이 있으신가요??</LoginTitle>
            <LinkLogin to={'/'}>로그인</LinkLogin>
          </LoginSection>
        </RegisterForm>
      </RegisterBox>
      <BgAnimation />
    </RegisterArea>
  );
}

export default UserEnter;
