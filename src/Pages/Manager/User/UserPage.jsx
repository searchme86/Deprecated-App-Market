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
import { OffScreen, OffScreenStrong } from '../../../Assets/Styles/Basic.style';
import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';

import defaultImg from '../../../Assets/Image/default_user_page.svg';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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

  //url의 아이디를 가져오기 위한 useParam
  const { nickname } = useParams();

  const initialState = {
    changedPwd: '',
    imageFile: '',
  };
  const { message, changable } = pwdChangable;

  //1. 변경할 비밀번호의 값을 저장할 로컬 스테이트
  const [newProfile, setNewProfile] = useState(initialState);

  // 이전 비밀번호
  const [current, setCurrent] = useState('');
  // 비밀번호 중복여부를 보여주는 텍스트 상태 flag
  const [messageAlert, setMessageAlert] = useState(true);

  // 새로운 비밀번호
  const [renew, setRenew] = useState('');
  const [visible, setVisible] = useState(false);
  // 얼럿이 있으면 글자가 보임
  const [flag, setFlag] = useState(false);

  const { password, imageFile } = newProfile;

  //디비값 없을 경우, 디폴트 값을 설정
  const defaultValue = useRef(null);
  // 비밀번호 중복여부 버튼 클릭 횟수
  const isBtnClicked = useRef(0);
  const btnDisabled = useRef(false);
  // 여기부터 새로 추가

  //  여기까지 새로 추가

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

  //비밀번호 중복확인 핸들러
  const checkDuplicated = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      savePrevious(value);
      btnDisabled.current = false;
    },
    [savePrevious]
  );

  //실제 변경 폼 핸들러
  const updatePwd = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;

      saveCurrent(value);

      if (!isBtnClicked.current > 0) {
        setFlag(true);
        return;
      }
    },
    [saveCurrent]
  );

  //  변경할 수 있는 체크 핸들러 함수
  const checkMatch = (e) => {
    e.preventDefault();
    setFlag(false);

    setMessageAlert(true);
    isBtnClicked.current++;
    console.log('isBtnClicked.current', isBtnClicked.current);
    current &&
      dispatch(checkPwd({ nickname, password: { password: current } }));
  };

  //인풋의 값을 보이고/않보이게 하는 토글 함수
  const showText = () => {
    setVisible((value) => !value);
  };

  const canSubmit = [current, renew].every(Boolean);

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
   *
   *avail 버튼의 활성화 flag
   *canSubmit는 버튼의 활성화 여부를 보여주는 flag



   버튼의 클릭 가능 조건
   : 1. 중복확인 버튼을 클릭한 횟수 0보다 큼

   *  */

  useEffect(() => {
    if (!pwdChangable) {
      defaultValue.current = {
        message: '디비에 값이 존재하지 않습니다.',
      };
    }
  }, [pwdChangable]);

  useEffect(() => {
    setCurrent('');
    setRenew('');
    setMessageAlert(false);
    // setDisabled(true);
  }, []);

  useEffect(() => {
    if (!current) {
      btnDisabled.current = true;
    }
  }, [current]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = () => {};

  console.log('flag', flag);
  // console.log('current', current);
  // console.log('messageAlert', messageAlert);
  console.log('renew', renew);
  console.log('renew.length', renew.length);
  console.log('isBtnClicked.current', isBtnClicked.current);

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
                        </PFormDesList>
                      </PFormDesWrapper>
                      <Input
                        type="text"
                        id="password"
                        name="password"
                        // ref={pwdRef}
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
                          border: '1px solid red',
                        }}
                      >
                        비밀번호 중복확인
                      </Button>
                    </PFormUnit>
                    {messageAlert && (
                      <div className="" style={{ margin: '10px 0 10px 0' }}>
                        {!current && <p>비밀번호가 입력되지 않았습니다.</p>}
                        {current ? changable ? <p>{message}</p> : '' : ''}
                        {current ? changable ? '' : <p>{message}</p> : ''}
                        {!pwdChangable && (
                          <OffScreen>
                            {' '}
                            {defaultValue?.current?.message}
                          </OffScreen>
                        )}
                      </div>
                    )}

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
                          type={visible ? 'text' : 'password'}
                          id="confirmPwd"
                          name="confirmPassword"
                          pr="4.5rem"
                          disabled={btnDisabled.current}
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

                      {flag && (
                        <div>
                          <Alert status="warning">
                            <AlertIcon />
                            이전 비밀번호와 중복여부를 확인 후, 다시
                            시도해주세요
                          </Alert>
                        </div>
                      )}

                      <FormErrorMessage as="p">
                        {errors.confirmPassword &&
                          errors.confirmPassword.message}
                      </FormErrorMessage>
                    </PFormUnit>
                  </li>
                </ul>

                <Button
                  type="submit"
                  display={btnDisabled.current}
                  // onClick={handleChange}

                  mt="20px"
                >
                  변경하기
                </Button>
              </FormControl>
            </PForm>
          </div>
        </div>
        {/* {success && (
          <p
            style={{
              color: 'green',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            Profile has been updated...
          </p>
        )} */}
        {/* <h1>Logged in as: {user?.result?.name}</h1> */}
        {/* {console.log(user)} */}
      </div>
    </>
  );
}

export default UserPage;
