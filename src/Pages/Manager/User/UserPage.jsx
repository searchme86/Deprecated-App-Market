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

  //폼에 입력하는 비밀번호를 저장하는 로컬 스테이트
  const [pwd, setPwd] = useState('');
  //
  //
  //
  //
  //
  //
  //

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    useDebounce((value) => setPwd(value), 5000),
    []
  );

  const isChangable = useCallback(
    (e) => {
      debounceSearch(e.target.value);
      // handleMatch();
      // console.log('pwd', pwd);
      // console.log({ nickname, password: pwd });
    },
    [debounceSearch]
  );

  console.log('pwd', pwd);

  // <--------여기까지 완성-------->

  const [newProfile, setNewProfile] = useState(initialState);

  //[-비밀번호 확인-]
  //비밀번호 확인 폼에 입력하는 값이 저장하는 로컬 스테이트
  const [confirmValue, setConfirmValue] = useState('');

  // //[-비밀번호 확인-]
  // //비밀번호 확인 값과 비밀번호 확인의 값이 일치하는 검사 로컬 스테이트

  const [alert, setAlert] = useState('');

  //[-버튼, 변경하기-]
  //모든 작업을 하고 성공했는지를 확인하는 로컬 스테이트
  const [success, setSuccess] = useState(false);

  //url의 아이디를 가져오기 위한 useParam
  const { nickname } = useParams();
  //폼에 포커스를 두기 위한 ref
  const pwdRef = useRef(null);

  const isMatch = [pwd, confirmValue].every(Boolean) && pwd === confirmValue;
  const allBlank = !pwd && !confirmValue;
  const confirmBlank = pwd && !confirmValue;
  const pwdBlank = !pwd && confirmValue;

  // useEffect(() => {
  //   pwdRef.current.focus();
  //   setAlert('');
  // }, []);

  useEffect(() => {
    if (!pwd || !confirmValue) {
      setAlert(null);
      // console.log('ddd');
    }
  }, [pwd, confirmValue]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  // 비밀번호 중복확인에 대한 변수 추출
  // 리덕스와 관련있음
  const { message, changable } = pwdChangable;

  //초기화된 값을 사용하기 위한
  const { password, imageFile } = newProfile;

  //[-변경할 비밀번호-], 리덕스
  //변경하려는 비밀번호의 중복확인 핸들러
  //버튼 비밀번호 중복확인을 위한 dispatch
  const checkMatch = (e) => {
    e.preventDefault();
    dispatch(checkPwd({ nickname, password: { password: pwd } }));
  };

  // <--------비밀번호 확인-------->

  //[-비밀번호 확인-]
  // 비밀번호 확인 폼에 값을 저장하는 핸들러
  const handleConfirm = (e) => {
    setConfirmValue(e.target.value);

    handleMatch();
  };

  //[-비밀번호 확인-]
  // 변경할 비밀번호와 비밀번호 확인에 입력한 값이 일치하는지 파악

  //[-변경하기 버튼-]
  //변경하기 버튼을 클릭시, 활성화 되는 핸들러
  //버튼의 핸들러
  const handleChange = (e) => {
    e.preventDefault();
  };

  // console.log('allBlank', allBlank);
  // console.log('confirmBlank', confirmBlank);
  // console.log('pwdBlank', pwdBlank);

  const handleMatch = () => {
    if (isMatch) {
      setAlert('비밀번호가 일치합니다.');
    } else {
      setAlert('비밀번호가 일치하지 않습니다.');
    }
  };

  // 1. 만약 하나 폼이 있으면,
  // console.log(
  //   'pwdChangable , message, changable',
  //   pwdChangable,
  //   message,
  //   changable
  // );

  // console.log('imageFile', imageFile);
  // console.log('match', pwd === confirmValue);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
            <PForm>
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
                      <FormLabel htmlFor="password">변경할 비밀번호</FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>변경할 비밀번호를 입력해주세요</PFormDes>
                          </PFormDesLi>
                          <PFormDesLi>
                            <PFormDes>
                              변경할 비밀번호가 이미 사용중인지 중복버튼을
                              눌러주세요
                            </PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <Input
                        type="text"
                        id="password"
                        name="password"
                        ref={pwdRef}
                        // onKeyUp={handleMatch}
                        {...register('password', {
                          required: '변경할 비밀번호가 입력되지 않았습니다.',
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
                    </div>

                    <PFormUnit>
                      <FormLabel htmlFor="confirmPwd">비밀번호 확인</FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>
                              변경한 비밀번호를 다시 입력해주세요
                            </PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <Input
                        type="text"
                        id="confirmPwd"
                        name="confirmPassword"
                        onChange={handleConfirm}
                        onKeyUp={handleMatch}
                        {...register('confirmPassword', {
                          required: '',
                          // onChange: onInputChange,
                        })}
                      />
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
