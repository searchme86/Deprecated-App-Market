import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import PrivateRoute from '../Components/PrivateRoute';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import { setUser } from '../Store/Features/AuthSlice';
import AddEditTour from '../Pages/AddEditTour';
import SingleTour from '../Pages/SingleTour';
import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/NotFound';
import TagTours from '../Pages/TagTours';
import UserPage from '../Pages/Manager/User/UserPage';
import UploadCategory from '../Pages/Manager/category/UploadCategory';
import { useDispatch } from 'react-redux';
import UserMain from '../Pages/Manager/User/UserMain';
import ProductUpload from '../Pages/Manager/Product/ProductUpload';
import ProductEdit from '../Pages/Manager/Product/ProductEdit';
import ProductDetail from '../Pages/ProductDetail';
import UserEnter from '../Pages/Manager/User/Enter/UserEnter';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProductList from '../Pages/ProductList';

function AnimatedRoutes() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  console.log('--****--router에서 user--****--', user);
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserEnter />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tours/search" element={<Home />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/tours/tag/:tag" element={<TagTours />} />
          <Route
            path="/profile/:nickname"
            element={
              <PrivateRoute>
                <UserMain />
              </PrivateRoute>
            }
          >
            <Route
              path=":nickname"
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/category"
            element={
              <PrivateRoute>
                <UploadCategory />
              </PrivateRoute>
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <ProductUpload />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <ProductEdit />
              </PrivateRoute>
            }
          />
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
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
