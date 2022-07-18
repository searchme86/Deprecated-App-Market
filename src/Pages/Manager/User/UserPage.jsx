import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
  checkPwd,
  AuthSelector,
  changeUserInfo,
} from '../../../Store/Features/AuthSlice';

import {
  PForm,
  PFormUnit,
  PFormDesWrapper,
  PFormDesList,
  PFormDesLi,
  PFormDes,
} from '../Product/ProductUpload.style';
import { OffScreenStrong } from '../../../Assets/Styles/Basic.style';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';

import defaultImg from '../../../Assets/Image/default_user_page.svg';

import {
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import FileBase from 'react-file-base64';
import { useDebounce } from '../../../Components/useDebounce';
import useOnClickOutside from '../../../Components/Select/SelectConfig/useOnClickOutside';

function UserPage() {
  const {
    auth: {
      profile,
      status,
      user: { newUser },
      // user: {
      //   newUser: { imageFile: ImgSrc, name: UserName },
      // },
      error,
      pwdChangable,
    },
  } = useSelector(AuthSelector);
  const dispatch = useDispatch();

  //url의 아이디를 가져오기 위한 useParam
  const { nickname } = useParams();

  const initialState = {
    changedPwd: '',
    imageFile: '',
  };
  const { message, changable } = pwdChangable;

  const confirmRef = useRef(null);

  //1. 변경할 비밀번호의 값을 저장할 로컬 스테이트
  // 변경하기 버튼을 클릭하면, 모든 정보를 서버에 전달한다.
  const [newProfile, setNewProfile] = useState(initialState);

  // 이전 비밀번호를 저장해, 서버에 값을 체크하기 위한 용도
  const [current, setCurrent] = useState('');

  // 인풋의 값을 보이고 안 보이는데 값을 저장할 용도
  const [visible, setVisible] = useState(false);

  // 폼 아래 얼럿창 핸들링 스테이트
  // const [flag, setFlag] = useState(false);

  // 비밀번호 버튼 아래 메세지 핸들링 스테이트
  // const [msgState, setMsgState] = useState(false);

  //버튼, 비밀번호 중복확인을 클릭하는 핸들러 함수
  const checkMatch = (e) => {
    e.preventDefault();
    current &&
      dispatch(checkPwd({ nickname, password: { password: current } }));
  };

  // 폼에 값을 저장하기 위한 기본 핸들러
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const UseInput = useCallback(
    useDebounce((value) => setNewProfile(value), 500),
    []
  );

  // 폼에 값을 저장하기 위한 기본 핸들러
  const onInputChange = useCallback(
    (e) => {
      const {
        target: { name, value },
      } = e;
      UseInput({ ...newProfile, [name]: value });
    },
    [UseInput, newProfile]
  );

  // 이전 비빌번호의 값을 관리한 핸들러
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePrevious = useCallback(
    useDebounce((value) => setCurrent(value), 500),
    []
  );

  // 이전 비빌번호의 값을 관리한 핸들러
  const checkDuplicated = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      savePrevious(value);
    },
    [savePrevious]
  );

  //인풋의 값을 보이고/않보이게 하는 토글 함수
  const showText = () => {
    setVisible((value) => !value);
  };

  const clickOutside = () => {
    console.log('dddddddddd');
  };

  // useEffect(() => {
  //   if (changable) {
  //     setFlag(true);
  //   }
  // }, [changable]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { confirmPassword, imageFile } = newProfile;

  useOnClickOutside(confirmRef, clickOutside);

  // 핵심
  // 초반에는 버튼이 disabeld
  // 없는 데이터를 dispatch하면 안되서,
  //비밀번호 혹은 이미지 혹은 이미지/비밀번호 이렇게 변경하기 위해서,
  // 비밀번호를 클릭하거나, 이미지를 변경하면,
  //변경하기 버튼이 활성화 된다.
  let isDisabled = !confirmPassword && !imageFile;

  const registerForm = () => {
    if (!confirmPassword && !imageFile) return;
    dispatch(changeUserInfo({ nickname, newProfile }));
  };

  console.log('current', current);

  console.log('newProfile', newProfile);

  return (
    <>
      <OffScreenStrong>유저 정보 변경</OffScreenStrong>
      <div
        className=""
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className=""
          style={{
            display: 'flex',
            padding: '50px',
            boxSizing: 'border-box',
            border: '1px solid',
          }}
        >
          <ImageHolder style={{ width: '50%' }}>
            <Image src={defaultImg} alt="이미지" />
          </ImageHolder>

          <div
            className=""
            style={{
              width: '50%',
              padding: '54px 50px 54px 50px',
              boxSizing: 'border-box',
            }}
          >
            <strong
              style={{
                display: 'block',
                fontSize: '20px',
                marginBottom: '10px',
                lineHeight: '1',
              }}
            >
              유저 정보 변경
            </strong>

            <ul style={{ marginBottom: '10px' }}>
              <li>*비밀번호 중복확인 후, 변경 가능합니다.</li>
            </ul>

            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <ul>
                  <li>
                    {/* 변경할 비밀번호 영역 */}
                    <PFormUnit style={{ marginBottom: '0px' }}>
                      <FormLabel htmlFor="password">
                        변경 할 비밀번호 확인
                      </FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>
                              이전의 비밀번호와 일치여부를 확인합니다.
                            </PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <Input
                        type="text"
                        id="password"
                        name="password"
                        {...register('password', {
                          onChange: checkDuplicated,
                        })}
                      />
                      <FormErrorMessage as="p">
                        {errors.password && errors.password.message}
                      </FormErrorMessage>
                      <Button
                        type="button"
                        onClick={checkMatch}
                        style={{
                          margin: '10px 0 10px 0',
                        }}
                      >
                        비밀번호 중복확인
                      </Button>
                    </PFormUnit>
                    <div className="" style={{ margin: '0 0 10px 0' }}>
                      {current ? changable ? <p>{message}</p> : '' : ''}
                      {current ? changable ? '' : <p>{message}</p> : ''}
                    </div>

                    <PFormUnit>
                      <FormLabel htmlFor="confirmPwd">비밀번호 확인</FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>
                              변경하려는 비밀번호를 입력해주세요
                            </PFormDes>
                          </PFormDesLi>
                          <PFormDesLi>
                            <PFormDes>
                              비밀번호는 최소 8자에서 24자로 소문자 대문자
                              그리고 숫자 특수문자(!@#$%)를 포함해야합니다.
                            </PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <InputGroup size="md" ref={confirmRef}>
                        <Input
                          type={visible ? 'text' : 'password'}
                          id="confirmPwd"
                          name="confirmPassword"
                          pr="4.5rem"
                          placeholder="변경하려는 비밀번호를 입력해주세요"
                          disabled={!changable}
                          {...register('confirmPassword', {
                            required:
                              '소문자 대문자 그리고 숫자 특수문자(!@#$%)를 포함한 총 8자에서 24자로 작성해주세요',
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                              message:
                                '최소 8자리에서 24자로 대문자 혹은 소문자의 문자로 시작해야합니다. 숫자와 특수문자(!@#$%)를 포함해야합니다.',
                            },
                            onChange: onInputChange,
                          })}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={showText}>
                            {visible ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                      <FormErrorMessage as="p">
                        {errors.confirmPassword &&
                          errors.confirmPassword.message}
                      </FormErrorMessage>
                    </PFormUnit>
                  </li>

                  <li style={{ marginTop: '20px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <ImageHolder width="80px" height="80px" br="100%">
                        <Image
                          src={!imageFile ? newUser?.imageFile : imageFile}
                          alt={newUser?.name}
                          style={{ display: 'block', width: '100%' }}
                        />
                      </ImageHolder>
                      <div className="" style={{ marginLeft: '20px' }}>
                        <strong
                          style={{
                            display: 'block',
                            lineHeight: '1',
                            marginBottom: '10px',
                          }}
                        >
                          변경할 이미지를 선택해주세요
                        </strong>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setNewProfile({
                              ...newProfile,
                              imageFile: base64,
                            })
                          }
                        />
                      </div>
                    </div>
                  </li>
                </ul>

                <Button
                  type="submit"
                  mt="30px"
                  mb="20px"
                  border="0"
                  disabled={isDisabled}
                >
                  변경하기
                </Button>

                {status && (
                  <Alert status="warning">
                    <AlertIcon />
                    {status}
                  </Alert>
                )}
              </FormControl>
            </PForm>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
