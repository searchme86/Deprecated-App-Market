import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../Store/Features/AuthSlice';
import { LoginBgShapehape, LoginWrapper, LonginContainer } from './Login.style';
import BgAnimation from '../Components/BgAnimation';

const initialState = {
  email: '',
  password: '',
};

function Login() {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // const devEnv = process.env.NODE_ENV !== 'production';

  return (
    <LoginWrapper>
      <LonginContainer
        style={{
          padding: '15px',
          maxWidth: '450px',
          alignContent: 'center',
        }}
      >
        <MDBCard alignment="center">
          <MDBIcon fas icon="user-circle" className="fa-2x" />
          <h5>Sign In</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              noValidate
              className="row g-3"
            >
              <div className="col-md-12">
                <MDBInput
                  label="Email"
                  type="email"
                  value={email}
                  name="email"
                  onChange={onInputChange}
                  required
                  invalid
                  validation="Please provide your email"
                />
              </div>
              <div className="col-md-12">
                <MDBInput
                  label="Password"
                  type="password"
                  value={password}
                  name="password"
                  onChange={onInputChange}
                  required
                  invalid
                  validation="Please provide your password"
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: '100%' }} className="mt-2">
                  {loading && (
                    <MDBSpinner
                      size="sm"
                      role="status"
                      tag="span"
                      className="me-2"
                    />
                  )}
                  Login
                </MDBBtn>
              </div>
            </MDBValidation>
            <br />
          </MDBCardBody>
          <MDBCardFooter>
            <Link to="/register">
              <p>Don't have an account ? Sign Up</p>
            </Link>
          </MDBCardFooter>
        </MDBCard>
        <LoginBgShapehape />
        <BgAnimation />
      </LonginContainer>
    </LoginWrapper>
  );
}

export default Login;
