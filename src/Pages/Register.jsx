import React, { useRef, useState, useEffect, useMemo } from 'react';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CheckValidName, CheckValidPwd } from '../Config/Validator';
import { apiPost } from '../Config/Api/Axios';
import { ErrorHandler } from '../Config/ErrorHandler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Register() {
  const REGISTER_URL = '/auth/user';

  const userRef = useRef(null);

  //폼,이메일의 내용을 저장
  const [userEmail, setUserEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const [userPwd, setUserPwd] = useState('');
  const [isMatchPwd, setIsMatchPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [validPwdMatch, setValidPwdMatch] = useState(false);

  const [formFocus, setformFocus] = useState(false);
  const [userPwdFocus, setUserPwdFocus] = useState(false);
  const [conFirmFocus, setConfirmFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  let validUserInput = useMemo(() => CheckValidName(userEmail), [userEmail]);
  let validpwdInput = useMemo(() => CheckValidPwd(userPwd), [userPwd]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // setValidEmail(CheckValidName(userEmail));
    setValidEmail(validUserInput);
  }, [validUserInput]);

  useEffect(() => {
    // setValidPwd(CheckValidPwd(userPwd));
    setValidPwd(validpwdInput);
    setValidPwdMatch(userPwd === isMatchPwd);
  }, [isMatchPwd, userPwd, validpwdInput]);

  useEffect(() => {
    setErrMsg('');
  }, [userEmail, userPwd, isMatchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefalt();
    // const v1 = CheckValidName(userEmail);
    const v1 = validUserInput;
    // const v2 = CheckValidPwd(userPwd);
    const v2 = validpwdInput;
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const response = await apiPost('post', REGISTER_URL, {
        userEmail,
        userPwd,
      });
      console.log(JSON.stringify(response?.data));
      setSuccess(true);
      setUserEmail('');
      setUserPwd('');
      setIsMatchPwd('');
    } catch (error) {
      const message = ErrorHandler(error);
      setErrMsg(message);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <Link>
            <p>Sign In</p>
          </Link>
        </section>
      ) : (
        <section>
          <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>

          <h1>Register</h1>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="username">
                Username:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validEmail ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validEmail || !userEmail ? 'hide' : 'invalid'}
                />
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setformFocus(true)}
                onBlur={() => setformFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  formFocus && userEmail && !validEmail
                    ? 'instructions'
                    : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </fieldset>
            <fieldset>
              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPwd ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwd || !userPwd ? 'hide' : 'invalid'}
                />
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setUserPwd(e.target.value)}
                value={userPwd}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setUserPwdFocus(true)}
                onBlur={() => setUserPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={
                  userPwdFocus && !validPwd ? 'instructions' : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                다음의 특수문자가 허용됩니다:{' '}
                <span aria-label="느낌표 문자">!</span>{' '}
                <span aria-label="골뱅이 문자">@</span>{' '}
                <span aria-label="해쉬태그 문자">#</span>{' '}
                <span aria-label="달러사인 문자">$</span>{' '}
                <span aria-label="퍼센트 문자">%</span>
              </p>
            </fieldset>

            <fieldset>
              <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPwdMatch && isMatchPwd ? 'valid' : 'hide'}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwdMatch || !isMatchPwd ? 'hide' : 'invalid'}
                />
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setIsMatchPwd(e.target.value)}
                value={isMatchPwd}
                required
                aria-invalid={validPwdMatch ? 'false' : 'true'}
                aria-describedby="confirmnote"
                onFocus={() => setConfirmFocus(true)}
                onBlur={() => setConfirmFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  conFirmFocus && !validPwdMatch ? 'instructions' : 'offscreen'
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
            </fieldset>

            <button
              disabled={
                !validEmail || !validPwd || !validPwdMatch ? true : false
              }
            >
              Sign Up
            </button>
          </form>

          <div className="">
            <strong>Already registered?</strong>
            <ul>
              <li className="line">
                <Link to="/">Sign In</Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default Register;
