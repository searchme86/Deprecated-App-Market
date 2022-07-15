import React from 'react';
import { useSelector } from 'react-redux';
import { AuthSelector } from '../Store/Features/AuthSlice';
import LoadingToRedirect from './LoadingToRedirect';

function PrivateRoute({ children }) {
  const {
    auth: { user },
  } = useSelector(AuthSelector);

  return user ? children : <LoadingToRedirect />;
}

export default PrivateRoute;
