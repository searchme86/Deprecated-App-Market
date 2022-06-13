import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout';
// import Login from '../Pages/onHold/Login';
// import Register from '../Pages/onHold/Register';
// import Contactus from '../Pages/onHold/Contactus';
// import Products from '../Pages/onHold/Products';
// import Marketing from '../Pages/onHold/Marketing';
// import Services from '../Pages/onHold/Services';
// import Signup from '../Pages/onHold/Signup';
// import Development from '../Pages/onHold/Developement';
// import Design from '../Pages/onHold/Design';
// import Consulting from '../Pages/onHold/Consulting';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

import { useDispatch } from 'react-redux';

import Header from '../Components/Header';
import PrivateRoute from '../Components/PrivateRoute';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { setUser } from '../Store/Features/AuthSlice';
import AddEditTour from '../Pages/AddEditTour';
import SingleTour from '../Pages/SingleTour';
import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/NotFound';
import TagTours from '../Pages/TagTours';
import UserPage from '../Pages/Manager/UserPage';
import UploadProduct from '../Pages/Manager/UploadProduct';

function Router() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours/search" element={<Home />} />
        <Route path="/tours/tag/:tag" element={<TagTours />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile">
          <Route
            path=":nickname"
            element={
              <PrivateRoute>
                <UserPage />
              </PrivateRoute>
            }
          />
        </Route>
        {/*  */}
        <Route
          path="/upload"
          element={
            <PrivateRoute>
              <UploadProduct />
            </PrivateRoute>
          }
        />
        {/*  */}
        <Route
          path="/addTour"
          element={
            <PrivateRoute>
              <AddEditTour />
            </PrivateRoute>
          }
        />
        <Route
          path="/editTour/:id"
          element={
            <PrivateRoute>
              <AddEditTour />
            </PrivateRoute>
          }
        />
        <Route path="/tour/:id" element={<SingleTour />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
