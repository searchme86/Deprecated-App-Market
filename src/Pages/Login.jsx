import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { apiPost } from '../Config/Api/Axios';
import { ErrorHandler } from '../Config/ErrorHandler';

function Login() {
  const LOGIN_URL = '/auth/login';

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const userInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const whereUserfrom = location.state?.from?.pathname || '/';

  useEffect(() => {
    userInputRef.current.focus();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {
        data: { roles, accessToken },
      } = await apiPost('post', LOGIN_URL, { user, pwd });
      setUser('');
      setPwd('');
      navigate(whereUserfrom, { replace: true });
    } catch (error) {
      const message = ErrorHandler(error);
      setErrMsg(message);
    }
  };

  return (
    <section>
      <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userInputRef}
          onChange={(e) => setUser(e.target.value)}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        {/* <div className="persistCheck">
          <input
            type="checkbox"
            id="persist"
            onChange={toggleCheck}
            checked={check}
          />
          <label htmlFor="persist">Trust This Device</label>
        </div> */}
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
}

export default Login;
