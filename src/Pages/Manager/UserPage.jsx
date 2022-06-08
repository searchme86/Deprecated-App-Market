import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

function UserPage() {
  const initialState = {
    email: '',
    password: '',
    imageFile: '',
  };

  const { user } = useSelector((state) => state.auth);
  const [update, setUpdate] = useState(initialState);

  const { imageFile } = update;

  const {
    result: { imageFile: ImgSrc, name: UserName, email },
  } = user;

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
                      setUpdate({ ...update, imageFile: base64 })
                    }
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="">
                <label htmlFor="changeEmail">유저 이메일</label>
                <div className="">
                  <input type="text" id="changeEmail" placeholder={email} />
                </div>
              </div>
            </li>
            <li>
              <div className="">
                <label htmlFor="changePwd">변경할 비밀번호</label>
                <div className="">
                  <input type="text" id="changePwd" />
                </div>
              </div>
            </li>
            <li>
              <div className="">
                <label htmlFor="confirmPwd">비밀번호 확인</label>
                <div className="">
                  <input type="text" id="confirmPwd" />
                </div>
              </div>
            </li>
          </ul>
        </form>

        <h1>Logged in as: {user?.result?.name}</h1>

        {console.log(user)}
      </div>
    </div>
  );
}

export default UserPage;
