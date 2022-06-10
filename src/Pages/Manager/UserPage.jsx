import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { changeProfile, checkPwd } from '../../Store/Features/AuthSlice';
import FileBase from 'react-file-base64';

/*
 *
pwd : 폼에 텍스트 입력시 저장할 스테이트
*/

function UserPage() {
  const initialState = {
    changedPwd: '',
    imageFile: '',
    confirmPassword: '',
  };

  const [newProfile, setNewProfile] = useState(initialState);

  //폼에 입력하는 비밀번호를 저장하는 로컬 스테이트
  const [pwd, setPwd] = useState('');
  //모든 작업을 하고 성공했는지를 확인하는 로컬 스테이트
  const [success, setSuccess] = useState(false);

  //url의 아이디를 가져오기 위한 useParam
  const { nickname } = useParams();
  //폼에 포커스를 두기 위한 ref
  const pwdRef = useRef(null);

  const { user, error, pwdChangable } = useSelector((state) => state.auth);
  const {
    result: { imageFile: ImgSrc, name: UserName },
  } = user;
  const dispatch = useDispatch();

  // -----------------------------------------

  // 비밀번호 중복확인에 대한 변수 추출
  const { message, changable } = pwdChangable;

  const { password, imageFile, confirmPassword } = newProfile;

  //폼에 연결된 onChange 핸들러
  // 비밀번호를 입력할때 이것을 pwd에 저장하는 핸들러
  const isChangable = (e) => {
    setPwd(e.target.value);
    console.log('pwd', pwd);
    console.log({ nickname, password: pwd });
  };

  //변경하려는 비밀번호의 중복확인 핸들러
  //버튼 비밀번호 중복확인
  const checkMatch = (e) => {
    e.preventDefault();
    dispatch(checkPwd({ nickname, password: { password: pwd } }));
  };

  useEffect(() => {
    pwdRef.current.focus();
  }, []);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  console.log(
    'pwdChangable , message, changable',
    pwdChangable,
    message,
    changable
  );

  console.log('imageFile', imageFile);
  return (
    <div className="settings">
      <h1 className="settingsUpdateTitle">Update Your Account</h1>
      <div>
        <form className="">
          <ul>
            <li>
              <div className="" style={{ position: 'relative' }}>
                <label htmlFor="userImg">유저 프로필 사진</label>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={!imageFile ? ImgSrc : imageFile}
                    alt={UserName}
                    style={{ display: 'block', width: '100%' }}
                  />
                </div>
                <div className="" style={{ position: 'absolute', bottom: '0' }}>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setNewProfile({ ...newProfile, imageFile: base64 })
                    }
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="">
                <label htmlFor="changePwd">변경할 비밀번호</label>
                <div className="">
                  <input
                    ref={pwdRef}
                    type="text"
                    id="changePwd"
                    autoComplete="off"
                    onChange={isChangable}
                    // aria-invalid={validPwd ? 'false' : 'true'}
                    aria-describedby="변경 비밀번호"
                  />
                </div>
                <button type="button" onClick={checkMatch}>
                  비밀번호 중복확인
                </button>
                {changable ? <p>{message}</p> : ''}
                {changable ? '' : <p>{message}</p>}
              </div>
            </li>
            <li>
              <div className="">
                <label htmlFor="confirmPwd">비밀번호 확인</label>
                <div className="">
                  <input
                    type="text"
                    id="confirmPwd"
                    name="confirmPassword"
                    autoComplete="off"
                    value={confirmPassword}
                    // onChange={valueChange}
                    // aria-invalid={confirmValid ? 'false' : 'true'}
                    aria-describedby="변경 비밀번호 확인"
                  />
                </div>
                {/* {confirmValid ? (
                  <p>비밀번호가 일치합니다</p>
                ) : (
                  <p>비밀번호가 일치하지 않습니다</p>
                )} */}
              </div>
            </li>
          </ul>
          <button type="submit">변경하기</button>
        </form>
        {success && (
          <p style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>
            Profile has been updated...
          </p>
        )}
        <h1>Logged in as: {user?.result?.name}</h1>

        {console.log(user)}
      </div>
    </div>
  );
}

export default UserPage;
