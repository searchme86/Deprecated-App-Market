import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import {
  changeProfile,
  checkPwd,
  AuthSelector,
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
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Textarea,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import FileBase from 'react-file-base64';
import { useDebounce } from '../../../Components/useDebounce';

function UserPage() {
  const {
    auth: {
      user: {
        result: { imageFile: ImgSrc, name: UserName },
      },
      error,
      pwdChangable,
    },
  } = useSelector(AuthSelector);
  const dispatch = useDispatch();

  /**
   * 비밀번호와 프로필 이미지를 변경하기 위해서,
   * changedPwd와 imageFile이라는 빈 값의 변수를 정의합니다,
   */
  const initialState = {
    changedPwd: '',
    imageFile: '',
  };
  const { message, changable } = pwdChangable;

  //1. 변경할 비밀번호의 값을 저장할 로컬 스테이트
  const [newProfile, setNewProfile] = useState(initialState);

  const [visible, setVisible] = useState(false);

  const [current, setCurrent] = useState('');
  const [renew, setRenew] = useState('');

  const [alert, setAlert] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePrevious = useCallback(
    useDebounce((value) => setCurrent(value), 500),
    []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const saveCurrent = useCallback(
    useDebounce((value) => setRenew(value), 500),
    []
  );

  const isChangable = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      savePrevious(value);
    },
    [savePrevious]
  );

  const updatePwd = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;

      const isCurrent = () => {
        if (!current) {
          setAlert('이전 비밀번호를 체크해주세요');
        }
      };

      saveCurrent(value);
      isCurrent();
    },
    [saveCurrent, current]
  );

  //  변경할 수 있는 체크 핸들러 함수
  const checkMatch = (e) => {
    e.preventDefault();
    dispatch(checkPwd({ nickname, password: { password: current } }));
  };

  //인풋의 값을 보이고/않보이게 하는 토글 함수
  const showText = () => {
    setVisible((value) => !value);
  };

  /***
   *
   * renew는 새로운 비빌번호를 저장한 변수
   * renew와 current의 관계를 정리해야함
   *renew가 입력되면
   *1. current가 값이 있는지를 확인한다=>
   미리 확인을 해봤는지를 체크해볼 수 있다.
   값이 없으면 이전 값을 비교해보라고 한다. 동시에 실행버튼이 비활성이 된다.

   *2. current와 값이 일치하는지를 파악한다 => 일치하면 새로운 비밀번호로 하라고 함, 다르면 값이 다르다고 표시한다.
   *
   *  */

  console.log('renew', renew);

  // <------------------------여기까지 완성------------------------>

  //[-비밀번호 확인-]
  //비밀번호 확인 폼에 입력하는 값이 저장하는 로컬 스테이트
  const [confirmValue, setConfirmValue] = useState('');

  // //[-비밀번호 확인-]
  // //비밀번호 확인 값과 비밀번호 확인의 값이 일치하는 검사 로컬 스테이트

  //[-버튼, 변경하기-]
  //모든 작업을 하고 성공했는지를 확인하는 로컬 스테이트
  const [success, setSuccess] = useState(false);

  //url의 아이디를 가져오기 위한 useParam
  const { nickname } = useParams();
  //폼에 포커스를 두기 위한 ref
  const pwdRef = useRef(null);

  const isMatch =
    [current, confirmValue].every(Boolean) && current === confirmValue;
  const allBlank = !current && !confirmValue;
  const confirmBlank = current && !confirmValue;
  const pwdBlank = !current && confirmValue;

  // useEffect(() => {
  //   pwdRef.current.focus();
  //   setAlert('');
  // }, []);

  const defaultValue = useRef(null);
  useEffect(() => {
    if (!pwdChangable) {
      defaultValue.current = {
        message: '디비에 값이 존재하지 않습니다.',
      };
    }
  }, [pwdChangable]);

  useEffect(() => {
    if (!current || !confirmValue) {
      setAlert(null);
      // console.log('ddd');
    }
  }, [current, confirmValue]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  //초기화된 값을 사용하기 위한
  const { password, imageFile } = newProfile;

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleMatch = () => {
    if (isMatch) {
      setAlert('비밀번호가 일치합니다.');
    } else {
      setAlert('비밀번호가 일치하지 않습니다.');
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = () => {};

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
              유저 정보를 변경해주세요
            </strong>
            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl>
                <ul>
                  <li style={{ marginBottom: '15px' }}>
                    <div
                      style={{
                        display: 'flex',

                        alignItems: 'center',
                      }}
                    >
                      <ImageHolder width="80px" height="80px" br="100%">
                        <Image
                          src={!imageFile ? ImgSrc : imageFile}
                          alt={UserName}
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
                  <li>
                    {/* 변경할 비밀번호 영역 */}
                    <PFormUnit>
                      <FormLabel htmlFor="password">
                        이전 비밀번호 확인
                      </FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>
                              이전의 비밀번호와 일치여부를 확인합니다.
                            </PFormDes>
                          </PFormDesLi>
                          <PFormDesLi>
                            <PFormDes>
                              이전의 비밀번호와 일치여부 상관없이
                              변경가능합니다.
                            </PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <Input
                        type="text"
                        id="password"
                        name="password"
                        ref={pwdRef}
                        {...register('password', {
                          onChange: isChangable,
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
                          border: '1px solid red',
                        }}
                      >
                        비밀번호 중복확인
                      </Button>
                    </PFormUnit>

                    <div className="" style={{ margin: '10px 0 10px 0' }}>
                      {changable ? <p>{message}</p> : ''}
                      {changable ? '' : <p>{message}</p>}
                      {!pwdChangable && <p>{defaultValue?.current?.message}</p>}
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
                      <InputGroup size="md">
                        <Input
                          id="confirmPwd"
                          name="confirmPassword"
                          onKeyUp={handleMatch}
                          pr="4.5rem"
                          type={visible ? 'text' : 'password'}
                          placeholder="변경하려는 비밀번호를 입력해주세요"
                          {...register('confirmPassword', {
                            required:
                              '소문자 대문자 그리고 숫자 특수문자(!@#$%)를 포함한 총 8자에서 24자로 작성해주세요',
                            pattern:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                            onChange: updatePwd,
                          })}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={showText}>
                            {visible ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      {alert}
                      <FormErrorMessage as="p">
                        {errors.confirmPassword &&
                          errors.confirmPassword.message}
                      </FormErrorMessage>
                    </PFormUnit>
                  </li>
                </ul>

                <Button
                  type="submit"
                  onClick={handleChange}
                  disabled={!isMatch}
                  mt="20px"
                >
                  변경하기
                </Button>
              </FormControl>
            </PForm>
          </div>
        </div>
        {success && (
          <p
            style={{
              color: 'green',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Profile has been updated...
          </p>
        )}
        {/* <h1>Logged in as: {user?.result?.name}</h1> */}
        {/* {console.log(user)} */}
      </div>
    </>
  );
}

export default UserPage;
